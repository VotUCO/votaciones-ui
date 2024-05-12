// https://docs.cypress.io/api/table-of-contents

describe("Frontend Tests", () => {
  it("Visit the homepage", () => {
    cy.visit("/");
    cy.contains("h1", "¡Bienvenid@ a VotUCO: El sistema de votaciones on-line de la Universidad de Córdoba!");
    cy.get("[data-cy='signin-button']").click()
  });
});
