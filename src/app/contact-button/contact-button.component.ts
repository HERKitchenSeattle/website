import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonDialogComponent } from './button-dialog/button-dialog.component';

/**
 * @title Contact button
 * @description the button that brings up a contact dialog
 * @deprecated Doesn't work for whatever reason
 */
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

  ngOnInit(): void {
    if (typeof document !== undefined) {
      if (
        parseInt(window.localStorage.getItem('xm')!.toString()) <
        new Date().getTime()
      ) {
        document.getElementById('enabled-contact')!.style.display = 'fixed';
        document.getElementById('disabled-contact')!.style.display = 'none';
      } else {
        document.getElementById('enabled-contact')!.style.display = 'none';
        document.getElementById('disabled-contact')!.style.display = 'fixed';
      }
    }
  }
}
