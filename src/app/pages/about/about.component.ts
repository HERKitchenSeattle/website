import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ButtonDialogComponent } from '../../contact-button/button-dialog/button-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(
    private titleService: Title,
    private dialog: MatDialog,
    public meta: Meta
  ) {
    this.titleService.setTitle(`About - HER Kitchen Seattle`);
    this.meta.updateTag({
      name: 'description',
      content: 'About HER Kitchen Seattle.',
    });
  }
  openMessageDialog() {
    this.dialog.open(ButtonDialogComponent);
  }
}
