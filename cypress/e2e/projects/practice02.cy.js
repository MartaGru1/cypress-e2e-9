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
                cy.get('form').within(() => {
                  cy.get('input[type="text"]').should('be.visible');
                  cy.get('input[type="text"]').invoke('attr', 'required').should('not.exist');
                  cy.get('input[type="text"]').parents('div').find('label').should('have.text', 'Please enter your username');

                  cy.get('input[type="password"]').should('be.visible');
                  cy.get('input[type="password"]').invoke('attr', 'required').should('not.exist');
                  cy.get('input[type="password"]').parents('div').find('label').should('have.text', 'Please enter your password');
                  cy.get('button[type="submit"]').should('be.visible');

                  cy.get('button[type="submit"]').should('not.be.disabled');
                  cy.get('button[type="submit"]').should('have.text', 'LOGIN');

                  cy.get('a').contains('Forgot Password?').should('be.visible');
                  cy.get('a').contains('Forgot Password?').should('have.attr', 'href').and('include', 'forgot-password');
                  cy.get('a').contains('Forgot Password?').should('have.text', 'Forgot Password?');
              });

            //Enter the username as “TechGlobal”
            //Enter the password as “Test1234”
            //Click on the “LOGIN” button
            //Validate the success message is displayed as “You are logged in”
            //Validate the logout button displayed with the text “LOGOUT”

            it('Test -02 - ValidatE THE VALID LOGIN', () => {
                      cy.get('input[type="text"]').type('TechGlobal');
                      cy.get('input[type="password"]').type('Test1234');
                      cy.get('button[type="submit"]').contains('LOGIN').click();
                      cy.get('h2#success_lgn').should('be.visible').and('have.text', 'You are logged in');
                      cy.get('button#logout').should('be.visible').and('have.text', 'LOGOUT');
            });


        //Enter the username as “TechGlobal”
        //Enter the password as “Test1234”
        //Click on the “LOGIN” button
        //Click on the “LOGOUT” button
        //Validate that the login form is displayed


    it("Test -03 - Validate the logout", () => {
            const username = 'TechGlobal';
            const password = 'Test1234';

              cy.get('#username').clear().type(username);
              cy.get('#password').clear().type(password);
              cy.get('#login_btn').click();

              cy.get('#success_lgn').should('be.visible').and('contain.text', 'You are logged in');
              cy.get('#logout').click();

              cy.get('#username').should('be.visible');
              cy.get('#password').should('be.visible');
              cy.get('#login_btn').should('be.visible');
            
            });
          

          //Click on the “Forgot Password?” link
          //Validate that the modal heading “Reset Password” is displayed
          //Validate that the close button is displayed
          //Validate that the email input box is displayed
          //Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”
          //Validate the “SUBMIT” button is displayed
          //Validate the “SUBMIT” button is clickable
          //Validate that the button text is “SUBMIT”

            it('Test- 04 - Validate the Forgor Password? Link and Reset Password modal', () => {

              cy.contains('Forgot Password?').click();
              cy.get('#modal_title').should('be.visible').and('contain.text', 'Reset Password');
              cy.get('button.delete[aria-label="close"]').should('be.visible');

              cy.get('#email').should('be.visible').and('have.attr', 'type', 'email');
              cy.get('label[for="email"]').should('be.visible').and('contain.text', "Enter your email address and we'll send you a link to reset your password.");

              cy.get('#submit').should('be.visible');
              cy.get('#submit').should('not.be.disabled');
              cy.get('#submit').should('have.text', 'SUBMIT');
            });
          
            //Click on the “Forgot Password?” link
            //Validate that the “Reset Password” modal is displayed
            //Click on the close button
            //Validate that the “Reset Password” modal is closed

            it('Test -05 - Validate the Reset Password modal close button', () => {

                      cy.contains('Forgot Password?').click();

                      cy.get('.modal-card').should('be.visible');
                      cy.get('#modal_title').should('be.visible').and('contain.text', 'Reset Password');

                      cy.get('button.delete[aria-label="close"]').click();
                      cy.get('.modal-card').should('not.exist');
                    
            });
                  
                  //Click on the “Forgot Password?” link
                  //Enter an email
                  //Click on the “SUBMIT” button
                  //Validate the form message “A link to reset your password has been sent to your email address.” is displayed under the “SUBMIT” button

                    it('Test -06 - Validate the Reset Password form submission', () => {
                  
                      cy.contains('Forgot Password?').click();

                      cy.get('#email').clear().type('mgrushkovsky@gmail.com');

                      cy.get('#submit').click();

                      cy.get('#confirmation_message').should('be.visible')
                        .and('contain.text', 'A link to reset your password has been sent to your email address.');
                    });

                 //Leave username empty
                //Leave password empty
                //Click on the “LOGIN” button
                //Validate the failure message is displayed as “Invalid Username entered!” above the form

                it( 'Test -07 - Validate the invalid login with the empty credentials', () => {

                          cy.get('#username').clear();

                          cy.get('#password').clear();
                          cy.get('#login_btn').click();
                          cy.get('#error_message').should('be.visible')
                            .and('contain.text', 'Invalid Username entered!');
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
                      
                });

});