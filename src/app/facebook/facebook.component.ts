import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss'],
})
export class FacebookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.location.href = 'https://www.facebook.com/HERKitchenSeattle/';
    // Simulate an HTTP redirect:
    window.location.replace('https://www.facebook.com/HERKitchenSeattle/');
  }
}
