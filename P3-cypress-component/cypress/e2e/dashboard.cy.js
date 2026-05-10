// cypress/e2e/dashboard.cy.js
import users from '../fixtures/users.json';

describe('🏠 Dashboard — Secure Area', () => {

    before(() => {
        cy.login(users.valid.username, users.valid.password);
    });

    it('displays the secure area heading', () => {
        cy.get('h2').should('contain.text', 'Secure Area');
    });

    it('shows a success flash message', () => {
        cy.get('.flash.success').should('be.visible');
    });

    it('has a logout link', () => {
        cy.get('a[href="/logout"]').should('be.visible');
    });

    it('redirects unauthenticated users away from /secure', () => {
        cy.clearCookies();
        cy.visit('/secure', { failOnStatusCode: false });
        cy.url().should('not.include', '/secure');
    });
});
