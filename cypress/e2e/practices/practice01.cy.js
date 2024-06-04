/// <reference types="cypress"/>
/// <reference types="cypress"/>
describe('Practice01 - Validate Google Home Page', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com/');
    });
    it('TASK-1: Validate the Google Home Page Title and URL', () => {
        
        // Validate that the title of the page is "Google"
        // Validate that the URL of the page is https://www.google.com/

        cy.title().should('eq', 'Google');
        cy.url().should('eq', 'https://www.google.com/');
    });

    it('TASK-2:Validate the Google Logo Presence',() => {
        // Validate that the Google Logo is present on the page
        cy.get('img[alt="Google"]').should('be.visible');
    });

    it('TASK-3: Validate the Google Search Results', () => {
        //Search for "Cypress" in the search bar
        // Validate that result statistics show more than zero results
        cy.get('#APjFqb').type('Cypress{enter}')
    });

    it('TASK-4: Validate the Google Search Autocomplete Suggestions',() =>{
        // Search for "Artificial Intelligence" in the search bar
        // Validate that autocomplete suggestions are present – more than zero
        // Click on the first autocomplete suggestion
        // Validate that the URL of the page contains "q=artificial+intelligence" – ignore cases
      
        cy.get('#APjFqb').type('Artificial Intelligence')
        cy.get('#jZ2SBf > .wM6W7d > span').click()
        cy.url().should("include", "q=artificial+intelligence");
    });
 


});