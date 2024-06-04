/// <reference types="cypress" />

import GitHubHomePage from '../../pages/GitHubHomePage'
import GitHubLoginPage from '../../pages/GitHubLoginPage'  

const gitHubHomePage = new GitHubHomePage();
const gitHubLoginPage = new GitHubLoginPage();


describe('GitHub Home Page', () => {

    beforeEach(() => {
        cy.visit('https://github.com/')
    });


it('TASK-1: Validate the GitHub Home Page Logo and Header Menu Items', () => {
        /* 
    TASK-1: Validate the GitHub Home Page Logo and Header Menu Items
1.Go to https://github.com/ 
2.Validate that the logo is displayed
3.Validate that the header menu items are displayed with their expected texts
Product
Solutions
Open Source
Pricing */

const menuItems = ['Product', 'Solutions', 'Open Source', 'Pricing'];

gitHubHomePage.getLogo().should('be.visible');
gitHubHomePage.getHeaders()
    .each(($el, index) => {
        cy.wrap($el).should('contain', menuItems[index]);
    });

});

/*
TASK-2: Validate the GitHub Home Page Search and Signing Header Items
1.Go to https://github.com/
2.Validate that the search input is displayed with the placeholder "Search or jump to…"
3.Validate that the sign in button is displayed with the text "Sign in"
4.Validate that the sign up button is displayed with the text "Sign up" */
it('TASK-2: Validate the GitHub Home Page Search and Signing Header Items', () => {
    gitHubHomePage.getSearchInput().should('have.text', 'Search or jump to...')
    gitHubHomePage.getSignIn().should('be.visible').and('contain', 'Sign in')
    gitHubHomePage.getSignIn().should('be.visible').and('contain', 'Sign up')

});

/*
TASK-3: Validate the GitHub Login Page Sign in Form
1.Go to https://github.com/
2.Click on "Sign in" button
3.Validate that the header logo is displayed
4.Validate that the form header is displayed with the text "Sign in to GitHub"
5.Validate that the username or email address label is displayed with the text "Username or email address"
6.Validate that the username or email address input is displayed and enabled
7.Validate that the password label is displayed with the text "Password"
8.Validate that the password input is displayed and enabled
9.Validate that the forgot password link is displayed with the text "Forgot password?"
10.Validate that the sign in with a passkey button is displayed with the text "Sign in with a passkey"
11.Validate that the create an account link is displayed with the text "Create an account"
12.Validate that the sign in button is displayed with the text "Sign in"
*/
it('TASK-3: Validate the GitHub Login Page Sign in Form', () => {
    gitHubHomePage.clickSignIn()
    gitHubLoginPage.getHeader().should('be.visible').and('have.text', 'Sign in to GitHub')
    gitHubLoginPage.getUserNameLabel().should('be.visible').and('have.text', 'Username or email address')
    gitHubLoginPage.getInputUserName().should('be.visible').and('be.enabled')
    gitHubLoginPage.getPasswordLabel().should('be.visible').and('contain', 'Password')
    gitHubLoginPage.getInputPassword().should('be.visible').and('be.enabled')
    gitHubLoginPage.getForgotPassword().should('be.visible').and('contain', 'Forgot password?')
    gitHubLoginPage.getPasskey().should('be.visible').and('contain', 'Sign in with a passkey')
    gitHubLoginPage.getCreateAccount().should('be.visible').and('contain', 'Create an account')
    gitHubLoginPage.getSignInButton().should('be.visible').and('contain', 'Sign in')

});

/*
TASK-4: Validate the GitHub Login Page Footer Links 
1.Go to https://github.com/
2.Click on "Sign in" button
3.Validate that there are 6 links are displayed in the footer
4.Validate that the footer links are displayed with their expected texts
Terms
Privacy
Docs
Contact GitHub Support
Manage cookies
Do not share my personal information
*/

it('TASK-4: Validate the GitHub Login Page Footer Links', () => {

    const footers = [
        'Terms',
        'Privacy',
        'Docs',
        'Contact GitHub Support',
        'Manage cookies',
        'Do not share my personal information'
      ];

    gitHubHomePage.clickSignIn()
    gitHubLoginPage.getFooters().forEach((text, index) => {
      cy.wrap($el).should('contain', footers[index]);
    });
});

/*
TASK-5: Validate the GitHub Login Page Invalid Login Attempt 
1.Go to https://github.com/
2.Click on "Sign in" button
3.Enter "johndoe" to the username or email address input
4.Enter "test1234" to the password input
5.Click on "Sign in" button
6.Validate that the error message is displayed with the text "Incorrect username or password."

Make sure you utilize the Page Object Model and create 2 of them for 2 separate pages: 
1.GitHubHomePage
2.GitHubLoginPage
*/
it('TASK-5: Validate the GitHub Login Page Invalid Login Attempt ', () => {
    gitHubHomePage.clickSignIn()


});


});


