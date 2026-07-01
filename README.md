# E2E-PlaywrightFramework-with_MCP
# E2E Playwright Framework with MCP

A scalable end-to-end test automation framework built using **Playwright** with **MCP (Model Context Protocol) integration**, designed to demonstrate modern AI-assisted automation practices, maintainable test architecture, and real-world enterprise testing patterns.

## 🚀 Project Overview

This framework automates end-to-end web application testing using Playwright and follows industry-standard automation practices such as:

* Page Object Model (POM) architecture
* Test isolation and parallel execution
* Reusable fixtures
* Environment-based configuration
* API and UI integration testing
* Automated reporting
* CI/CD pipeline readiness
* AI-assisted testing workflows using MCP

The goal of this project is to showcase how modern SDETs can combine traditional automation frameworks with AI capabilities to improve test creation, debugging, and maintenance.

## 🏗️ Framework Architecture

The framework follows a scalable layered architecture:

```
E2E-PlaywrightFramework-with-MCP

├── tests/
│   ├── UI test scenarios
│   └── API test scenarios
│
├── pages/
│   └── Page Object Models
│
├── fixtures/
│   └── Custom Playwright fixtures
│
├── utils/
│   └── Reusable utilities and helpers
│
├── config/
│   └── Environment configurations
│
├── test-data/
│   └── Test data management
│
├── reports/
│   └── Test execution reports
│
└── MCP/
    └── AI-assisted automation workflows
```

## ✨ Key Features

### 🎭 Playwright Automation

* Chromium, Firefox, and WebKit browser support
* Auto-waiting mechanism
* Locator-based automation
* Trace viewer debugging
* Screenshot and video capture
* Parallel test execution

### 🧱 Enterprise Framework Design

* Page Object Model implementation
* Custom fixtures
* Dependency management
* Reusable components
* Clean test separation

### 🔐 Authentication Management

* Login automation
* Session reuse using storageState
* Secure credential handling
* Environment-based execution

### 🌐 API Testing

* API request context usage
* Backend validation
* API mocking and network interception
* End-to-end UI + API workflows

### 🤖 MCP Integration

* AI-assisted test execution workflows
* Context-aware automation support
* Improved debugging capabilities
* Faster test development lifecycle

## 🧪 Supported Testing Types

✅ End-to-End Testing
✅ UI Automation Testing
✅ API Testing
✅ Regression Testing
✅ Smoke Testing
✅ Cross-browser Testing
✅ Data-driven Testing

## 🛠️ Tech Stack

* Playwright
* TypeScript
* Node.js
* MCP (Model Context Protocol)
* GitHub Actions
* HTML Reporter
* JSON/JUnit Reporting

## ▶️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

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

Run specific browser:

```bash
npx playwright test --project=chromium
```

Generate HTML report:

```bash
npx playwright show-report
```

## 📊 Reporting & Debugging

The framework supports:

* HTML reports
* Screenshots on failures
* Video recording
* Trace viewer analysis

Debug command:

```bash
npx playwright test --debug
```

## 🎯 Learning Objectives

This project demonstrates:

* How to design an enterprise-level Playwright framework
* How to implement scalable automation architecture
* How to integrate AI capabilities into test automation
* How modern SDETs can improve productivity using AI-powered workflows

## 👩‍💻 Author

Built as a practical demonstration of modern QA automation engineering practices using Playwright and AI-assisted testing.
