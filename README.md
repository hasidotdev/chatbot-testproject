# Chatbot Demo

A simple chatbot created in React

---

## Focus & Stack

- The app was set up using `create-react-app` since the main focus was to provide nice React-Code.
- Automated testing was left out for now. Some JEST tests especially on the `ChatBot` class might be nice.
- For Linting ESLint with some common set of rules was used.
- Prettier is used for formatting
- The `flow.json` file is stored in the repo (see [here](/public/flow.json)). It is fetched during runtime
- The OpenApi Definition YAML can also be [found](src/api/chatbot.yaml) in the repo. See below for creating Api-Methods using this file
- All React components are functional. The [ChatBot](src/logic/ChatBot.ts) logic is the only class based code.

## Requirements & Usage

### Requirements

- Tested and developed with node `16.16.0` (Current LTS)
- Tested with `yarn` (`npm` might also work)

### Basics

- Start DEV Mode: `yarn dev`
- Run Build: `yarn build`
- Serve `build` folder: `yarn start`

### Further Scripts

- Run ESLint: `yarn lint`
- Bulk-Format with Prettier: `yarn format`
- Create API-Methods from OpenApi Definition:
  - The OpenApi-YAML was stored in this repo (see [here](/src/api/chatbot.yaml))
  - It can be used to generate API-Methods (Axios-based)
  - Docker is required
  - Run `./generateOpenApi.sh` in the root directory
  - This script uses the `openapitools/openapi-generator-cli` docker image to create the api methods in the [/src/api/generatedApi/]() folder
