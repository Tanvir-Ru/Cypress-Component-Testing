// cypress/support/e2e.js
import './commands';

// Global before hook — clear cookies & localStorage before every test
beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

// Log uncaught exceptions without failing tests (configure per need)
Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('ResizeObserver loop')) return false;
    return true;
});
