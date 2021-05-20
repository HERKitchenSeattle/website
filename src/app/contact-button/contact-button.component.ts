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
    if (typeof window !== undefined) {
      if (
        parseInt(window.localStorage.getItem('xm')!.toString()) <
        new Date().getTime()
      ) {
        document.querySelectorAll('#enabled-contact').forEach((el) => {
          //@ts-ignore
          el.style.display = 'fixed';
        });

        document.querySelectorAll('#disabled-contact').forEach((el) => {
          //@ts-ignore
          el.style.display = 'none';
        });
      } else {
        document.querySelectorAll('#enabled-contact').forEach((el) => {
          //@ts-ignore
          el.style.display = 'none';
        });

        document.querySelectorAll('#disabled-contact').forEach((el) => {
          //@ts-ignore
          el.style.display = 'fixed';
        });
      }
    }
  }
}
