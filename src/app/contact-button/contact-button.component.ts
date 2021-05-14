import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonDialogComponent } from './button-dialog/button-dialog.component';
import $ from 'jquery';

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
    if (
      parseInt(window.localStorage.getItem('xm')!.toString()) <
      new Date().getTime()
    ) {
      $('#enabled-contact').css('display', 'block');
      $('#disabled-contact').css('display', 'none');
    } else {
      $('#enabled-contact').css('display', 'none');
      $('#disabled-contact').css('display', 'block');
    }
  }
}
