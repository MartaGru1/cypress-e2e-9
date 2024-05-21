GENERAL RECAP

When to use have.text, when to use eq chainers ?

If the previous subject of your assertion is a WEB ELEMENT, it means you MUST use 'have.text'

E.g.

cy.get('#locator').should('have.text', 'expectedText')

cy.get('#locator').then(($el) => {

	cy.wrap($el).should('have.text', 'expectedText')
})

cy.get('#locator')
cy.wrap($el)


cy.get('#locator').then(($el) => {

	cy.wrap($el.text()).should('eq', 'expectedText')
	
})

cy.title().should('eq', 'expectedText')


let schoolName = 'TechGlobal'

cy.wrap(schoolName).should('eq', 'expectedText')




ALERTS:

	How Cypress handles the alerts ?

	Simply, by not handling the alerts. Because for Warning and Confirmation alerts, cypress automatically presses the ok.

	BUT, if you want to get the text of the alert, or if you want to press cancel for the confirmation alert, then we MUST use event listener.

	Scenario: We have CONFIRMATION alert, get the message of it and press on cancel.

	cy.on('alert:confirm', (message) => {
		console.log(message)

		return false;
	})


	Prompt Alert: Cypress does not handle Prompt alerts, because it requires you to input a message, and Cypress doesn't know what to say. That's why, Cypress gives us an option to handle these explicitly by using cy.window() method

	Scenario: You have prompt alert where you want to click OK

	cy.window().then((win) => {
		cy.stub(win, 'prompt').returns('')
	})

	cy.stub()	=> Replace a function, record its usage and control its behavior.

	cy.spy()	=> Observes the behaviour of a function.

	These both methods coming from Sinon.js

	Scenario: You have prompt alert where you want to click cancel, and get the message

	cy.window().then((win) => {
		cy.stub(win, 'prompt').callsFake((str) => {
			cy.log(str)
		})

		return false
	})

	callsFake()	=> Makes the stub call the provided fakeFunction when invoked.