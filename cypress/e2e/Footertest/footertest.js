import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

 /// <references types="Cypress" />

let baseurl = 'https://www.saucedemo.com/v1/'

beforeEach(() => {
    cy.visit(baseurl);
})

 When("I enter username and password", ()=>{
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
})
And('I click on login button', ()=> {
    cy.get('#login-button').click()
})
Then("User will be login successful", ()=>{
cy.get('.product_label').should('be.visible')

})

And ("User verify footer",()=> {
cy.get('.footer_copy').should('exist',"All Rights Reserved. Terms of Service")
})