import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor() {}
  pages = ['Home', 'About', 'Menu', 'Events', 'Contact'];
  ngOnInit(): void {}
}
