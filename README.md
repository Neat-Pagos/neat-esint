# Neat-eslint
A neat group of rules for linting our TypeScript projects.

## Installation

### If it's only a TypeScript project.

First, import dependencies:

``` 
yarn add
    typescript-eslint
    eslint
    @types/eslint
    @typescript-eslint/eslint-plugin
    @typescript-eslint/parser
    git+https://github.com/Neat-Pagos/neat-eslint.git#DEPLOY_vX.X.X
```
Or
``` 
npm install
    typescript-eslint
    eslint
    @types/eslint
    @typescript-eslint/eslint-plugin
    @typescript-eslint/parser
    git+https://github.com/Neat-Pagos/neat-eslint.git#DEPLOY_vX.X.X
```

Then, configure the eslintrc:

```
module.exports = {
  'parser': '@typescript-eslint/parser',
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'neat-eslint',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
};

```

And you'll have all the recommended rules in addition to Neat rules.

### If you have another framework that already uses TypeScript ESLint

For example, Vue already has a TypeScript ESLint version, but we want to add our Neat-eslint rules.

Install Vue dependencies and Neat-eslint:


``` 
yarn add
    eslint-plugin-vue
    @vue/eslint-config-typescript
    git+https://github.com/Neat-Pagos/neat-eslint.git#DEPLOY_vX.X.X
```
Or
``` 
npm install
    eslint-plugin-vue
    @vue/eslint-config-typescript
    git+https://github.com/Neat-Pagos/neat-eslint.git#DEPLOY_vX.X.X
```

Then, configure the eslintrc:

```
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript',
    'neat-eslint',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
};

```