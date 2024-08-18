/*
  if this approach should be tried, rename this file with .ts path ending
  and adjust in entrypoint.sh for Dockerfile as well as environment.service
*/
// export {}

// declare global {
//     interface Window {
//         ENV: {
//             API_BASE_URL: string;
//         };
//     }
// }
  
// Used approach from: https://nkpremices.com/dynamically-set-angular-env-variables-in-docker/
(function (window) {
  window['env'] = window['env'] || {};

  // Environment variables
  window['env']['API_BASE_URL'] = 'http://localhost:8080/api';
})(this);