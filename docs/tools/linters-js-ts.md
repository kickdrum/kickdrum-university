---
sidebar_position: 2
---

# Linters for Javascript/Typescript

After you run the init script, your repo has been initialised with Linters and Static checkers for all your assignments.

Know more about what linters are [here](https://www.sonarsource.com/learn/linter/#:~:text=A%20linter%20works%20through%20the,the%20user%20about%20the%20issue.)

For Javascript/Typescript Assignments there's primarily 1 tool involved -

- [ESLint](https://eslint.org/)

:::info
The Javascript/Typescript Assignments use Jest and Cypress for running the test suites. You can explore more about Jest [here](https://jestjs.io/) and Cypress [here](https://www.cypress.io/)
:::

:::tip
While these linters and tests would be run before each commit, you can manually run them and avoid the committing loop by executing -

```bash
npm run lint #For linting checks
npm run test #For running tests
```

:::
