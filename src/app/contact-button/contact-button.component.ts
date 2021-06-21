import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonDialogComponent } from './button-dialog/button-dialog.component';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss'],
})
export class ContactButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openMessageDialog() {
    this.dialog.open(ButtonDialogComponent);
  }
  enabled: boolean = false;

  ngOnInit(): void {
    if (typeof window !== undefined && !window.localStorage.getItem('xm'))
      window.localStorage.setItem('xm', new Date().getTime().toString());
    if (typeof window !== undefined) {
      if (
        parseInt(window.localStorage.getItem('xm')!.toString()) <
        new Date().getTime()
      ) {
        this.enabled = true;
      } else {
        this.enabled = false;
      }
    }
  }
}
