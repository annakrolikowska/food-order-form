import React, { FC } from 'react';
import { Field } from 'react-final-form';

const PizzaDetails: FC = () => {
    return (
        <div className="form__input-container">
            <label>
                <Field
                    className="form__input"
                    component="input"
                    type="number"
                    id="no_of_slices"
                    name="no_of_slices"
                    min="1"
                    required
                />
                <span className="form__label form__label--slices">No of slices</span>
            </label>
            <label>
                <Field
                    className="form__input"
                    component="input"
                    type="number"
                    id="diameter"
                    name="diameter"
                    min="15"
                    required
                />
                <span className="form__label form__label--diameter">Diameter</span>
            </label>
        </div>
    );
};

export default PizzaDetails;
