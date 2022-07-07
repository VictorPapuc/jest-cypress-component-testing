import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App/>)
});


const typeIntoForm = ({email, password, confirmPassword}) => {
    const emailInputElement = screen.getByRole("textbox", {
        name: /email/i
    });
    const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i)

    const passwordInputElement = screen.getByLabelText("Password");
    if (email) {
        userEvent.type(emailInputElement, email)
    }
    if (password) {
        userEvent.type(passwordInputElement, password)
    }
    if (confirmPassword) {
        userEvent.type(confirmPasswordInputElement, confirmPassword)
    }

    return {emailInputElement, confirmPasswordInputElement, passwordInputElement}
}

const submitAction = () => {
    const submitButtonElement = screen.getByRole("button", {
        name: /submit/i
    })
    userEvent.click(submitButtonElement);
}

describe('Error Handling', () => {
    test("Should show email error message on invalid email", () => {
        const emailErrorElement = screen.queryByText(/the email input is invalid/i)
        expect(emailErrorElement).not.toBeInTheDocument()

        typeIntoForm({email: 'victorpapucgmail.com'})
        submitAction()
        const emailErrorElementAgain = screen.queryByText(/the email input is invalid/i)
        expect(emailErrorElementAgain).toBeInTheDocument()

    })


    test("Should show password error if password is less than 5 characters", () => {

        const passErrorElement = screen.queryByText(/the password should contain 5 elements/i)

        typeIntoForm({email: 'victorpapuc@gmail.com', password: 'ABCD'});

        expect(passErrorElement).not.toBeInTheDocument();

        submitAction()

        const passErrorElementAgain = screen.queryByText(/the password should contain 5 elements/i)

        expect(passErrorElementAgain).toBeInTheDocument();
    })

    test("Should show error message if the password do not match", () => {

        const confirmPasswordError = screen.queryByText(/the password do not match try again/i)


        typeIntoForm({email: 'victorpapuc@gmail.com', password: '12345', confirmPassword: '123456'})
        expect(confirmPasswordError).not.toBeInTheDocument()

        submitAction();
        const againConfirmPasswordError = screen.queryByText(/the password do not match try again/i)
        expect(againConfirmPasswordError).toBeInTheDocument();
    })

    test("Should not show error message if everything is good", () => {

        typeIntoForm({email: 'victorpapuc@gmail.com', password: '12345', confirmPassword: '12345'})
        submitAction()
        expect(screen.queryByText(/the password do not match try again/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/the password should contain 5 elements/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/the email input is invalid/i)).not.toBeInTheDocument()

    })

})
test("input should be initially empty", () => {

    const emailInputElement = screen.getByRole("textbox");
    const passwordInputElement = screen.getByLabelText("Password");
    const confirmPassword = screen.getByLabelText(/confirm password/i)

    expect(emailInputElement.value).toBe("")
    expect(passwordInputElement.value).toBe("")
    expect(confirmPassword.value).toBe("")
})

test("Should be able to type an email", () => {

    const {
        emailInputElement
    } = typeIntoForm({email: 'victorpapuc@gmail.com'})
    expect(emailInputElement).toHaveValue('victorpapuc@gmail.com')
})

test("Should be able to type an password", () => {
    const {passwordInputElement} = typeIntoForm({password: 'victorpapuc@gmail.com'})
    expect(passwordInputElement).toHaveValue('victorpapuc@gmail.com')
})

test("Should be able to type an confirm password", () => {

    const {confirmPasswordInputElement} = typeIntoForm(
        {confirmPassword: 'victorpapuc@gmail.com'})
    expect(confirmPasswordInputElement).toHaveValue('victorpapuc@gmail.com')

})

