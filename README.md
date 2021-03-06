# Trello Clone

![Gif](./Final.gif)

## Project Overview

Using TypeScript, Vite, and TailwindCSS, this project forms the base of a Kanban-style application.

To have full functionality, the project requires an [API](https://github.com/Fulfilled-Koala/M3U2TrelloServer-LucasPatron). The API root is set to `http://localhost:1337` [here](./src/constants/api-url.ts).

### Setup

Cloning the project:

```shell
$ git clone
```

Running the project:

```shell
$ npm run dev
```

Building the project:

```shell
$ npm run build
```

Running ESLint:

```shell
$ npm run lint
```

### Husky & CommitLint

The project uses Husky and CommitLint to enforce consistent commit style.

The hooks are located in the `.husky` directory. You can likewise find the rules in the `.commitlintrc.config.js` file.

You can see the list of hooks in the official [commitlint documentation](https://commitlint.js.org/#/).

### Project Structure

Inside the project, you will find the [src](src/) directory, containing the root of the application.

Within the `src` directory, you will find the following directories:

- [api](./src/api/): The `api` directory contains all the HTTP requests to the server.
- [assets](./src/assets/): The `assets` directory contains the svg's and other assets to be used in the application.
- [constants](./src/constants/): The `constants` directory contains the constants used in the application.
- [modals](./src/modals/): The `modals` directory contains the functionality for all the existing modals, which append an Event Listener to them (invoked by the root file [main.ts](./src/main.ts)).
- [store](./src/store/): The `store` directory contains the initialization of the store within JavaScript's memory.
- [toasts](./src/toasts/): The `toasts` directory contains all the notification popups (successful & unsuccessful).
- [types](./src/types/): The `types` directory contains the definition for the TypeScript types used in the application.
- [utils](./src/utils/): The `utils` directory contains utility functions used in the application:
  - [Drag and Drop](./src/utils/drag-and-drop.ts) functionality without using a third-party library.
  - [Elements](./src/utils/elements.ts) accessing the DOM elements and exporting them to a global variable.
  - [Render tasks](./src/utils/render-tasks.ts) for rendering the tasks from the API.
  - [Theme](./src/utils/theme.ts) for light and dark mode.
