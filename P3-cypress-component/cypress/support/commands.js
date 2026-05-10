// cypress/support/commands.js — Custom Cypress commands

/**
 * cy.login(username, password)
 * Logs in via the UI login form
 */
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password, { log: false });
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
});

/**
 * cy.loginByApi(email, password)
 * Logs in via API and sets auth cookie — faster than UI login
 */
Cypress.Commands.add('loginByApi', (email = 'eve.holt@reqres.in', password = 'cityslicka') => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/login`,
        body: { email, password }
    }).then(({ body }) => {
        window.localStorage.setItem('authToken', body.token);
    });
});

/**
 * cy.interceptApiAndWait(method, urlPattern, alias, fixture?)
 * Intercepts an API call and waits for it to complete
 */
Cypress.Commands.add('interceptApiAndWait', (method, urlPattern, alias, fixture = null) => {
    if (fixture) {
        cy.intercept(method, urlPattern, { fixture }).as(alias);
    } else {
        cy.intercept(method, urlPattern).as(alias);
    }
});

/**
 * cy.shouldBeVisible(selector)
 * Assert element is visible with a helpful message
 */
Cypress.Commands.add('shouldBeVisible', (selector) => {
    cy.get(selector).should('exist').and('be.visible');
});

/**
 * cy.fillForm(fields)
 * Fill multiple form fields by label text
 * @param {Object} fields - { 'Label Text': 'value' }
 */
Cypress.Commands.add('fillForm', (fields) => {
    Object.entries(fields).forEach(([label, value]) => {
        cy.contains('label', label)
          .invoke('attr', 'for')
          .then(id => cy.get(`#${id}`).clear().type(value));
    });
});
