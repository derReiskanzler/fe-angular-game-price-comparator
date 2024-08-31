# Frontend Angular Game Price Comparator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0 and has been since kept up to date.
Its corresponding Backend can be found [here](https://github.com/kirdreamer/GamePriceComparator).

## Concept
[↗︎ concept link](./docs/concept.md)

## CI/CD

[↗︎ ci/cd link](./.github/docs/ci.md)

## Dockerfile & Env Vars

Regarding dynamic environment variables that can be passed down to this frontend application, Angular only supports file replacement when running `ng build` commands with different [configuration flags](https://v17.angular.io/guide/build#configure-target-specific-file-replacements). This does not apply to our use case of having a different `API_BASE_URL` in different environments when the App is deployed in different remote environments.

As Angular does not support dynamic substitution of environment variables the [Dockerfile had to be adjusted to use a entrypoint script](https://medium.com/@sushil.singh56/read-dynamic-environment-variables-in-angular-621e3ba38eb4) that dynamically replaces a `env-vars.js` file in the `src/assets` folder, which is the only folder being copied during build time and put into the /dist folder. This enables us to confidently use the `env-vars.js` as a global variables file (by adding a script to the `index.html`) that can receive environment variables from outside which are passed down to the App. 

### Node & NPM engines in package.json
Always check your [node version](https://nodejs.org/en/about/previous-releases) and keep it consistent in the package.json
