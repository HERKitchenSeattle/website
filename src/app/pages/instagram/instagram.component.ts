import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
})
export class InstagramComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'robots', content: 'noindex' });

    window.location.replace('https://www.instagram.com/herkitchenseattle/');
  }
}
