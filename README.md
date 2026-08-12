# Playwright Automation Testing

A **QA Automation Testing project using Playwright and JavaScript**, created to practice and demonstrate web application automation, Page Object Model (POM), data-driven testing, assertions, and end-to-end testing.

## 🚀 Project Overview

This project automates the **SauceDemo** e-commerce application and covers the following key user flows:

* User Login
* Products/Home Page
* Product Sorting
* Add Products to Cart
* Cart Validation
* Checkout
* Order Completion
* Logout
* End-to-End User Flow

The framework follows the **Page Object Model (POM)** approach to keep test cases organized, reusable, and maintainable.

## 🛠️ Technologies Used

* **Playwright**
* **JavaScript**
* **Node.js**
* **Page Object Model (POM)**
* **JSON Test Data**
* **Git & GitHub**
* **GitHub Actions**

## 📂 Project Structure

```text
PlaywrightAutomation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── Pages/
│   ├── addToCart.js
│   ├── checkout.js
│   ├── homePage.js
│   ├── loginPage.js
│   └── logout.js
│
├── testdata/
│   ├── addToCart.json
│   ├── checkout.json
│   ├── homePage.json
│   └── loginData.json
│
├── tests/
│   ├── AddToCart.spec.js
│   ├── Checkout.spec.js
│   ├── EndToEndAction.spec.js
│   ├── example.spec.js
│   ├── HomePage.spec.js
│   ├── Login.spec.js
│   └── Logout.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

## 🧪 Testing Approach

### Page Object Model

Each major application functionality has a dedicated Page Object containing:

* Locators
* Page actions
* Reusable methods

This keeps the test cases clean and makes the framework easier to maintain.

### Data-Driven Testing

Test data is stored separately in JSON files for:

* Login credentials
* Products
* Sorting options
* Checkout information

This allows test data to be reused without hardcoding values directly into test cases.

## ✅ Test Scenarios

### Login

* Login with valid credentials
* Verify successful login

### Home Page

* Verify Products page
* Verify products are displayed
* Verify cart icon
* Sort products by:

  * Name A-Z
  * Name Z-A
  * Price Low to High
  * Price High to Low

### Add to Cart

* Add products to cart
* Add multiple products
* Verify cart badge
* Verify product names in cart

### Checkout

* Enter customer information
* Continue checkout
* Verify order details
* Complete order
* Verify successful order completion

### Logout

* Logout from the application
* Verify user is returned to the login page

### End-to-End

The E2E test combines the major functionalities into one complete flow:

```text
Login
  ↓
Home Page
  ↓
Sort Products
  ↓
Add Products
  ↓
Cart
  ↓
Checkout
  ↓
Complete Order
  ↓
Logout
```

## ▶️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/haniaadnan-10/Automation_Playwright.git
```

### Navigate to the Project

```bash
cd Automation_Playwright
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/Login.spec.js
```

Run the End-to-End test:

```bash
npx playwright test tests/EndToEndAction.spec.js
```

Run tests with Playwright UI:

```bash
npx playwright test --ui
```

## 📊 Test Report

View the Playwright HTML report after test execution:

```bash
npx playwright show-report
```

## 🔄 CI/CD

The project includes a **GitHub Actions workflow** that automatically runs the Playwright test suite.

```text
.github/
└── workflows/
    └── playwright.yml
```

## 🎯 Learning Objectives

Through this project, I am developing practical experience in:

* Web UI automation
* Playwright
* JavaScript for test automation
* Page Object Model
* Data-driven testing
* Assertions and validations
* End-to-end testing
* Test organization
* CI/CD with GitHub Actions

## 👩‍💻 Author

**Hania Adnan**

Software Engineering Student | QA Automation Enthusiast

GitHub: **haniaadnan-10**
