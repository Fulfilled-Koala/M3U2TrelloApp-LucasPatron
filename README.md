# Trello Clone

## Project Overview

This project is a clone of the Trello app, using Webpack as the module bundler, TypeScript as the programming language (compiled to the [bundle JS file](./public/bundle.js)), and Tailwind CSS for styling.

### Setup

Cloning the project:

```bash
$ git clone
```

Running the project:

```bash
$ npm start
```

Building the project:

```bash
$ npm run build
```

Running ESLint:

```bash
$ npm run lint
```

### Husky & CommitLint

The project uses Husky and CommitLint to enforce consistent commit style.

The hooks are located in the `.husky` directory. You can likewise find the rules in the `.commitlintrc.config.js` file.

You can see the list of hooks in the official [commitlint documentation](https://commitlint.js.org/#/).

### Project Structure

Inside the project, you will find the following directories:

- [public](public/): The public directory contains the compiled application.
- [src](src/): The source directory contains the TypeScript files to be compiled.

Within the `src` directory, you will find the following directories:

- [api](./src/store/): The `store` directory contains the storage implementation by using the browser's Local Storage to simulate a database.
- [assets](./src/assets/): The `assets` directory contains the svg's and other assets to be used in the application.
- [constants](./src/constants/): The `constants` directory contains the constants used in the application.
- [modals](./src/modals/): The `modals` directory contains the functionality for all of the existing modals, which append an Event Listener to them (invoked by the root file [index.ts](./src/index.ts)).
- [types](./src/types/): The `types` directory contains the definition for the TypeScript types used in the application.
- [utils](./src/utils/): The `utils` directory contains utility functions used in the application:
  - [Drag and Drop](./src/utils/drag-and-drop.ts) functionality without using a third-party library.
  - [Elements](./src/utils/elements.ts) accessing the DOM elements and exporting them to a global variable.
  - [Render tasks](./src/utils/render-tasks.ts) for rendering the tasks from the Local Storage.
