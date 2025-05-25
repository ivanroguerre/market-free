describe("Items Detail Direct Navigation", () => {
  it("should load item detail page when directly navigating to an item", () => {
    // Directly visit the item detail page with ID 27
    cy.visit("http://localhost:3000/items/27");

    // Verify we're on the correct item detail page
    cy.url().should("include", "/items/27");

    // Verify the item detail content is loaded
    cy.get('[role="article"]').should("exist");
    
    // Verify basic item information is displayed
    cy.get('[role="article"]').within(() => {
      cy.get('img').should('exist');
      cy.get('h1').should('exist');
      cy.get('span[role="text"]').should('exist');
      cy.get('[role="contentinfo"]').should('exist');
    });
  });
});
