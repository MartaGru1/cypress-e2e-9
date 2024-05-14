- click()
- type()
- check()
- uncheck(): {
		=> It should be used against ONLY radio buttons and checkboxes	
		}

- select(): Used for dropdowns. It only works with the dropdowns created using <select> tag

	ex: 
	<select>
		<option>Table</option>
		<option>Laptop</option>
		<option>Cable</option>
		<option>Monitor</option>
	</select>



ASSERTIONS:

	- Default: Most of Cypress command that helps you query a web element will have auto wait mechanism that will check if the element exist in the dom or not.

	Also, some other commands like visit, or any action command (click(), type() etc) will make sure element is actionable, and not hidden from the view.

	- Implicit: Simply implicit assertions are the assertions using should() method. Specific thing about using this type of assertions is, it won't fail right away it waits for certain amount for condition to become true. So it has retry logic in it.

	- Explicit: Assertions we do using expect(). These assertions don't come with automatic retries like the .should() method.
