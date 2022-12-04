// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'wvu-sports-connect',
    appId: '1:545709307080:web:06456e834d9013014c61fd',
    databaseURL: 'https://wvu-sports-connect-default-rtdb.firebaseio.com',
    storageBucket: 'wvu-sports-connect.appspot.com',
    apiKey: 'AIzaSyC4BM5iDCiSfkv1TV-Mt4ZDBBJEJBchY0Q',
    authDomain: 'wvu-sports-connect.firebaseapp.com',
    messagingSenderId: '545709307080',
    measurementId: 'G-FG9N92B1CF',
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
