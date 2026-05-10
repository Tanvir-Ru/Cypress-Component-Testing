// cypress/support/component.js
import './commands';
import { mount } from 'cypress/react18';

// Make cy.mount() available in component tests
Cypress.Commands.add('mount', mount);
