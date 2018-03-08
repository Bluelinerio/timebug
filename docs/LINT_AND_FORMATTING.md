This project uses ESLint for linting and Prettier for automatic code formatting.

## How to Align import statements in vs Code:
- Install [Code alignment](https://marketplace.visualstudio.com/items?itemName=cpmcgrath.codealignment-vscode) from the marketplace 
- select the code you want to align
- CMD+P type `align`, select regex type `from` to align all by where the `from` word is at.

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
