// cypress/component/LoginForm.cy.js
// Component-level test for LoginForm React component

import LoginForm from '../../src/components/LoginForm.jsx';

describe('🧩 LoginForm Component Tests', () => {

    it('renders username and password inputs', () => {
        cy.mount(<LoginForm />);
        cy.get('input[name="username"]').should('exist');
        cy.get('input[name="password"]').should('exist');
    });

    it('renders a submit button', () => {
        cy.mount(<LoginForm />);
        cy.get('button[type="submit"]').should('exist').and('be.visible');
    });

    it('shows error when submitted empty', () => {
        cy.mount(<LoginForm onSubmit={cy.stub().as('submitStub')} />);
        cy.get('button[type="submit"]').click();
        cy.get('[data-testid="error-message"]').should('be.visible');
        cy.get('@submitStub').should('not.have.been.called');
    });

    it('calls onSubmit with credentials when form is valid', () => {
        const onSubmit = cy.stub().as('onSubmit');
        cy.mount(<LoginForm onSubmit={onSubmit} />);
        cy.get('input[name="username"]').type('tomsmith');
        cy.get('input[name="password"]').type('SuperSecretPassword!');
        cy.get('button[type="submit"]').click();
        cy.get('@onSubmit').should('have.been.calledOnce');
    });

    it('masks password input', () => {
        cy.mount(<LoginForm />);
        cy.get('input[name="password"]').should('have.attr', 'type', 'password');
    });

    it('clears error on input change after failed submission', () => {
        cy.mount(<LoginForm />);
        cy.get('button[type="submit"]').click();
        cy.get('[data-testid="error-message"]').should('be.visible');
        cy.get('input[name="username"]').type('a');
        cy.get('[data-testid="error-message"]').should('not.exist');
    });
});
