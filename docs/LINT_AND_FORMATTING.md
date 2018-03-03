This project uses ESLint for linting and Prettier for automatic code formatting.

> Eslint: The pluggable linting utility for JavaScript and JSX.

> Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

## Scripts

### `npm run lint`

This will show a list of lint warnings and errors in all .js files in the `src` directory.

### `npm run lint:fix`

This will correct lint warnings that can be automatically fixed, e.g. adding a ;

### `npm run format`

This will format all .js files in the src directory with prettier-eslint, it will format the code according to the rules setup in your eslint config.

## IDE integrations

* VSCode

Install the following extension: https://github.com/prettier/prettier-vscode, follow instructions and hit Ctrl + Shift + F to format a file.
