# Frontend Angular Game Price Comparator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0 and has been since kept up to date.
Its corresponding Backend can be found [here](https://github.com/kirdreamer/GamePriceComparator).

## Concept

[→ concept link](./docs/concept.md)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name --standalone` to generate a new component. Accordingly you can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Unit tests

Run `npm run test` to execute the unit tests via [Jest](https://github.com/jestjs/jest).

## Linting

Linting has been set up via [Angular-ESLint](https://github.com/angular-eslint/angular-eslint).
Run `npm run lint` to execute linting.

## Node & NPM engines in package.json
Always check your [node version](https://nodejs.org/en/about/previous-releases) and keep it consistent in the package.json

## Kubernetes

```bash
minikube start \
    --cpus=2 --memory=4096m \
    --container-runtime=cri-o \
    --driver=docker \
    --addons=ingress \

kubectl apply -f <K8-files>

# "Real-time" check on ressources
watch --exec kubectl get [pods,services,ingress,etc] --output wide

# For checking pods
kubectl describe pods

# For checking within the container
kubectl logs  <container-name>
```
