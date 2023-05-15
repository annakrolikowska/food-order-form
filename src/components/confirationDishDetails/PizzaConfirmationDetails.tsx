import React, { FC } from 'react';
import {Pizza} from "../../api/dish";

const PizzaConfirmationDetails: FC<Pizza> = (pizza) => {
    return (
        <ul>
            <li>Type: <span>{pizza.type}</span></li>
            <li>No of slices: <span>{pizza.no_of_slices}</span></li>
            <li>Diameter: <span>{pizza.diameter}</span> cm</li>
        </ul>
    );
};

export default PizzaConfirmationDetails;
