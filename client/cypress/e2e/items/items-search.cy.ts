describe("Items Search", () => {
  beforeEach(() => {
    // Start from the home page before each test
    cy.visit("http://localhost:3000");
  });

  it("should search for items and display results", () => {
    // Type in the search input and submit
    cy.get('input[name="search"]').type("shirt");
    cy.get("form").submit();

    // Verify we're on the items page with the search query
    cy.url().should("include", "/items?q=shirt");

    // Verify that results are displayed
    cy.get('[role="list"]').should("exist");
    cy.get('[role="listitem"]').should("have.length.at.least", 1);
  });

    it("should show empty state when no results are found", () => {
      // Search for something that won't return results
      cy.get('input[name="search"]').type("xyz123nonexistentitem");
      cy.get('form').submit();

      // Verify we're on the items page
      cy.url().should("include", "/items?q=xyz123nonexistentitem");

      // Verify empty state is shown
      cy.contains("No se encontraron resultados para tu búsqueda").should("be.visible");
      cy.contains("Volver al inicio").should("be.visible");
    });

    it("should navigate to item detail when clicking on a result", () => {
      // Search for items
      cy.get('input[name="search"]').type("shirt");
      cy.get('form').submit();

      // Click on the first result
      cy.get('[role="listitem"]').first().click();

      // Verify we're on the item detail page
      cy.url().should("include", "/items/");
      cy.get('[role="article"]').should("exist");
    });

    it("should show no more than 4 items in search results", () => {
      // Test with different search terms
      const searchTerms = ["shirt", "blue", "watch"];
      
      searchTerms.forEach((term) => {
        // Type in the search input and submit
        cy.get('input[name="search"]').clear().type(term);
        cy.get("form").submit();

        // Verify we're on the items page with the search query
        cy.url().should("include", `/items?q=${term}`);

        // Verify that results are displayed and no more than 4 items are shown
        cy.get('[role="list"]').should("exist");
        cy.get('[role="listitem"]').should("have.length.at.most", 4);
      });
    });
});
