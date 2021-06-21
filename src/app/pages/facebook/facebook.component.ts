import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss'],
})
export class FacebookComponent {
  constructor(private meta: Meta) {
    document
      .querySelectorAll('app-navbar, app-footer, app-contact-button')
      .forEach((el) => {
        // @ts-ignore
        el.style.display = 'none';
      });
    this.meta.updateTag({ name: 'robots', content: 'noindex' });

    window.location.replace('https://www.facebook.com/HERKitchenSeattle/');
  }
}
