import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
})
export class InstagramComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.location.href = 'https://www.instagram.com/herkitchenseattle/';
    window.location.replace('https://www.instagram.com/herkitchenseattle/');
  }
}
