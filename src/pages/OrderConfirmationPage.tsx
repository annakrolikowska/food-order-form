import React, {FC, useEffect} from 'react';
import Button from '../components/Button';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Pizza, Sandwich, Soup} from '../api/dish';
import '../styles/pages-styles/OrderConfirmation.css'
import PizzaConfirmationDetails from "../components/confirationDishDetails/PizzaConfirmationDetails";
import SoupConfirmationDetails from "../components/confirationDishDetails/SoupConfirmationDetails";
import SandwichConfirmationDetails from "../components/confirationDishDetails/SandwichConfirmationDetails";

const OrderConfirmationPage: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {state} = location;
    const dish = state?.dish;

    useEffect(() => {
        if (!dish || !state) {
            navigate(`${process.env.PUBLIC_URL}`);
        }
    }, [dish, state, navigate]);

    if (!dish || !state) {
        return null;
    }

    const renderDishDetails = () => {
        switch (dish.type) {
            case 'pizza':
                const pizza = dish as Pizza;
                return (
                    <PizzaConfirmationDetails {...pizza}/>
                );
            case 'soup':
                const soup = dish as Soup;
                return (<SoupConfirmationDetails {...soup}/>);
            case 'sandwich':
                const sandwich = dish as Sandwich;
                return (
                    <SandwichConfirmationDetails {...sandwich}/>
                );
            default:
                return null;
        }
    };

    const formatTime = (time: string): string => {
        const [hours, minutes, seconds] = time.split(':');
        return `${parseInt(hours, 10)} hours, ${parseInt(minutes, 10)} minutes, and ${parseInt(seconds, 10)} seconds`;
    };

      const formattedTime = formatTime(dish.preparation_time);
      

    return (
        <section className="confirmation app-container">
            <header>
                <h2 className="confirmation__title">Thank you for placing your order</h2>
                <img src={`${process.env.PUBLIC_URL}/order-img.png`}  alt="logo"  width="80%"/>
            </header>
            <div className="confirmation__container">
                <p className="confirmation__text">
                    Your dish <span className="confirmation__dish-name">{dish.name}</span> will be ready in <span
                    className="confirmation__time">{formattedTime}</span> 
                </p>
                {renderDishDetails()}
                <Button className="button button--return">
                    <Link to={process.env.PUBLIC_URL}>Order again</Link>
                </Button>
            </div>
        </section>
    );
}

export default OrderConfirmationPage;
