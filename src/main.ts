// @ts-nocheck
import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { enableDebugTools } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((module) =>
      enableDebugTools(module.injector.get(ApplicationRef).components[0])
    )
    .catch((err) => console.error(err));
});

function detectMobile(): void {
  if (typeof document !== undefined) {
    // @ts-ignore
    if (navigator.userAgentData) {
      // @ts-ignore
      if (navigator.userAgentData.mobile === true) {
        document.body.classList.add('mobile');
      } else {
        document.body.classList.add('desktop');
      }
    } else {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        document.body.classList.add('mobile');
      } else {
        document.body.classList.add('desktop');
      }
    }
  }
}
if (navigator.userAgentData) {
  if (navigator.userAgentData.mobile === true) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.add('desktop');
  }
} else {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.add('desktop');
  }
}
detectMobile();
window.onresize = () => detectMobile();

// @ts-ignore
// FB.CustomerChat.show(true);
