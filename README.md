# Playwright Automation Testing

A **QA Automation Testing project using Playwright and JavaScript**, created to practice and demonstrate end-to-end web application testing, Page Object Model (POM), test data management, assertions, and automated test execution.

## 🚀 Project Overview

This project contains automated test cases for **SauceDemo**, covering important application flows such as:

* User Login
* Product Page
* Product Selection
* Add to Cart
* Cart Validation
* Test Data Management
* End-to-End Testing

The project follows a structured automation framework using **Playwright** and the **Page Object Model (POM)** approach.

## 🛠️ Technologies Used

* **Playwright**
* **JavaScript**
* **Node.js**
* **Page Object Model (POM)**
* **JSON Test Data**
* **Git & GitHub**
* **GitHub Actions**

## 📂 Project Structure
PlaywrightAutomation/
│
├── .github/workflows/
│   └── playwright.yml
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
│   ├── HomePage.spec.js
│   ├── Login.spec.js
│   └── Logout.spec.js
│

## 🧪 Testing Approach

The automation framework uses the **Page Object Model (POM)** to keep test cases organized and maintainable.

### Page Objects

Page classes contain:

* Locators
* Page actions
* Reusable methods

This keeps the test cases clean and makes it easier to maintain the automation framework when the application changes.

### Test Data

Test data is stored separately in JSON files, allowing test cases to use different users and product information without hardcoding the data directly into the tests.

## ✅ Test Scenarios

Some of the scenarios covered in this project include:

### Login

* Login with valid credentials
* Validate successful login
* Validate login-related behavior

### Products

* Verify Products page
* Select products
* Add products to cart
* Validate product information

### Cart

* Verify added products
* Verify correct product names
* Verify products are displayed in the cart
* Validate cart functionality

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/haniaadnan-10/Automation_Playwright.git
```

### 2. Navigate to the Project

```bash
cd Automation_Playwright
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Playwright Browsers

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
npx playwright test tests/example.spec.js
```

Run tests with the Playwright UI:

```bash
npx playwright test --ui
```

## 📊 View Test Report

After test execution, open the Playwright HTML report:

```bash
npx playwright show-report
```

## 🔄 CI/CD

This project also includes a **GitHub Actions workflow** for automated test execution.

The workflow allows Playwright tests to be executed automatically through GitHub Actions.

## 🎯 Learning Objectives

This project is part of my QA Automation learning journey. Through this project, I am working on:

* Web UI automation
* Playwright fundamentals
* JavaScript for test automation
* Page Object Model
* Test data-driven automation
* Assertions and validations
* End-to-end testing
* Test organization and maintainability
* CI/CD automation with GitHub Actions

## 👩‍💻 Author

**Hania Adnan**

Software Engineering Student | QA Automation Enthusiast

GitHub: [haniaadnan-10](https://github.com/haniaadnan-10)

---

⭐ If you find this project useful, feel free to star the repository!