///<reference types="cypress"/>

import GithubHomePage from "../../pages/GithubHomePage"
import GithubLoginPage from "../../pages/GithubLoginPage"

describe('Cypress Class_Practice04', () => {
    const githubHomePage = new GithubHomePage()
    const githubLoginPage = new GithubLoginPage()

    beforeEach(() => {
        cy.visit('https://github.com/')
    })

    it('TASK-1: Validate the GitHub Home Page Logo and Header Menu Items', () => {
        const arr = ['Product', 'Solutions', 'Open Source', 'Pricing']

        githubHomePage.getLogo().should('be.visible')
        githubHomePage.getHeaderMenuItems().each(($el, index) => {
            cy.wrap($el).should('be.visible')
            .and('include.text', arr[index])
        })
    })

    it('TASK-2: Validate the GitHub Home Page Search and Signing Header Items', () => {
       githubHomePage.getHeaderSearchButton().should('be.visible')
       .and('have.attr', 'placeholder', 'Search or jump to...')

       githubHomePage.getHeaderSigninButton().should('be.visible')
       .and('include.text', 'Sign in')

       githubHomePage.getHeaderSignupButton().should('be.visible')
       .and('include.text', 'Sign up')
    })

    it('TASK-3: Validate the GitHub Login Page Sign in Form', () => {
        githubHomePage.getHeaderSigninButton().click()

        githubLoginPage.getHeaderLogo().should('be.visible')
        githubLoginPage.getFormHeader().should('be.visible')
        .and('have.text', 'Sign in to GitHub')

        githubLoginPage.getUsernameOrEmailLabel().should('be.visible')
        .and('include.text', 'Username or email address')
        githubLoginPage.getUsernameOrEmailInput().should('be.visible')
        .and('be.enabled')

        githubLoginPage.getPasswordLabel().should('be.visible')
        .and('include.text', 'Password')
        githubLoginPage.getPasswordInput().should('be.visible')
        .and('be.enabled')

        githubLoginPage.getForgotPasswordLink().should('be.visible')
        .and('have.text', 'Forgot password?')

        githubLoginPage.getSigninWithPassKeyButton().should('be.visible')
        .and('include.text', 'Sign in with a passkey')

        githubLoginPage.getCreateAnAccoountLink().should('be.visible')
        .and('have.text', 'Create an account')

        githubLoginPage.getSigninButton().should('be.visible')
        .and('have.attr', 'data-signin-label', 'Sign in')
    })

    it('TASK-4: ', () => {
        const arr = ['Terms', 'Privacy', 'Docs', 'Contact GitHub Support', 'Manage cookies', 'Do not share my personal information']
        githubHomePage.getHeaderSigninButton().click()

        githubLoginPage.getFooterLinks().should('have.length', arr.length)

        githubLoginPage.getFooterLinks().each(($el, index) => {
            cy.wrap($el).should('include.text', arr[index])
        })
    })

    it('TASK-5: Validate the GitHub Login Page Invalid Login Attempt ', () => {
        githubHomePage.getHeaderSigninButton().click()

        githubLoginPage.signin('johndoe', 'test1234')
        githubLoginPage.getErrorMessage().should('be.visible')
        .and('include.text', 'Incorrect username or password.')
    })
})