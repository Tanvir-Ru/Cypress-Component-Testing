// cypress/e2e/login.cy.js
import users from '../fixtures/users.json';

describe('🔐 Login — E2E Tests', () => {

    beforeEach(() => {
        cy.visit('/login');
    });

    context('Valid credentials', () => {
        it('logs in and redirects to secure area', () => {
            cy.get('#username').type(users.valid.username);
            cy.get('#password').type(users.valid.password);
            cy.get('button[type="submit"]').click();

            cy.url().should('include', '/secure');
            cy.get('.flash.success').should('be.visible')
              .and('contain', 'You logged into a secure area!');
        });

        it('shows a logout link on the secure page', () => {
            cy.login(users.valid.username, users.valid.password);
            cy.get('a[href="/logout"]').should('be.visible');
        });
    });

    context('Invalid credentials', () => {
        users.invalid.forEach(({ username, password, expectedError }) => {
            it(`shows error for "${username}"`, () => {
                cy.get('#username').type(username || ' ');
                cy.get('#password').type(password || ' ');
                cy.get('button[type="submit"]').click();

                cy.get('.flash.error')
                  .should('be.visible')
                  .and('contain', expectedError);
            });
        });
    });

    context('Logout', () => {
        it('logs out and redirects to login', () => {
            cy.login(users.valid.username, users.valid.password);
            cy.get('a[href="/logout"]').click();
            cy.url().should('include', '/login');
            cy.get('.flash.success').should('contain', 'logged out');
        });
    });
});
