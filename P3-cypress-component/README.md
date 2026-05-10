# 🟢 cypress-component-testing

> **Level: Beginner** | Language: JavaScript | Framework: Cypress 13 | Types: E2E + Component | CI: GitHub Actions

A complete Cypress 13 test suite covering both E2E browser tests and component-level unit tests, with API mocking via `cy.intercept()`, custom commands, and GitHub Actions CI integration.

![CI](https://github.com/Tanvir-Ru/cypress-component-testing/actions/workflows/ci.yml/badge.svg)
![Cypress](https://img.shields.io/badge/Cypress-13.x-17202C?logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)

---

## 📁 Project Structure

```
cypress-component-testing/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── dashboard.cy.js
│   │   └── api-mocking.cy.js
│   ├── component/
│   │   ├── LoginForm.cy.js
│   │   ├── DataTable.cy.js
│   │   └── Modal.cy.js
│   ├── fixtures/
│   │   ├── users.json
│   │   └── api-responses.json
│   └── support/
│       ├── commands.js        # Custom Cypress commands
│       ├── e2e.js             # E2E support file
│       └── component.js       # Component support file
├── src/components/
│   ├── LoginForm.jsx
│   ├── DataTable.jsx
│   └── Modal.jsx
├── .github/workflows/
│   └── ci.yml
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Cypress 13 | E2E + Component testing |
| React 18 | Component library under test |
| cy.intercept() | API request mocking |
| Cypress Dashboard | Cloud test recording |
| GitHub Actions | CI/CD pipeline |

---

## ⚙️ Setup

```bash
git clone https://github.com/Tanvir-Ru/cypress-component-testing.git
cd cypress-component-testing
npm install

# Open Cypress Test Runner (interactive)
npx cypress open

# Run E2E tests headless
npx cypress run --spec "cypress/e2e/**"

# Run component tests
npx cypress run --component

# Run all tests
npm test
```

---

## 🧑‍💻 Author

**Tanvir Hossain** — Senior QA Engineer
📧 iamtanvir.cse@gmail.com | 🔗 [LinkedIn](https://linkedin.com/in/tanvir-hossain)
