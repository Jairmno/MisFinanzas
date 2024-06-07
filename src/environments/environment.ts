// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Conexion con base de datos Firebase
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyASde41bYsaLCllSC3xGXmgAYdy_XCJ38U",
    authDomain: "misfinanzas-c5285.firebaseapp.com",
    projectId: "misfinanzas-c5285",
    storageBucket: "misfinanzas-c5285.appspot.com",
    messagingSenderId: "578700799129",
    appId: "1:578700799129:web:f618126a683cc4cc5d9c08"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
