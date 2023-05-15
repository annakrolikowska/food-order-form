import React, { FC, ReactNode } from 'react';
import '../styles/components-styles/Button.css';

interface ButtonProps {
    className: string;
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, children }) => {
    return <button className={className} type='submit'>{children}</button>;
};

export default Button;
