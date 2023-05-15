import React, { FC } from 'react';
import {Soup} from "../../api/dish";

const SoupConfirmationDetails: FC<Soup> = (soup) => {
    return (
        <ul>
            <li>Type: <span>{soup.type}</span></li>
            <li>Spiciness scale: <span>{soup.spiciness_scale}</span></li>
        </ul>
    );
};

export default SoupConfirmationDetails;
