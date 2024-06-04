/// <reference types="cypress" />

class GitHubLoginPage {
    // locators
    getHeader() {
        return cy.get('h1')
    }

    getUserNameLabel() {
        return cy.get('[for="login_field"]')
    }

    getUserName(){
        return cy.get('#login_field')
    }

    getPasswordLabel(){
        return cy.get('[for="password_field"]')
    }

    getInputPassword(){
        return cy.get('#password')
    }

    getForgotPassword(){
        return cy.get('#forgot_password')
    }

    getPasskey(){
        return cy.get('.Button--link > .Button-content >.Buton-label')
    }

    getCreateAccout(){
        return cy.get('.mt-1 > a')
    }

    getSignInButton(){
        return cy.get('.position-relative > .btn')
    }
    
    getFooters(){
        return cy.get('.footer > us > li')
    }

    getSignInButton(){
        return cy.get('.position-relative > .btn')
    }

    clickSignInButton(){
        this.getSignInButton().click()
    }

    // actions


}

export default class GithubLoginPage {
    getHeaderLogo() {
        return cy.get('.header-logo')
    }

    getFormHeader() {
        return cy.get('h1')
    }

    getUsernameOrEmailLabel() {
        return cy.get('label[for="login_field"]')
    }

    getUsernameOrEmailInput() {
        return cy.get('#login_field')
    }

    getPasswordLabel() {
        return cy.get('label[for="password"]')
    }

    getPasswordInput() {
        return cy.get('#password')
    }

    getForgotPasswordLink() {
        return cy.get('#forgot-password')
    }

    getSignInButton() {
        return cy.get('.js-sign-in-button')
    }

    getSigninWithPassKeyButton() {
        return cy.get('.login-callout button')
    }

    getCreateAnAccoountLink() {
        return cy.get('.login-callout a')
    }

    getFooterLinks() {
        return cy.get('.Link--secondary')
    }

    getErrorMessage() {
        return cy.get('.js-flash-alert')
    }

    signin(usernameOrEmail, password) {
        this.getUsernameOrEmailInput().type(usernameOrEmail)
        this.getPasswordInput().type(password)
        this.getSignInButton().click()
    }
}

// ES6
export default GitHubLoginPage;

