import { Component } from '@angular/core';
import { MessageId } from '../litterallyJustTheMessageId';

@Component({
  selector: 'app-second-dialog',
  templateUrl: './second-dialog.component.html',
  styleUrls: ['./second-dialog.component.scss'],
})
export class SecondDialogComponent {
  constructor() {}
  messageID = new MessageId().getMessageId;
}
