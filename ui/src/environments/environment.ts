// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  APP_ROOT_URL: 'https://localhost:5006',
  
  // SERVER_ROOT_URL : "http://localhost:9091",
  SERVER_API_ROOT_URL: "https://localhost:9091/secforecast/stocks/v0",
  KEYCLOAK_SERVER_URL: 'https://localhost:8443/',
  KEYCLOAK_REALM: "secforecast",
  KEYCLOAK_CLIENT_ID: "sec-forecast-ui",
  KEYCLOAK_POST_LOGIN_REDIRECT_URI: "https://localhost:5006/dashboard",

  CONTACT_US_EMAIL: "info@mars-infotech.com",
  CONTACT_US_PHONE: "+1 437 999 4424",
  CONTACT_US_FAX: "+1 437 999 5555",
  CONTACT_US_ADDRESS: "123 Main Street, New York, NY 10030, USA",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
