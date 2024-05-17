import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

 /// <references types="Cypress" />

And ("User select a product", ()=> {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
})

Then ("User click the cart button icon", ()=> {
    cy.get('.fa-layers-counter').click()
})

And ("User proceed to check out button", ()=> {
    cy.get('.btn_action').click()
})

Then ("User provide User info", ()=> {
    cy.get('[data-test="firstName"]').type("Wickz")
    cy.get('[data-test="lastName"]').type("Abraham")
    cy.get('[data-test="postalCode"]').type(24234)
})

And ("User Click on Continue button", ()=> {
    cy.get('.btn_primary').click()
})

And ("User clicks on Finish button", ()=> {
    cy.get('.btn_action').click()
})

And ("User verifies the success alertt", ()=> {
cy.get('.complete-header').should('have.text',"THANK YOU FOR YOUR ORDER")
    
})
