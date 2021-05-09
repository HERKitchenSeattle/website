import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import $ from 'jquery';
import { SecondDialogComponent } from './second-dialog/second-dialog.component';

import { messageId, set } from './litterallyJustTheMessageId';

@Component({
  selector: 'app-button-dialog',
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.scss'],
})
export class ButtonDialogComponent implements OnInit {
  constructor(private db: AngularFirestore, private dialog: MatDialog) {}
  email = new FormControl('', [Validators.required, Validators.email]);
  sendMessage() {
    this.db
      .collection('messages')
      .add({
        name: $('.name-form').val(),
        email: $('.email-form').val(),
        message: $('.message-form').val(),
      })
      .then((docRef) => {
        console.log(`Document written with ID: ${docRef.id}`);

        this.db.doc(`messages/${docRef.id}`).update({ id: docRef.id });

        set(docRef.id);
        this.dialog.open(SecondDialogComponent);
      })
      .catch((err) => {
        console.error(`Error adding document: ${err}`);
      });
  }
  ngOnInit(): void {}
}
