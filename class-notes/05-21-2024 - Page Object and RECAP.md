RECAP:

TIMEOUTS

Timeouts in Cypress are the time limit for default assertions before they throw any error.

Where we can find these timeouts ?

	- These predefined options that can be found in settings.

How to overwrite the Timeouts ?

	1. We can overwrite these options over the config.js
	2. CLI that will overwrite the timeout you have by default, or in config file for a single test run.

		We can overwrite these timeouts through the CLI or directly in the code

		npx cypress run --config defaultCommandTimeout=20000

	3. Inline timeout, which allows us to define a timeout for specific Cypress commnd.

	cy.get('#locator', 
	{ 
	  timeout: 1000,
	  log: true
	}).click()



DEBUGGING:

	1. Using Cypress Test Runner. ( Real time re-loading, time travel, command line)

	2. cy.debug()	=> Freezes the browser. Useful for catching dynamic content that disappears quick.

		Note: Your dev tools on your test runner must be open.

	3. cy.pause()	=> It pauses the execution of your test at the line where its issued.

	4. cy.wait(3000)	=> This considered as 'Hard Wait'. Pauses your exectuion for specified amount of time at where its issued.

NOTE: Be careful using these methods because if you forget to remove them before you push your code, it will significantly increase the execution time of your tests.


Script Execution from the code

cy.exec('npm run build')

const exec = require('child-processor')

exec('npm run build')

	Eg. npm test 		=> 	npx cypress run




Scenario: 

	If your developers code is required you to have on your local for testing it means you have to run dev code to run the application that you will test, which will initialize the local server ( https://localhost:8080 )


	So, if we want to test this application in our local machine, first we have to start the server of this application.

	In the devs code ( via package.json ) you will find npm script that will trigger the local server. You can basically go ahead, and run this script manually. OR, you can add this script to your automation framework using exect() to automate this process.

	Example code:

	const { exec } = require('child_process');

	// Below code will run ONCE before your tests to initialize the local server so you can use it in your tests.

	before(() => {
	  exec('npm run build')
	  cy.exec('npm run build')
	})


	beforeEach(() => {
	  cy.visit('localhost:8080');
	});

	//your tests
	it('my lovely test', () => {
		cy.get('#myLovelyLocator')
	})


	after(() => {
	   exec('npm run kill')
	})