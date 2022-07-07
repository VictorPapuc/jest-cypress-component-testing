import React from "react";
import InputField from "../InputField";

describe('Input Field', () => {
    it('Render app', () => {
        mount(<InputField
            name="name"
            label="Name"
            requiredMessage="Name is required"
            value={'123'}
            submitted={false}
            type="email"/>)
    });
})

it('should show error if field is blank and form has been submitted', () => {
    mount(<InputField
        name="name"
        label="Name"
        requiredMessage="Name is required"
        value={'123'}
        submitted={false}
        type="email"/>)

    cy.get('span').contains('Name is required').should('be.visible')
})


it('should not show error if field is blank and form has been submitted', () => {
    mount(<InputField
        name="name"
        label="Name"
        requiredMessage="Name is required"
        value={'123'}
        submitted={true}
        type="email"/>)

    cy.get('span').contains('Name is required').should('be.visible')
})

it('when input is modified', () => {
    mount(<InputField
        name="name"
        label="Name"
        requiredMessage="Name is required"
        submitted={true}
        onChange={cy.spy().as('onChangeSpy')}
        type="email"
    />)

    //type into input
    cy.get('input').type('abc123')

    //assert spy was called
    cy.get('@onChangeSpy').should('have.been.called')
})


function mount(InputField: JSX.Element) {
    cy.viewport('iphone-x');
    cy.mount(<div style={{padding: 100,}}>{InputField}</div>)
}