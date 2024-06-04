class WikiPage {
  //locators
getLogo() {
  return cy.get('.central-textlogo__image')
}

getSlogan() {
  return cy.get('.localized-slogan')
}

getLanguages() {
  return cy.get('.central-featured-lang')
}

getEnglish() {
  return this.getLanguages().children().children().first()
}

getSearchBar() {
  return cy.get('#searchInput')
}

getMainHeading() {
  return cy.get('.mw-page-title-main')
}

getLanguageList() {
  return cy.get('#js-lang-list-button')
}

getLanguageGroups() {
  return cy.get('.hlist')
}
// actions

typeInSearchBar(input) {
  return this.getSearchBar().type(input)
}

clickLanguageList() {
  return this.getLanguageList().click()
}
}


// ES6
export default WikiPage;