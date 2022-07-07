import Button from "../Button";
import React from "react";

describe('Button', () => {
    it('Render app', () => {
        cy.mount(<Button/>)

    });

    it('uses custom text for button label', () => {
        cy.mount(<Button>Click Me!</Button>)
        cy.get('.btn').should('contain.text', 'Click Me!')
    })

    it('when button is clicked, onclick should be called', () => {

        const onClickSpy = cy.spy().as('onClickSpy')
        cy.mount(<Button onClick={onClickSpy}>Click Me</Button>)

        cy.get('.btn').click();
        cy.get('@onClickSpy').should('have.been.called')
    })
})
