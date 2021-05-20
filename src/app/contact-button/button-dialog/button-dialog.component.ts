import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { SecondDialogComponent } from './second-dialog/second-dialog.component';

import { messageId, set } from './litterallyJustTheMessageId';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Component({
  selector: 'app-button-dialog',
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.scss'],
})
export class ButtonDialogComponent implements OnInit {
  // input binding vars
  nameVal!: string;
  emailVal!: string;
  messageVal!: string;

  constructor(private db: AngularFirestore, private dialog: MatDialog) {}
  email = new FormControl('', [Validators.required, Validators.email]);
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
          document.getElementById('enabled-contact')!.style.display = 'none';
          document.getElementById('disabled-contact')!.style.display = 'fixed';
          set(docRef.id);
          this.dialog.open(SecondDialogComponent);
        })
        .catch((err) => {
          console.error(`Error adding document: ${err}`);
          this.dialog.open(ErrorDialogComponent);
        });
    }
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
