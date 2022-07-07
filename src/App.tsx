import './App.css';
import {useState} from "react";
import validator from 'validator';
import React from 'react';
import Button from "./components/Button";
import InputField from "./components/InputField";

interface LoginFormProps {

}

const Form: React.FC<LoginFormProps> = () => {

    const [signInput, setSignInput] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState("")

    const handleChange = (e: any) => {
        setSignInput({
            ...signInput,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e: any) => {
        e.preventDefault();

        if (!validator.isEmail(signInput.email)) {
            return setError("the email input is invalid")
        } else if (signInput.password.length < 5) {
            return setError('the password should contain 5 elements')
        } else if (signInput.password !== signInput.confirmPassword) {
            return setError('the password do not match try again')
        }
    }

    return (
        <div className="container my-5">
            <form>
                <div className="mb-3">
                    <InputField
                        id="email"
                        name="email"
                        value={signInput.email}
                        onChange={handleChange}
                        label='Email'
                        requiredMessage={'Email is required'}
                        submitted={true}
                        type="email"/>
                </div>
                <div className="mb-3">
                    <InputField type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                value={signInput.password}
                                onChange={handleChange} label={'Password'} requiredMessage={'Password is required'}
                                submitted={true}>
                    </InputField>

                </div>
                <div className="mb-3">
                    <label htmlFor="confirm-password" className="form-label">
                        Confirm Password
                    </label>
                    <input type="password"
                           id="confirm-password"
                           name="confirmPassword"
                           className="form-control"
                           value={signInput.confirmPassword}
                           onChange={handleChange}
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <Button onClick={handleClick}>Submit</Button>
            </form>
        </div>
    )
}

export default Form;
