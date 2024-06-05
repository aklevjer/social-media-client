// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitHome", () => {
  cy.visit("/");
  cy.wait(500);
});

Cypress.Commands.add("login", (email, password) => {
  cy.intercept("POST", "**/auth/login").as("login");

  cy.get("#registerForm button[data-auth='login']").click();
  cy.wait(500);

  cy.get("#loginForm input[type='email']").type(email);
  cy.get("#loginForm input[type='password']").type(password);
  cy.get("#loginForm button[type='submit']").click();

  cy.wait("@login");
  cy.wait(500);
});

Cypress.Commands.add("logout", () => {
  cy.get("button[data-auth='logout']").click();
  cy.wait(500);
});

Cypress.Commands.add("isLoggedIn", () => {
  cy.window().then((win) => {
    const token = win.localStorage.getItem("token");
    expect(token).to.be.a("string");
  });
});

Cypress.Commands.add("isLoggedOut", () => {
  cy.window().then((win) => {
    const token = win.localStorage.getItem("token");
    expect(token).to.be.null;
  });
});

Cypress.Commands.add("waitForInvalidAlert", () => {
  cy.on("window:alert", (alertText) => {
    expect(alertText).to.equal(
      "Either your username was not found or your password is incorrect",
    );
  });
});
