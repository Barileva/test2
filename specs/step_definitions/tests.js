import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the {string} page', (a) => {
  cy.visit(a);
});

When('I accept cookies', () => {
  cy.get('#updateButton').click()
});


When('I click on {string}', (pathName) => {
  cy.get('[href="/' + pathName + '"]').click()
});

Then('I should see {string} as the title', (title) => {
  cy.get('#main-content h1').should('have.text', title)
});