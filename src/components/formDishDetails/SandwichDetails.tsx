import React, { FC } from 'react';
import { Field } from 'react-final-form';

const SandwichDetails: FC = () => {
    return (
        <label>
            <Field
                className="form__input"
                component="input"
                type="number"
                id="slices_of_bread"
                name="slices_of_bread"
                min="1"
                required
            />
            <span className="form__label">Slices of bread</span>
        </label>
    );
};

export default SandwichDetails;
