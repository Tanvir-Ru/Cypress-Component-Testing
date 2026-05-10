// cypress/e2e/api-mocking.cy.js
// Demonstrates cy.intercept() for mocking API responses

describe('🌐 API Mocking — cy.intercept() Examples', () => {

    it('mocks a GET /users response and asserts UI renders it', () => {
        cy.intercept('GET', '**/api/users**', { fixture: 'api-responses.json' }).as('getUsers');

        cy.visit('/');
        cy.wait('@getUsers').its('response.statusCode').should('eq', 200);
    });

    it('simulates a 500 server error and shows fallback UI', () => {
        cy.intercept('GET', '**/api/loans**', {
            statusCode: 500,
            body: { error: 'Internal Server Error' }
        }).as('getLoansError');

        cy.visit('/dashboard');
        cy.wait('@getLoansError');
        cy.get('[data-testid="error-state"]').should('be.visible');
    });

    it('intercepts POST request and verifies request payload', () => {
        cy.intercept('POST', '**/api/login', (req) => {
            expect(req.body).to.have.property('email');
            expect(req.body).to.have.property('password');
            req.reply({ statusCode: 200, body: { token: 'mock-token-123' } });
        }).as('postLogin');
    });

    it('simulates network delay and checks loading state', () => {
        cy.intercept('GET', '**/api/users**', (req) => {
            req.on('response', (res) => { res.setDelay(2000); });
        }).as('slowRequest');

        cy.visit('/');
        cy.get('[data-testid="loading-spinner"]').should('be.visible');
        cy.wait('@slowRequest');
        cy.get('[data-testid="loading-spinner"]').should('not.exist');
    });

    it('verifies correct API headers are sent', () => {
        cy.intercept('GET', '**/api/users/profile', (req) => {
            expect(req.headers).to.have.property('authorization');
            req.reply({ statusCode: 200, body: { name: 'Tanvir Hossain' } });
        }).as('getProfile');
    });
});
