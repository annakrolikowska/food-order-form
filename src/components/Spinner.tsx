import React from 'react';
import '../styles/components-styles/Spinner.css';

const Spinner: React.FC = () => {
    return (
        <div className="spinner">
            <div className="spinner__element"></div>
            <p>We look forward to making the order</p>
        </div>
    );
}

export default Spinner;
