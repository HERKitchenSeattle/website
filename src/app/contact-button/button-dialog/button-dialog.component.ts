import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MessageId } from './litterallyJustTheMessageId';
import { SecondDialogComponent } from './second-dialog/second-dialog.component';

@Component({
  selector: 'app-button-dialog',
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.scss'],
})
export class ButtonDialogComponent {
  // input binding vars
  nameVal!: string;
  emailVal!: string;
  messageVal!: string;

  constructor(private db: AngularFirestore, private dialog: MatDialog) {}

  sendMessage() {
    if (
      parseInt(window.localStorage.getItem('xm')!.toString()) <
      new Date().getMilliseconds()
    ) {
      this.db
        .collection('messages')
        .add({
          name: this.nameVal,
          email: this.emailVal,
          message: this.messageVal,
          date: new Date().toLocaleDateString(),
        })
        .then((docRef) => {
          console.log(`Document written with ID: ${docRef.id}`);

          this.db.doc(`messages/${docRef.id}`).update({ id: docRef.id });

          window.localStorage.setItem(
            'xm',

            new Date(new Date().setDate(new Date().getDate() + 1))
              .getTime()
              .toString()
          );

          new MessageId(docRef.id).setMessageId();
          this.dialog.open(SecondDialogComponent);
        })
        .catch((err) => {
          console.error(`Error adding document: ${err}`);
          this.dialog.open(ErrorDialogComponent);
        });
    }
  }
}
