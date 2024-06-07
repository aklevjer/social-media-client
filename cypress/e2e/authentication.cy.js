describe("Authentication", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("allows the user to log in with valid credentials", () => {
    cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.isLoggedIn();
  });

  it("shows an alert when attempting to log in with invalid credentials", () => {
    cy.waitForInvalidAlert();
    cy.login("invalid@stud.noroff.no", "invalidpassword123");
  });

  it("logs the user out with the log out button", () => {
    cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.isLoggedIn();
    cy.logout();
    cy.isLoggedOut();
  });
});
