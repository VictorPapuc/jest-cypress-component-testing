import React from "react";
import App from "../../App";
import '../../App.css';

it('Render app', () => {
    cy.mount(<App/>)
    // eslint-disable-next-line no-undef
    cy.get('#email').type('victorpapuc@gmail.com')
    // eslint-disable-next-line no-undef
    cy.get('#email').should('have.value', 'victorpapuc@gmail.com')
});
