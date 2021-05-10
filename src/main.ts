import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if ('serviceWorker' in navigator && environment.production) {
      navigator.serviceWorker.register('ngsw-worker.js');
    }
  })
  .catch((err) => console.error(err));
//change the keys in main.ts, app.module.ts, environment.ts, and environment.prod.ts.
export const firebaseConfig = {
  apiKey: 'AIzaSyBouOK3qYFSPtttpQTIUPR6WDy0AlNvbNY',
  authDomain: 'herkitchenseattle.firebaseapp.com',
  databaseURL: 'https://herkitchenseattle-default-rtdb.firebaseio.com',
  projectId: 'herkitchenseattle',
  storageBucket: 'herkitchenseattle.appspot.com',
  messagingSenderId: '532110473531',
  appId: '1:532110473531:web:b6cdda638b727921d49f1e',
  measurementId: 'G-1W9PF6P5JD',
};
