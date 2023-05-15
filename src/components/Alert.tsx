import React, { FC } from "react";
import '../styles/components-styles/Alert.css';

interface AlertProps {
    isOpen: boolean;
    onCancel: () => void;
    message: string;
    type?: string;
}

const Alert: FC<AlertProps> = ({ isOpen, onCancel, message, type }) => {
    const handleCancel = () => {
        onCancel();
    };

    return isOpen ? (
        <div className="alert" data-type={type}>
            <h3>Unfortunately, we encountered a problem with your order. Please try again in a moment.</h3>
            <button onClick={handleCancel}>Confirm</button>
        </div>
    ) : null;
};

export default Alert;
