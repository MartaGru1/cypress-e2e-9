Locators Recap

- XPath
- CSS

CSS:

- Tags
- id (#)and class (.)

<button id="submit"></button>
- button.#submit

- div > button: Targets the direct child

<div>
	<button id="submit"></button>
</div>

- div button: Targets the descendant child
	div > span > button

<div>
	<span>
		<button id="submit"></button>
	</span>	
</div>

- #button, #typeBox: Targets the multiple web elements that relation isnt required

- div li#firstItem + li: Targets the immediate sibling of a specified web element

<div>
	<ul>
		<li id="secondItem">item 2</li>
		<li id="firstItem">item 1</li>
		<li id="thirdItem">item 3</li>
		<li id="fourthItem">item 4</li>
	</ul>	
</div>

- div li#firstItem ~ li: Targets all the immediate siblings of a specified web element

<div>
	<ul>
		<li id="secondItem">item 2</li>
		<li id="firstItem">item 1</li>
		<li id="thirdItem">item 3</li>
		<li id="fourthItem">item 4</li>
		<span>item 4</span>
		<li id="fifthItem">item 5</li>
		<div>
			<ol>
				<li>random item</li>
				<li>random item</li>
				<li>random item</li>
			</ol>
		</div>
		<li id="sixthItem">item 6</li>
	</ul>	
</div>



<input type="radio" name="radioButton" data-testid="radio_test" href="url"></input>

	[type="radio"]
	[name="radioButton"]
	[data-testid="radio_test"]
	[href="url"]

	- contains 		=> [type*="radio"]
	- starts-with 	=> [type^="radio"]
	- ends-with 	=> [type$="radio"]

<input class="radio style-1 mr-3 wrapper listItems"></input>

[class^="radio"]
[class$="listItems"]
.radio style-1 mr-2 wrapper listItems. XXXXXXXXXX


.radio: {
	color: "black",
	background-color: "white",
	font: "bold"

}

.listItems: {
	color: "black",
	background-color: "white",
	font: "bold"
}


Pseudo Classes

Its a way to locate the elements depending on their states.

input:empty
button:disabled
.checkbox:checked
li:first-child
li:nth-child(9)
li:last-child
option:selected
button:visible

li:not(#firstItem)