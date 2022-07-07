import React from "react";
// @ts-ignore
import style from '../../src/App.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button type="submit" className="btn btn-primary"{...props}>
            {children}</button>
    )
}

export default Button