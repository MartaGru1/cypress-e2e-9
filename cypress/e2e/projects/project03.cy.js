/// <reference types="cypress" />

describe ('Project 03', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-3');
    });

    it('Test Case 01 - Validate the default Book your trip form', () => {
        /**
        * Validate that the “One way” radio button is displayed enabled and selected by default
        * Validate that the “Round trip” radio button is displayed enabled and not selected by default
        * Validate that the “Cabin Class” label and dropdown are displayed
        * Validate that the “From” label and dropdown are displayed
        * Validate that the “To” label and dropdown are displayed
        * Validate that the “Depart” label and date picker is displayed
        * Validate that the “Return” label and date picker is displayed and disabled
        * Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
        * Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
        * Validate that the “BOOK” button is displayed and enabled
         */
              cy.get('input[type="radio"][value="One way"]')
                .should('be.visible')
                .and('be.enabled')
                .and('be.checked');
          
              cy.get('input[type="radio"][value="Round trip"]')
                .should('be.visible')
                .and('be.enabled')
                .and('not.be.checked');
          
              cy.contains('label', 'Cabin Class').should('be.visible');
              cy.get('label:contains("Cabin Class") + .select select').should('be.visible');
          
              cy.contains('label', 'From').should('be.visible');
              cy.get('label:contains("From") + .select select').should('be.visible');

              cy.contains('label', 'To').should('be.visible');
              cy.get('label:contains("To") + .select select').should('be.visible');

              cy.contains('label', 'Depart').should('be.visible');
              cy.get('label:contains("Depart") + .control .react-datepicker__input-container input').should('be.visible');

              cy.contains('label', 'Return').should('be.visible');
              cy.get('label:contains("Return") + .control .react-datepicker__input-container input')
                .should('be.visible')
                .and('be.disabled');

              cy.contains('label', 'Number of passengers').should('be.visible');
              cy.get('label:contains("Number of passengers") + .select select')
                .should('be.visible')
                .find('option:selected')
                .should('have.value', '1');
 
              cy.contains('label', 'Passenger 1').should('be.visible');
              cy.get('label:contains("Passenger 1") + .select select')
                .should('be.visible')
                .find('option:selected')
                .should('contain.text', 'Adult (16-64)');
 
              cy.contains('button', 'BOOK')
                .should('be.visible')
                .and('be.enabled');
            });

        it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {
            /**
            * Click on the “Round trip” radio button and validate it is selected
            * Validate that the “One way” radio button is not selected
            * Validate that the “Cabin Class” label and dropdown are displayed
            * Validate that the “From” label and dropdown are displayed
            * Validate that the “To” label and dropdown are displayed
            * Validate that the “Depart” label and date picker is displayed
            * Validate that the “Return” label and date picker is displayed
            * Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
            * Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
            * Validate that the “BOOK” button is displayed and enabled
             */
                cy.get('input[type="radio"][value="Round trip"]').click().should('be.checked');
                cy.get('input[type="radio"][value="One way"]').should('not.be.checked');

                cy.contains('label', 'Cabin Class').should('be.visible');
                cy.get('label:contains("Cabin Class") + .select select').should('be.visible');

                cy.contains('label', 'From').should('be.visible');
                cy.get('label:contains("From") + .select select').should('be.visible');

                cy.contains('label', 'To').should('be.visible');
                cy.get('label:contains("To") + .select select').should('be.visible');

                cy.contains('label', 'Depart').should('be.visible');
                cy.get('label:contains("Depart") + .control .react-datepicker__input-container input').should('be.visible');

                cy.contains('label', 'Return').should('be.visible');
                cy.get('label:contains("Return") + .control .react-datepicker__input-container input').should('be.visible');
          
                cy.contains('label', 'Number of passengers').should('be.visible');
                cy.get('label:contains("Number of passengers") + .select select')
                    .should('be.visible')
                    .find('option:selected')
                    .should('have.value', '1');
         
                cy.contains('label', 'Passenger 1').should('be.visible');
                cy.get('label:contains("Passenger 1") + .select select')
                    .should('be.visible')
                    .find('option:selected')
                    .should('contain.text', 'Adult (16-64)');
         
                cy.contains('button', 'BOOK')
                    .should('be.visible')
                    .and('be.enabled');
            });


        it('Test Case 03 - Validate the booking for 1 passenger ond one way', () => {
            /**
            * Select the “One way” radio button
            * Select “Business” for the “Cabin Class” dropdown
            * Select “Illinois” for the “From” dropdown
            * Select “Florida” for the “To” dropdown
            * Select the next week for the ”Depart”
            * Select “1” for the “Number of passengers” dropdown
            * Select “Senior (65+)” for the Passenger 1 dropdown
            * Click on the “BOOK” button
            * Validate the booking information displayed below
            * DEPART
            * IL to FL
            * {dynamic date}
            * Number of passengers: 1
            * Passenger 1: Senior (65+)
            * Cabin Class: Business
             */
                cy.get('input[type="radio"][value="One way"]').click().should('be.checked');
              
                cy.contains('label', 'Cabin Class').next().find('select').select('Business');
              
                cy.contains('label', 'From').next().find('select').select('IL');

                cy.contains('label', 'To').next().find('select').select('FL');

                const nextWeek = new Date();
                nextWeek.setDate(nextWeek.getDate() + 7);
                const formattedNextWeek = nextWeek.toISOString().slice(0, 10);

                cy.contains('label', 'Depart').next().find('input').then(($input) => {
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
                nativeInputValueSetter.call($input[0], formattedNextWeek);
                $input[0].dispatchEvent(new Event('input', { bubbles: true }));
                });

                cy.contains('label', 'Number of passengers').next().find('select').select('1');
              
                cy.contains('label', 'Passenger 1').next().find('select').select('Senior (65+)');

                cy.contains('button', 'BOOK').click();

                cy.contains('h1', 'DEPART').should('be.visible');
                cy.contains('h3', 'IL to FL').should('be.visible');
                cy.contains('p', 'Number of Passengers: 1').should('be.visible');
                cy.contains('p', 'Passenger 1: Senior (65+)').should('be.visible');
                cy.contains('p', 'Cabin class: Business').should('be.visible');

        });

        it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {
            /**
            * Select the “Round trip” radio button
            * Select “First” for the “Cabin Class” dropdown
            * Select “California” for the “From” dropdown
            * Select “Illinois” for the “To” dropdown
            * Select the next week for the ”Depart”
            * Select the next month for the “Return”
            * Select “1” for the “Number of passengers” dropdown
            * Select “Adult (16-64)” for the Passenger 1 dropdown
            * Click on the “BOOK” button
            * Validate the booking information displayed below
            * DEPART
            * CA to IL
            * {dynamic date}
            * Number of passengers: 1
            * Passenger 1: Adult (16-64)
            * Cabin Class: First
   
            * RETURN
            * IL to CA
            * {dynamic date}
             */

            cy.get('input[type="radio"][value="Round trip"]').click().should('be.checked');
              
            cy.contains('label', 'Cabin Class').next().find('select').select('First');
              
            cy.contains('label', 'From').next().find('select').select('CA');

            cy.contains('label', 'To').next().find('select').select('IL');

            const nextWeek = new Date();
            nextWeek.setDate(nextWeek.getDate() + 7);
            const departDate = `${nextWeek.getMonth() + 1}/${nextWeek.getDate()}/${nextWeek.getFullYear()}`;
              
            const nextMonth = new Date();
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            const returnDate = `${nextMonth.getMonth() + 1}/${nextWeek.getDate()}/${nextMonth.getFullYear()}`;
              
            cy.contains('label', 'Depart').next().find('input').then(($input) => {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
            nativeInputValueSetter.call($input[0], departDate);
            $input[0].dispatchEvent(new Event('input', { bubbles: true }));
            });

            cy.contains('label', 'Return').next().find('input').then(($input) => {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
            nativeInputValueSetter.call($input[0], returnDate);
            $input[0].dispatchEvent(new Event('input', { bubbles: true }));
            });

            cy.contains('label', 'Number of passengers').next().find('select').select('1');

            cy.contains('label', 'Passenger 1').next().find('select').select('Adult (16-64)');

            cy.contains('button', 'BOOK').click();

            cy.contains('h1', 'DEPART').should('be.visible');
            cy.contains('h3', 'CA to IL').should('be.visible');
            cy.contains('p', 'Number of Passengers: 1').should('be.visible');
            cy.contains('p', 'Passenger 1: Adult (16-64)').should('be.visible');
            cy.contains('p', 'Cabin class: First').should('be.visible');

            cy.contains('h1', 'RETURN').should('be.visible');
            cy.contains('h3', 'IL to CA').should('be.visible');
        });

        it('Test Case 05 - Validate the booking fir 2 passengers and one way', () => {
            /**
            * Select the “One way” radio button
            * Select “Premium Economy” for the “Cabin Class” dropdown
            * Select “New York” for the “From” dropdown
            * Select “Texas” for the “To” dropdown
            * Select the next day for the ”Depart”
            * Select “2” for the “Number of passengers” dropdown
            * Select “Adult (16-64)” for the Passenger 1 dropdown
            * Select “Child (2-11)” for the Passenger 2 dropdown
            * Click on the “BOOK” button
            * Validate the booking information displayed below
            * DEPART
            * NY to TX
            * {dynamic date}
            * Number of passengers: 2
            * Passenger 1: Adult (16-64)
            * Passenger 2: Child (2-11)
            * Cabin Class: Premium Economy
             */
                  cy.get('input[type="radio"][value="One way"]').click().should('be.checked');
                  cy.contains('label', 'Cabin Class').next().find('select').select('Premium Economy');
                  cy.contains('label', 'From').next().find('select').select('NY');
              
                  cy.contains('label', 'To').next().find('select').select('TX');
              
                  const nextDay = new Date();
                  nextDay.setDate(nextDay.getDate() + 1);
                  const departDate = `${nextDay.getMonth() + 1}/${nextDay.getDate()}/${nextDay.getFullYear()}`;
              
                  cy.contains('label', 'Depart').next().find('input').then(($input) => {
                    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
                    nativeInputValueSetter.call($input[0], departDate);
                    $input[0].dispatchEvent(new Event('input', { bubbles: true }));
                  });
              
                  cy.contains('label', 'Number of passengers').next().find('select').select('2');
              
                  cy.contains('label', 'Passenger 1').next().find('select').select('Adult (16-64)');
              
                  cy.contains('label', 'Passenger 2').next().find('select').select('Child (2-11)');
              
                  cy.contains('button', 'BOOK').click();
              
                  cy.contains('h1', 'DEPART').should('be.visible');
                  cy.contains('h3', 'NY to TX').should('be.visible');
                  cy.contains('p', 'Number of Passengers: 2').should('be.visible');
                  cy.contains('p', 'Passenger 1: Adult (16-64)').should('be.visible');
                  cy.contains('p', 'Passenger 2: Child (2-11)').should('be.visible');
                  cy.contains('p', 'Cabin class: Premium Economy').should('be.visible');  

        });

});


          



