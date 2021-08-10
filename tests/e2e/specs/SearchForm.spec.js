describe("Search form should be working", () => {
  it("fills in the form", () => {
    cy.server();

    cy.visit("/");

    // submit without any data
    cy.getByTestId("submit").click();
    cy.getByTestId("snackbar")
      .children()
      .should("be.visible")
      .children()
      .invoke("text")
      .should("contain", "Please  fill up  all fields");

    // submit wit some data
    // City of Origin
    cy.getByTestId("origin").click();

    cy.get(".v-list").then(($elements) => {
      cy.wrap($elements[0]).children().eq(1).click();
    });

    // Destination
    cy.getByTestId("destination").click();

    cy.get(".v-list").then(($elements) => {
      cy.wrap($elements[1]).children().eq(6).click();
    });

    //try to submit the form
    cy.getByTestId("submit").click();
    cy.getByTestId("snackbar")
      .children()
      .should("be.visible")
      .children()
      .invoke("text")
      .should("contain", "Please  fill up  all fields");

    //submit with complete form
    //fill departure date
    cy.getByTestId("date-row")
      .children()
      .children()
      .eq(0)
      .click()
      .get("button.v-date-picker-table__current")
      .click()
      .parent()
      .get(".v-picker__actions button")
      .then(($elements) => {
        cy.wrap($elements[1]).click();
      });

    //fill return date
    cy.getByTestId("date-row")
      .children()
      .children()
      .eq(2)
      .click()
      .get("button.v-date-picker-table__current")
      .then(($elements) => {
        cy.wrap($elements[1]).click();
      })
      // .parent()
      .get(".v-picker__actions button")
      .then(($elements) => {
        cy.wrap($elements[3]).click();
      });

    // fill submit
    cy.getByTestId("submit").click();
    cy.getByTestId("snackbar")
      .children()
      .should("not.be.visible")
      .children()
      .invoke("text")
      .should("contain", "Please  fill up  all fields");

  });
});
