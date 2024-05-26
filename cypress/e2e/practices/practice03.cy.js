/*Cypress Class_Practice03
TASK-1: Validate the Wikipedia Logo and Slogan
1. Go to https://www.wikipedia.org/
2. Validate that the logo is displayed, and its text is "Wikipedia"
3. Validate that the slogan is displayed, and its text is "The Free 
Encyclopedia" */

/* TASK-2: Validate the Wikipedia Top Ten Languages
1. Go to https://www.wikipedia.org/
2. Validate that there are top ten languages are displayed
3. Validate that the top language is "English" */

/*TASK-3: Validate the Wikipedia Search Results
1. Go to https://www.wikipedia.org/
2. Search for "Cypress" in the search bar
3. Validate that "Cypress" is displayed in the title of the new page
4. Validate that "Cypress" is displayed in the url of the new page
5. Validate that "Cypress" is displayed in the main heading of the page */

/*TASK-4: Validate the Wikipedia Article Numbers for All Languages 
1. Go to https://www.wikipedia.org/
2. Click on "Read Wikipedia in your language" button
3. Validate that there are 18 languages have over 1,000,000 articles
4. Validate that there are 53 languages have over 100,000 articles
5. Validate that there are 99 languages have over 10,000 articles
6. Validate that there are 126 languages have over 1,000 articles
7. Validate that there are 29 languages have over 100 articles */

/// <reference types="cypress" />
import WikiPage from '../../pages/WikiPage';


const wikiPage = new WikiPage()

describe('Wikipedia Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.wikipedia.org/')
  });

  it('TASK-1: Validate the Wikipedia Logo and Slogan', () => {
    wikiPage.getLogo().should('be.visible').and('have.text', '\nWikipedia\n')
    wikiPage.getSlogan().should('be.visible').and('have.text', 'The Free Encyclopedia')
  });

  it('TASK-2: Validate the Wikipedia Top Ten Languages', () => {
    wikiPage.getLanguages().should('be.visible')
    wikiPage.getEnglish().should('have.text', 'English')
  });

  it('TASK-3: Validate the Wikipedia Search Results', () => {
    wikiPage.typeInSearchBar('Cypress{enter}')
    cy.title().should('contain', 'Cypress')
    cy.url().should('contain', 'Cypress')
    wikiPage.getMainHeading().should('be.visible').and('have.text', 'Cypress')
  });

  it.only('TASK-4: Validate the Wikipedia Article Numbers for All Languages', () => {
    wikiPage.clickLanguageList()
    const numOfLangs = [18,53, 99, 126, 29]
    for (let i = 0; i <= 4; i++) {
      wikiPage.getLanguageGroups().eq(i).find('a').should('have.length', numOfLangs[i])
    }
  });

});