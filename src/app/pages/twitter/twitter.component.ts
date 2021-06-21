import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss'],
})
export class TwitterComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
    this.title.setTitle('Twitter - HER Kitchen');
    window.location.replace('https://twitter.com/herkitchenwa');
  }
}
