/// <reference types="cypress" />

describe('Practice02 - Validate Amazon Home Page', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com/');
  })

  it('TASK-1: Validate the Amazon Header', () => {
    const locators = ['#nav-logo-sprites', '#nav-global-location-popover-link', '.nav-search-scope', '#twotabsearchtextbox', '#nav-search-submit-button', '#icp-nav-flyout', '#nav-link-accountList', '#nav-orders']
  
    for (const locator of locators) {
    cy.get(locator).should('be.visible')
    }

    cy.get('#nav-cart-count').should('have.text', '0')
})

  it('TASK-2: Validate the Amazon Location Update', () => {
    const code = '60018'
    cy.get('#nav-global-location-popover-link').click()
    cy.get('#GLUXZipUpdateInput').type(`${code}{enter}`)
    cy.get('#GLUXZipConfirmationValue').should('have.text', code)
    cy.get('#a-autoid-1-announce').click()
})
  it('TASK-3: Validate the Amazon Search Results', () => {
    const item = 'Mug'
    cy.get('#twotabsearchtextbox').type(`${item}{enter}`)
    cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-section > :nth-child(1)').invoke('text').then((str) => {
      expect(Number(str.slice(str.indexOf('over') + 5, str.indexOf('results') - 1).replace(',', ''))).to.be.greaterThan(0)
    });

})
  it.only('TASK-4: Validate the Google Amazon Footer Columns', () => {
    const columns = ['Get to Know Us', 'Make Money with Us', 'Amazon Payment Products', 'Let Us Help You']
     cy.get('.navFooterColHead').each(($el, index) => {
      cy.wrap($el).should('have.text', columns[index])
     })
})


});