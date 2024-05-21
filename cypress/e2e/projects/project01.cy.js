/// <reference types="cypress"/>

describe('Project01 - locating web elements, filling out forms with their input elements, and validating a form submission', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1');
    });

    it('Test Case 01 - Validate the Contact Us information',() => {
        // Validate the heading is “Contact Us”
        // Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
        // Validate the email is “info@techglobalschool.com"
        // Validate the phone number is “(224) 580-2150”

            cy.get('.is-size-3').as('header').should('have.text', 'Contact Us');

            const expectedTexts = ['2800 S River Rd Suite 310, Des Plaines, IL 60018', 'info@techglobalschool.com', '(224) 580-2150'];
            cy.get('@header').nextAll().each((ele) => {
                cy.wrap(ele).should('have.text', expectedTexts.shift());
            });
           // cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
           // cy.get('#email').should('have.text', 'info@techglobalschool.com');
           // cy.get('#phone-number').should('have.text', '(224) 580-2150');
    });

    it('Test Case 02 - Validate the Full name input box',() => {
    // Validate that the Full name input box is displayed
    // Validate that the Full name input box is required
   // Validate that the label of the Full name input box is “Full name *”
   // Validate that the placeholder of the Full name input box is “Enter your full name”


            cy.get('[for="name"]').parent().find('input').should('be.visible')
            .and('have.attr', 'placeholder', 'Enter your full name')
            .and('have.attr', 'required');
            
            cy.get('[for="name"]').should('have.text', 'Full name *');

          //  cy.get('input[type="text"]').should('be.visible');
          //  cy.get('input[type="text"]').should('have.attr', 'required');
          //  cy.get('label[for="name"]').should('have.text', 'Full name *');
          //  cy.get('input[type="text"]').should('have.attr', 'placeholder', 'Enter your full name');
        });
        

        it('Test Case 03 - Validate Gender options', () => {
            //Validate the label is “Gender *”
            //Validate that the Gender is required
            //Validate the options are “Female”, “Male” and “Prefer not to disclose”
            //Validate the options are clickable and not selected
            //Click on the “Male” option and validate it is selected while the others are not selected
            //Click on the “Female” option and validate it is selected while the others are not selected

          //  cy.contains('label', 'Gender *').should('be.visible');
            
          //  cy.get('input[type="radio"]').should('have.attr', 'required');
            
          //  cy.get('input[type="radio"]').should('have.length', 3);
          //  cy.contains('label.radio', 'Male').should('be.visible');
          //  cy.contains('label.radio', 'Female').should('be.visible');
          //  cy.contains('label.radio', 'Prefer not to disclose').should('be.visible');
            
          //  cy.get('input[type="radio"]').should('not.be.checked');
            
          //  cy.contains('label.radio', 'Male').click();
          //  cy.contains('label.radio', 'Male').find('input[type="radio"]').should('be.checked');
          //  cy.contains('label.radio', 'Female').find('input[type="radio"]').should('not.be.checked');
          //  cy.contains('label.radio', 'Prefer not to disclose').find('input[type="radio"]').should('not.be.checked');
            
          //  cy.contains('label.radio', 'Female').click();
          //  cy.contains('label.radio', 'Female').find('input[type="radio"]').should('be.checked');
          //  cy.contains('label.radio', 'Male').find('input[type="radio"]').should('not.be.checked');
          //  cy.contains('label.radio', 'Prefer not to disclose').find('input[type="radio"]').should('not.be.checked');

          cy.contains('Gender *').should('have.text', 'Gender *');

          const expectedText = ['Male', 'Female', 'Prefer not to disclose'];

          cy.get('.radio > input').first().should('have.attr', 'required');

          cy.get('.radio').each(($ele, index) => {
                cy.wrap($ele).parent().should('have.text', expectedText[index]);
                cy.wrap($ele).should('not.be.checked').and('be.enabled').and('have.attr', 'required');
            });

            // cy.contains('Male').find().check().should('be.checked');
            // cy.contains('Femail').find('input').should('not.be.checked');
            // cy.contains('Prefer not to disclose').find('input').should('not.be.checked');

            const checkOptionAndValdateOthers = (optionToCheck, expectedTexts) => {
                
                cy.contains(optionToCheck).find('input').check().should('be.checked');
                expectedTestxs.filter(option => option !== optionToCheck).forEach(uncheckOption => {
                    cy.contains(uncheckOption).find('input').should('not.be.checked');
                });
            }

            cy.checkOptionAndValdateOthers('Male', expectedText)
            cy.checkOptionAndValdateOthers('Female', expectedText)

        });

        /*it('Test Case 04 - Validate the Address input box', () => {
        //Validate that the Address input box is displayed
        //Validate that the Address input box is not required
        //Validate that the label of the Address input box is “Address”
        //Validate that the placeholder of the Address input box is “Enter your address*

            cy.get('input[placeholder="Enter your address"]').should('be.visible')
            cy.get('input[placeholder="Enter your address"]').should('not.have.attr', 'required')
            cy.get('.field').contains('Address').should('exist')
            cy.get('input[placeholder="Enter your address"]').should('exist')
            
        });      
            

        it('Test Case 05 - Validate the Email input box', () => {
            //Validate that the Email input box is displayed
            //Validate that the Email input box is required
            //Validate that the label of the Email input box is “Email *”
            //Validate that the placeholder of the Email input box is “Enter your email”

              cy.get('input[placeholder="Enter your email"]').should('be.visible')
              cy.get('input[placeholder="Enter your email"]').should('have.attr', 'required')
              cy.get('.field').contains('Email *').should('exist')
              cy.get('input[placeholder="Enter your email"]').should('exist')
        });
              

        it('Test Case 06 - Validate the Phone input box', () => {
            //Validate that the Phone input box is displayed
            //Validate that the Phone input box is not required
            //Validate that the label of the Phone input box is “Phone”
            //Validate that the placeholder of the Phone input box is “Enter your phone number”
                cy.get('input[placeholder="Enter your phone number"]').should('be.visible')
                cy.get('input[placeholder="Enter your phone number"]').should('not.have.attr', 'required')
                cy.get('.field').contains('Phone').should('exist')
                cy.get('input[placeholder="Enter your phone number"]').should('exist')
        });  

        it('Test Case 07 - Validate the Message text area', () => {
            //Validate that the Message text area is displayed
            //Validate that the Message text area is required
            //Validate that the label of the Message text area is “Message *”
            //Validate that the placeholder of the Message text area is “Enter your message”
                cy.get('.field').find('textarea').should('be.visible');
                cy.get('.field').find('textarea').should('not.have.attr', 'required');
                cy.contains('.field label', 'Message').should('be.visible');
                cy.get('.field').find('textarea').should('have.attr', 'placeholder', 'Type your message here...');      
        });
        */

        const testCases = [
            {
                description: 'Address input box',
                label: 'Address',
                placeholder: 'Enter your address',
                required: false
            },
            {
                description: 'Email input box',
                label: 'Email *',
                placeholder: 'Enter your email',
                required: true
            },
            {
                description: 'Phone input box',
                label: 'Phone',
                placeholder: 'Enter your phone number',
                required: false
            },
            {
                description: 'Message text area',
                label: 'Message *',
                placeholder: 'Type your message here...',
                required: true
            },
        ];

        testCases.forEach((test, index) => {
            it(`Test Case 0 ${index +4} - Validate the ${test.description}`, () => {

                cy.contains('label', test.label).should('have.text', test.label);

                cy.contains('label', test.label).parent().find('input', 'textarea')
                .should('have.attr', 'placeholder', test.placeholder)
                .and('be.visible')
                .and(test.required ? 'have.attr' : 'not.have.attr', 'required');

            });


        it('Test Case 08 - Validate the Consent checkbox', () => {
            //Validate that the Message text area is displayed
            //Validate that the Message text area is not required
            //Validate that the label of the Message text area is “Message”
            //Validate that the placeholder of the Message text area is “Type your message here…”

              //  cy.contains('I give my consent to be contacted.').should('exist')
              //  cy.get('input[type="checkbox"]').should('have.attr', 'required')
              //  cy.get('input[type="checkbox"]').should('be.enabled')
              //  cy.get('input[type="checkbox"]').check().should('be.checked')
              //  cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
              
              cy.get('.checkbox').should('have.text', 'I give my consent to be contacted.');

              cy.get('.checkbox > input').should('have.attr', 'required').and('be.enabled')
              .click().should('be.checked')
              .click().should('not.be.enabled');
        });

        it('Test Case 09 - Validate the SUBMIT button', () => {
        //Validate the “SUBMIT” button is displayed
        //Validate the “SUBMIT” button is clickable
        //Validate that the button text is “SUBMIT”

        cy.get('button[type="submit"]').should('be.visible');
        cy.get('button[type="submit"]').should('not.be.disabled');
        cy.get('button[type="submit"]').should('have.text', 'SUBMIT');
        });

        it('Test Case 10 - Validate the form submission', () => {
            //Enter a first name
            //Select a gender
            //Enter an address
            //Enter an email
            //Enter a phone number
            //Enter a message
            //Select the “I give my consent to be contacted.” checkbox
            //Click on the “SUBMIT” button
            //Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button
    
            //cy.get(':nth-child(1) > .control > .input').type('Marta Grushkovsky')
                  cy.get('input[placeholder="Enter your full name"]').type('Marta Grushkovsky')
                  cy.contains('Female').click()
                  cy.get('input[placeholder="Enter your address"]').type('1234 Chicago St')
                  cy.get('input[placeholder="Enter your email"]').type('marta@gmail.com')
                  cy.get('input[placeholder="Enter your phone number"]').type('123-456-7890')
                  cy.get('textarea[placeholder="Type your message here..."]').type('This is a test')
                  cy.contains('I give my consent to be contacted.').click()
                  cy.get('button[type="submit"]').click()
                  cy.contains('Thanks for submitting!').should('be.visible')
              });

            Cypress.on("uncaught:exception", () => {
                    return false;
            });     
             
});
