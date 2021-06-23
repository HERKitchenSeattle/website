import { Component, Inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss'],
})
export class FacebookComponent {
  constructor(
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.document
      .querySelectorAll<HTMLElement>(
        'app-navbar, app-footer, app-contact-button'
      )
      .forEach((el) => {
        el.style.display = 'none';
      });
    this.meta.updateTag({ name: 'robots', content: 'noindex' });

    this.document.defaultView?.location.replace(
      'https://www.facebook.com/HERKitchenSeattle/'
    );
  }
}
