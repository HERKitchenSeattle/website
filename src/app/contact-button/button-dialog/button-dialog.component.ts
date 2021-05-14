import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import $ from 'jquery';
import { SecondDialogComponent } from './second-dialog/second-dialog.component';
import firebase from 'firebase/app';

import { messageId, set } from './litterallyJustTheMessageId';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Component({
  selector: 'app-button-dialog',
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.scss'],
})
export class ButtonDialogComponent implements OnInit {
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
          name: $('.name-form').val(),
          email: $('.email-form').val(),
          message: $('.message-form').val(),
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
          $('#enabled-contact').css('display', 'none');
          $('#disabled-contact').css('display', 'block');
          set(docRef.id);
          this.dialog.open(SecondDialogComponent);
        })
        .catch((err) => {
          console.error(`Error adding document: ${err}`);
          this.dialog.open(ErrorDialogComponent);
        });
    }
  }
  ngOnInit(): void {}
}
