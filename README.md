# 🎭 Playwright Automation Framework

A **Playwright automation testing framework** built with **JavaScript** for end-to-end testing of the **Sauce Labs Demo application**.

The framework follows the **Page Object Model (POM)** design pattern and includes reusable page classes, test data management, custom fixtures, utilities, Docker support, and GitHub Actions for CI/CD.

## 🚀 Tech Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- GitHub Actions
- Docker
- JSON Test Data

## 📌 Features

- End-to-end web automation using Playwright
- Page Object Model architecture
- Reusable page components
- Custom Playwright fixtures
- External test data
- Utility functions
- Smoke and regression testing
- Automated test execution with GitHub Actions
- Docker support
- Cross-browser testing capability
- Playwright test reports

## 📂 Project Structure

    Automation_Playwright/
    │
    ├── .github/
    │   └── workflows/          # GitHub Actions CI/CD workflows
    │
    ├── Pages/                  # Page Object classes
    │
    ├── fixtures/               # Custom Playwright fixtures
    │
    ├── testdata/               # Test data
    │
    ├── tests/                  # Test specifications
    │
    ├── utilities/              # Reusable utility functions
    │
    ├── Dockerfile              # Docker configuration
    ├── .dockerignore
    ├── .gitignore
    ├── package.json             # Project dependencies and scripts
    ├── package-lock.json
    ├── playwright.config.js     # Playwright configuration
    └── README.md

## 🧪 Test Scenarios

The framework automates important user workflows in the Sauce Labs Demo application:

- Login functionality
- Product validation
- Product sorting
- Add product to cart
- Remove product from cart
- Checkout workflow
- Navigation
- Logout
- Application state management

## ⚙️ Installation

### 1. Clone the repository

    git clone https://github.com/haniaadnan-10/Automation_Playwright.git

### 2. Navigate to the project

    cd Automation_Playwright

### 3. Install dependencies

    npm install

### 4. Install Playwright browsers

    npx playwright install

## ▶️ Run Tests

### Run all tests

    npx playwright test

### Run tests in headed mode

    npx playwright test --headed

### Run tests in debug mode

    npx playwright test --debug

### Run a specific test file

    npx playwright test tests/<test-file>.spec.js

## 📊 Test Reports

After test execution, open the Playwright HTML report:

    npx playwright show-report

The report provides:

- Test execution status
- Passed and failed tests
- Execution time
- Error details
- Screenshots and traces when configured

## 🔄 CI/CD

This project includes **GitHub Actions** workflows for automated test execution.

The CI pipeline can automatically:

1. Install Node.js dependencies
2. Install Playwright browsers
3. Execute the automated test suite
4. Generate test results

## 🐳 Docker

The project includes a `Dockerfile` for running Playwright tests in a containerized environment.

### Build Docker image

    docker build -t playwright-tests .

### Run tests using Docker

    docker run --rm playwright-tests

## 🧱 Page Object Model

The framework uses the **Page Object Model (POM)** to separate test logic from page-specific locators and actions.

This provides:

- Better code organization
- Reusable methods
- Easier maintenance
- Reduced code duplication
- More readable test cases

### Architecture

    Test Cases
         ↓
    Page Objects
         ↓
    Locators & Actions
         ↓
    Application Under Test

## 📋 Test Data

Test data is maintained separately inside the `testdata` directory.

Keeping test data outside the test scripts makes the framework easier to maintain and allows data to be reused across multiple scenarios.

## 🧩 Fixtures & Utilities

### Fixtures

The `fixtures` directory contains reusable Playwright fixtures that help with common test setup and reduce duplicated code.

### Utilities

The `utilities` directory contains reusable helper functions shared across different test cases.

## 🎯 Testing Approach

This framework supports:

- **Smoke Testing** – Verify critical application functionality
- **Regression Testing** – Validate existing functionality after changes
- **End-to-End Testing** – Validate complete user workflows
- **Functional Testing** – Verify application behavior

## 📈 Future Improvements

- Parallel test execution
- Multi-environment configuration
- API automation
- Enhanced Allure reporting
- Test tagging and filtering
- Improved failure screenshots and traces
- Additional negative test scenarios
- Expanded browser coverage

## 👩‍💻 Author

**Hania Adnan**

QA / Test Automation Engineer
