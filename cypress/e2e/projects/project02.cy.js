/// <reference types="cypress"/>

describe('Practice 02', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
    });
    //Navigate to https://techglobal-training.com/frontend/project-2
    //Validate that the username input box is displayed
    //Validate that the username input box is not required
    //Validate that the label of the username input box is “Please enter your username”
    //Validate that the password input box is displayed
    //Validate that the password input box is not required
    //Validate that the label of the password input box is “Please enter your password”
    //Validate the “LOGIN” button is displayed
    //Validate the “LOGIN” button is clickable
    //Validate that the button text is “LOGIN”
    //Validate the “Forgot Password?” link is displayed
    //Validate that the “Forgot Password?” link is clickable
    //Validate that the link text is “Forgot Password?”
    it('Test -01 -Validate the login form', () => {
      cy.get('div > input').each($el) => {
        cy.wrap($el).should('be.visible').and('not.have.attr', 'required');
      });

      const expectedLabel = ['Please enter your username', 'Please enter your password'];
      cy.get('div > label').each(($txt, index) => {
        expect($txt).to.equal(expectedLabel[index]);
      });

      cy.get('#login_btn').should('be.visible').and('be.enabled').and('have.text', 'LOGIN');

      cy.contains('#login_btn').next().should('be.visible').and('have.text', 'Forgot Password?');
    });            

    it('Test -02 - ValidatE THE VALID LOGIN', () => {
        //Enter the username as “TechGlobal”
        //Enter the password as “Test1234”
        //Click on the “LOGIN” button
        //Validate the success message is displayed as “You are logged in”
        //Validate the logout button displayed with the text “LOGOUT”

      const credentials = ['TechGlobal', 'Test1234'];
       cy.get('div > input').each(($el, index) => {
          cy.wrap($el).type(credentials[index]);
      });

        cy.get('#login_btn').click();
        cy.get('#success_lgn').should('be.visible').and('contain.text', 'You are logged in');
        cy.get('#logout').should('be.visible');
    });

    it("Test -03 - Validate the logout", () => {
      //Enter the username as “TechGlobal”
      //Enter the password as “Test1234”
      //Click on the “LOGIN” button
      //Click on the “LOGOUT” button
      //Validate that the login form is displayed
      const credentials = ['TechGlobal', 'Test1234'];
      cy.get('div > input').each(($el, index) => {
        cy.wrap($el).type(credentials[index]);
      });

      cy.get('#login_btn').click();
      cy.get('#logout').click();

      cy.get('form').should('be.visible');

    });



    it('Test- 04 - Validate the Forgor Password? Link and Reset Password modal', () => {
      //Click on the “Forgot Password?” link
      //Validate that the modal heading “Reset Password” is displayed
      //Validate that the close button is displayed
      //Validate that the email input box is displayed
      //Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”
      //Validate the “SUBMIT” button is displayed
      //Validate the “SUBMIT” button is clickable
      //Validate that the button text is “SUBMIT”
     cy.get('#login_btn').click();

     cy.get('#modal_title').should('be.visible').and('contain.text', 'Reset Password');
          
     cy.get('[aria-label="close"]').should('be.visible');
          
     cy.get('#email').should('be.visible')
     cy.get('[for="email"]').should('be.visible').and('contain.text', 'Enter your email address and we\'ll send you a link to reset your password. ');

     cy.get('[for="email"]').then(($txt) => {
      expect($txt).to.equal('Enter your email address and we\'ll send you a link to reset your password. ');
    });

    cy.get('#submit').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT');

    });            
          

    it('Test -05 - Validate the Reset Password modal close button', () => {
      //Click on the “Forgot Password?” link
      //Validate that the “Reset Password” modal is displayed
      //Click on the close button
      //Validate that the “Reset Password” modal is closed
      
      cy.get('#login_btn').next().click();
      cy.get('#modal').should('be.visible');
      cy.get('[aria-label="close"]').click();
                    
    });
                  
                 

    it('Test -06 - Validate the Reset Password form submission', () => {
      //Click on the “Forgot Password?” link
      //Enter an email
      //Click on the “SUBMIT” button
      //Validate the form message “A link to reset your password has been sent to your email address.” is displayed under the “SUBMIT” button

      cy.get('#login_btn').next().click();
      cy.get('#email').type('techglobal@tech.com');
      cy.get('#submit').click();

      cy.get('#confirmation_message').should('be.visible').and('have.text', 'A link to reset your password has been sent to your email address.');

    });

                

    /* it( 'Test -07 - Validate the invalid login with the empty credentials', () => {
       //Leave username empty
      //Leave password empty
      //Click on the “LOGIN” button
      //Validate the failure message is displayed as “Invalid Username entered!” above the form

      cy.get('#username').clear();

      cy.get('#password').clear();
      cy.get('#login_btn').click();
      cy.get('#error_message').should('be.visible').and('contain.text', 'Invalid Username entered!');
    });


    //Enter the username as “John”
    //Enter the password as “Test1234”
    //Click on the “LOGIN” button
    //Validate the failure message is displayed as “Invalid Username entered!” above the form


    it('Test -08 - Validate the invalid login with the wrong username', () => {

    cy.get('#username').clear().type('John');
    cy.get('#password').clear().type('Test1234');
    cy.get('#login_btn').click();
    cy.get('#error_message').should('be.visible')
      .and('contain.text', 'Invalid Username entered!');
    });
                      


    //Enter the username as “TechGlobal”
    //Enter the password as “1234”
    //Click on the “LOGIN” button
    //Validate the failure message is displayed as “Invalid Password entered!” above the form

    it('Test -09 - Validate the invalid login with the wrong password', () => {
                        
    cy.get('#username').clear().type('TechGlobal');
    cy.get('#password').clear().type('1234');
    cy.get('#login_btn').click();
    cy.get('#error_message').should('be.visible')
    .and('contain.text', 'Invalid Password entered!');

    });



  //Enter the username as “John”
  //Enter the password as “1234”
  //Click on the “LOGIN” button
  //Validate the failure message is displayed as “Invalid Username entered!” above the form

  it('Test -10 - Validate the invalid login with the wrong username and password', () => {
  cy.get('#username').clear().type('John');
  cy.get('#password').clear().type('1234');
  cy.get('#login_btn').click();
  cy.get('#error_message').should('be.visible')
    .and('contain.text', 'Invalid Username entered!');
                      
  }); */


  const testCases = [
    {
      username: '',
      password: '',
      expectedMessage: 'Invalid Username entered!'
    },
    {
      username: 'John',
      password: 'Test1234',
      expectedMessage: 'Invalid Username entered!'
    },
    {
      username: 'TechGlobal',
      password: '1234',
      expectedMessage: 'Invalid Password entered!'
    },
    {
      username: 'John',
      password: '1234',
      expectedMessage: 'Invalid Username entered!'
    }
  ];

  testCases.forEach(({username, password, expectedMessage}, index) => {

  it(`Test Case 0${index +7} - Validate login for username: ${username} and password: ${password}`, () => {

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login_btn').click();
    cy.get('#error_message').should('be.visible').and('have.text', expectedMessage);
      
  });

});
  
  });
      
