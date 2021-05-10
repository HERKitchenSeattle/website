import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ButtonDialogComponent } from '../contact-button/button-dialog/button-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private titleService: Title,
    private dialog: MatDialog,
    public meta: Meta
  ) {
    this.titleService.setTitle(`Contact - HER Kitchen Seattle`);
    this.meta.updateTag({ name: 'robots', content: 'index' });
  }
  openMessageDialog() {
    this.dialog.open(ButtonDialogComponent);
  }
  ngOnInit(): void {}
}
