import React, { FC } from 'react';
import {Sandwich} from "../../api/dish";

const SandwichConfirmationDetails: FC<Sandwich> = (sandwich) => {
    return (
        <ul>
            <li>Type: <span>{sandwich.type}</span></li>
            <li>Slices of bread: <span>{sandwich.slices_of_bread}</span></li>
        </ul>
    );
};

export default SandwichConfirmationDetails;
