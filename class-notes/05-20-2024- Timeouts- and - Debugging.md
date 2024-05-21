Recap 

Custom Commands

1. Parent Command

	Commands always called after cy.

	e.g
	cy.get()
	cy.visit()
	cy.title()

2. Child Command

	Commands references to previous subject

	e.g.
	should()
	find()
	any action command

3. Dual Commands

	Commands that can be either parent or child command

	cy.contains()
	cy.screenshoot()

4. Ovewriting the existing Cypress command

	Allows us to change the functionality of an existing Cypress command


	CLI

	Running the tests using CLI gives programmer a lot of control and flexibility to run tests with different options.

	CLI is crucial for CI/CD like jenkins, because it requires us to provide commands to run tests.






	npx cypress run

	Flags

	--headless / --headed
	--browser
	--config
	--env
	--spec