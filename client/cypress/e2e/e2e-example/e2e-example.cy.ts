describe("Navigation", () => {
  it("should navigate to the e2e example about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/e2e-example");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/about");

    // The new page should contain an h1 with "About"
    cy.get("h1").contains("About");
  });
});
