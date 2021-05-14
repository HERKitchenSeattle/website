// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//change the keys in main.ts, app.module.ts, environment.ts, and environment.prod.ts.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBouOK3qYFSPtttpQTIUPR6WDy0AlNvbNY',
    authDomain: 'herkitchenseattle.firebaseapp.com',
    databaseURL: 'https://herkitchenseattle-default-rtdb.firebaseio.com',
    projectId: 'herkitchenseattle',
    storageBucket: 'herkitchenseattle.appspot.com',
    messagingSenderId: '532110473531',
    appId: '1:532110473531:web:b6cdda638b727921d49f1e',
    measurementId: 'G-1W9PF6P5JD',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
