# Workflow CA - Social Media Client

[![Automated Unit Testing](https://github.com/aklevjer/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/aklevjer/social-media-client/actions/workflows/unit-test.yml) [![Automated E2E Testing](https://github.com/aklevjer/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/aklevjer/social-media-client/actions/workflows/e2e-test.yml) [![Deploy static content to Pages](https://github.com/aklevjer/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/aklevjer/social-media-client/actions/workflows/pages.yml)

## Description

This project was the course assignment for the Workflow course at Noroff. The task was to improve the quality of an existing social media application by implementing various development workflows as well as a testing strategy.

The improvements include setting up ESLint for code linting, Prettier for code formatting, pre-commit hooks for maintaining code quality, and both unit and end-to-end tests using Jest and Cypress. Additionally, GitHub Actions was configured for continuous integration of the tests.

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:aklevjer/social-media-client.git
```

2.  Install the dependencies:

```bash
npm install
```

### Setting Up Environment Variables

This project requires environment variables for end-to-end testing purposes, particularly for authentication. Create a `.env` file in the root directory of the project and add the following variables:

```
USER_EMAIL=
USER_PASSWORD=
```

**To obtain these values:**

1. Run the application locally or visit the [deployed application](https://aklevjer.github.io/social-media-client/).
2. Register a new user account if you don't have one already.
3. Use the registered email and password as the values for `USER_EMAIL` and `USER_PASSWORD` in the `.env` file.

### Running

To run the app in development mode, use the following command:

```bash
npm run start
```

## Project Commands

### Running Tests

To run both unit and end-to-end tests:

```bash
npm run test
```

To run unit tests using Jest:

```bash
npm run test-unit
```

To open Cypress for end-to-end testing in interactive mode:

```bash
npm run test-e2e
```

To run Cypress end-to-end tests in headless mode:

```bash
npm run test-e2e-cli
```

### Code Formatting and Linting

To format the code using Prettier:

```bash
npm run format
```

To lint the code using ESLint:

```bash
npm run lint
```

To fix linting issues using ESLint:

```bash
npm run lint-fix
```
