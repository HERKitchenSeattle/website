import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
})
export class InstagramComponent implements OnInit {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }

  ngOnInit(): void {
    window.location.href = 'https://www.instagram.com/herkitchenseattle/';
    window.location.replace('https://www.instagram.com/herkitchenseattle/');
  }
}
