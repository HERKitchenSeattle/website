import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: Error) => console.error(err));

function detectMobile(): void {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    if (typeof document !== undefined) document.body.classList.add('mobile');
  } else {
    if (typeof document !== undefined) document.body.classList.add('desktop');
  }
}
detectMobile();
window.onresize = () => detectMobile();

// @ts-ignore
// FB.CustomerChat.show(true);
