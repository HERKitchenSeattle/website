import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'lazysizes';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
export const firebaseConfig = {
  apiKey: 'AIzaSyDEbuKFAVI4kh3i-jqI-dQbAcJHApjrW6o',
  authDomain: 'herkitchenseattle.firebaseapp.com',
  projectId: 'herkitchenseattle',
  storageBucket: 'herkitchenseattle.appspot.com',
  messagingSenderId: '532110473531',
  appId: '1:532110473531:web:b6cdda638b727921d49f1e',
  measurementId: 'G-1W9PF6P5JD',
};
