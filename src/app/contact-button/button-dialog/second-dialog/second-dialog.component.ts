import { Component, OnInit } from '@angular/core';
import { messageId } from '../litterallyJustTheMessageId';

@Component({
  selector: 'app-second-dialog',
  templateUrl: './second-dialog.component.html',
  styleUrls: ['./second-dialog.component.scss'],
})
export class SecondDialogComponent implements OnInit {
  constructor() {}
  messageID = messageId;
  ngOnInit(): void {}
}
