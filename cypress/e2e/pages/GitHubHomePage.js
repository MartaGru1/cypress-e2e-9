/// <reference types="cypress" />

class GitHubHomePage{

    getLogo(){
        return cy.get('.octicon-mark-github');
    }

    getHeaders(){
        return cy.get('.HeaderMenu-item>button, .HeaderMenu-item>a');
    }

    getSearchInput() {
        return cy.get('header-search-button > .flex-1');
    }

    getSignIn() {
        return cy.get('.HeaderMenu-link--sign-in')
    }

    getSignUp() {
        return cy.get('.HeaderMenu-link--sign-up')
    }

    clickSignIn() {
        this.getSignIn().click()
    }

}


export default class GitHubHomePage {
    getLogo() {
        return cy.get('a.mr-lg-3')
    }
    
    getHeaderMenuItems() {
        return cy.get('.HeaderMenu-item>button, .HeaderMenu-item>a')
    }

    getHeaderSearchButton() {
        return cy.get('.header-search-button')
    }

    getHeaderSigninButton() {
        return cy.get('.HeaderMenu-link--sign-in')
    }

    getHeaderSignupButton() {
        return cy.get('.HeaderMenu-link--sign-up')
    }
}

export default GitHubHomePage;