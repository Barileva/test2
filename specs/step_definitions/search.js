import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When('I search for {string}', (searchTerm) => {
  cy.get('#input-54').type(searchTerm + '{enter}')
});

Then('i should see {string} in the search results', (searchTerm) => {
  cy.get('.font-weight-regular > :nth-child(2)').should('contain', searchTerm, { mathCase: false })

  cy.get('.font-weight-regular > :nth-child(1)').invoke('text').then((text) => {

  });

  cy.get('.v-list-item__content').each(($el) => {
    cy.wrap($el).should('contain.text', searchTerm, { mathCase: false })
  });

});