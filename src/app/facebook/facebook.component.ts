import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss'],
})
export class FacebookComponent implements OnInit {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }

  ngOnInit(): void {
    window.location.href = 'https://www.facebook.com/HERKitchenSeattle/';
    // Simulate an HTTP redirect:
    window.location.replace('https://www.facebook.com/HERKitchenSeattle/');
  }
}
