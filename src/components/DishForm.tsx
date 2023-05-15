import React, {useState} from 'react';
import {Field, Form} from 'react-final-form';
import '../styles/components-styles/DishForm.css';
import SoupDetails from './formDishDetails/SoupDetails';
import PizzaDetails from './formDishDetails/PizzaDetails';
import Button from './Button';
import SandwichDetails from './formDishDetails/SandwichDetails';
import {generateDish} from "../api/dish";
import DishAPI from "../api/DishAPI";
import Alert from "./Alert";
import {useNavigate} from "react-router-dom";
import Spinner from "./Spinner";

interface FormValues {
    dish_name: string;
    preparation_time: string;
    dish_type: string;
}

const api = new DishAPI()

const DishForm: React.FC = () => {

    const navigate = useNavigate()

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const renderDishProperties = (values: FormValues) => {
        switch (values.dish_type) {
            case 'pizza':
                return <PizzaDetails/>;
            case 'soup':
                return <SoupDetails/>;
            case 'sandwich':
                return <SandwichDetails/>;
            default:
                return null;
        }
    };


    const onSubmit = (values: any) => {

        setIsLoading(true)

        const dish = generateDish(values);
        if (!dish) {
            setIsLoading(false);
            setIsAlertOpen(true)
            return
        }
        api.createDish(dish)
            .then(response => {
                setIsLoading(false);
                navigate("/orderSummary", {state: {dish: response}})
            })
            .catch(error => {
                setIsAlertOpen(true)
                setIsLoading(false);
            });
    };

    return (
        <>
            {isLoading && <Spinner/>}
            {!isLoading && <Form
                onSubmit={onSubmit}
                initialValues={{dish_name: '', spiciness: '1'}}
                render={({handleSubmit, values}) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <label>
                            <Field
                                name="dish_name"
                                component="input"
                                type="text"
                                className="form__input"
                                placeholder="&nbsp;"
                                pattern="^[a-zA-Z0-9 ]{3,}$"
                                required
                            />
                            <span className="form__label">Dish name</span>
                        </label>
                        <label>
                            <Field
                                name="preparation_time"
                                className="form__input"
                                component="input"
                                type="time"
                                placeholder="&nbsp;"
                                required
                                step="1"
                            />
                            <span className="form__label">Preparation time</span>
                        </label>
                        <label>
                            <Field
                                component="select"
                                className="form__input"
                                name="dish_type"
                                placeholder="&nbsp;"
                                required
                            >
                                <option/>
                                <option value="pizza">🍕 Pizza</option>
                                <option value="soup"> 🍲 Soup</option>
                                <option value="sandwich">🥪 Sandwich</option>
                            </Field>
                            <span className="form__label">Dish type</span>
                        </label>
                        {renderDishProperties(values)}
                        <Button className="button">Submit</Button>
                    </form>
                )}
            />}
            <Alert isOpen={isAlertOpen} onCancel={() => setIsAlertOpen(false)} message={"name"}/>
        </>
    );
};

export default DishForm;
