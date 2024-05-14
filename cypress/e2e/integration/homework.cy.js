describe("Homework", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/");
      cy.contains(".cards", "Dropdowns").click();
    });
  
    /**
     * Test Case: Validate Dropdowns Functionality on TechGlobal Training Page
     * Go to https://techglobal-training.com/frontend
     * Select the "Dropdowns" card
     * Select the "MacBook Pro 13" option from the "Product" dropdown.
     * Select the "Green" option from the "Color" dropdown.
     * Open the "Shipping" dropdown and click on the "Delivery" option.
     * Click on the "Submit" button.
     * Validate result message displays "Your Green MacBook Pro 13 will be delivered to you."
     */
    it("Dropdown Menu", () => {
      const product = "MacBook Pro 13";
      const color = "Green"
      const shippingOption = "Pick up"
      const expectedMessage = shippingOption === 'Delivery'
      ? `Your ${color} ${product} will be delivered to you.`
      : `Your ${color} ${product} is ready to be picked up.`
  
      cy.get('#product_dropdown').select(product)
      cy.get('#color_dropdown').select(color)
  
      cy.get('#shipment_dropdown').click()
      cy.get(`[aria-label="${shippingOption}"]`).click()
      
      cy.get('#submit').click()

      cy.get('#result').should('have.text', expectedMessage)
    });
  });