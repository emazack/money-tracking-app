# Money Tracking App Unit Tests

This repository contains unit tests for the "Money Tracking App" project. The purpose of these tests is to ensure the correctness and reliability of the application's codebase. In this README, you will find instructions on how to run these unit tests and interpret the results.

## Prerequisites

Before you can run the unit tests, make sure you have the following prerequisites installed on your system:

- Node.js: You can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/emazack/money-tracking-app.git
   ```

2. Change your working directory to the cloned repository:

   ```bash
   cd money-tracking-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Running Unit Tests

We use [Jest](https://jestjs.io/) as the testing framework for this project. Jest is already included in the project's `devDependencies` and configured in the `package.json` file.

To run the unit tests, execute the following command:

```bash
npm test
```

This will execute all the unit tests in the project and display the results in your terminal.

## Watching for Changes (Development Mode)

If you want to run the tests in watch mode, which automatically re-runs tests when code changes are detected, you can use the following command:

```bash
npm run test:dev
```

## Test Coverage

Jest also provides test coverage reporting. When you run `npm test`, Jest will generate a coverage report in the `coverage` directory. You can open the HTML coverage report in your browser to see which parts of the code are covered by tests.

## Additional Information

If you need more information or have any questions about using these unit tests or the project in general, please feel free to reach out to the author, [emazack](https://github.com/emazack).

Happy testing!
