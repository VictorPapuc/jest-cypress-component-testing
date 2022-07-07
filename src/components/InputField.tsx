import React from "react";


interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string
    label: string;
    requiredMessage: string;
    submitted?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({label, requiredMessage, submitted, children, ...props}) => {
    return (

        <label htmlFor="email" className="form-label">
            {label}

            <input
                className="form-control"{...props}
                aria-invalid={submitted && !props.value}
                aria-errormessage="error-username"
                {...props}
            />
            <span id="error-username" className='error'>{requiredMessage}</span>
        </label>

        //only for test
    )
}

export default InputField