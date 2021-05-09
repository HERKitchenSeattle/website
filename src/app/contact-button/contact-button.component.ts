import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonDialogComponent } from './button-dialog/button-dialog.component';

/**
 * @title Contact button
 * @description the button that brings up a contact dialog
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
  ngOnInit(): void {}
}
