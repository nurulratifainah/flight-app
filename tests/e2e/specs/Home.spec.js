// https://docs.cypress.io/api/introduction/api.html

describe("Test home page", () => {
  it("Visits the app root url and verify navigation is working", () => {
    cy.visit("/");
    cy.contains(
      "div",
      "Enter your destinations and date to see exiting offers!"
    );

    cy.get("#nav > a")
      .should("have.length", 2)
      .filter(".router-link-exact-active")
      .should("have.attr", "href", "/")
      .and("contain", "Home")
      .parent()
      .children()
      .eq(1)
      .click();

    cy.url()
      .should('contain', '/about')
  });
});
