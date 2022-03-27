describe("Booktopia App Home Page", () => {
  it("loads successfully", () => {
    cy.visit("http://localhost:3000");
    cy.get(".header")
      .should("be.visible")
      .within(() => {
        cy.get(".logo").should("contain.text", "Booktopia");
      });
  });

  it("returns result(s) when a query is entered by 2s", () => {
    cy.get(".textInput").type("harry potter");
    cy.get(".submit").click();
    cy.wait(2000);
    cy.get(".card").should("be.visible");
  });
});
