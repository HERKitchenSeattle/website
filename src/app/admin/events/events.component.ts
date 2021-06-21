import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { first, map, startWith } from 'rxjs/operators';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
export function actualDeleteEvent(ID: string) {
  firebase
    .firestore()
    .collection('events')
    .doc(ID as string)
    .delete();
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  // FORM VALUES

  // create event
  name: string = '';

  description: string = '';
  infoLink: string = '';
  location: string = '';
  address: string = '';
  startDate: string = '';
  endDate: string = '';
  timeInfo: string = '';
  image: string = '';

  // update event
  eventId: string = '';
  key: string = '';
  value: string = '';

  // delete event
  eventDelete: string = '';
  // END FORM VALUES
  myControl = new FormControl();
  options: string[] = [
    'name',
    'description',
    'startDate',
    'endDate',
    'imageUrl',
    'location',
    'id',
  ];
  deleteMessage: string = '';
  deleteEvent() {
    if (!this.eventDelete || this.eventDelete == '') {
      this.deleteMessage = 'You have to provide an ID.';
    } else {
      this.dialog.open(DeleteConfirmComponent, {
        data: {
          id: this.eventDelete,
        },
      });
    }
  }

  filteredOptions!: Observable<string[]>;
  campaignOne!: FormGroup;
  campaignTwo!: FormGroup;
  constructor(
    private router: Router,
    public auth: AngularFireAuth,
    public db: AngularFirestore,
    private titleService: Title,
    public dialog: MatDialog
  ) {
    const user = this.isLoggedIn();
    if (!user) {
      window.location.href = '/#/admin/login';
      console.log('go to login');
    }
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href =
          '/#/admin/login?loginMessage="you have to login to access events"';
        console.log('go to login');
      }
    });
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
    if (!this.auth.currentUser) {
      this.router.navigateByUrl('console/login');
    }
  }
  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  message = '';
  async signOut() {
    if (await this.auth.currentUser) {
      this.auth
        .signOut()
        .then(() => {
          console.log('signed out');
        })
        .catch((err) => {});
    }
  }
  async createEventFromData() {
    if (!this.name || !this.startDate || !this.endDate) {
      this.message = 'You have at least fill out the name and date fields.';
    } else {
      this.message = 'creating';

      this.createEvent(
        this.name,
        this.startDate,
        this.endDate,
        this.description,

        this.location,
        this.address,
        this.image,
        this.timeInfo,
        this.infoLink
      );
    }
  }
  message2: string = '';
  updateEvent() {
    let updateObj = JSON.parse(`{"${this.key}": "${this.value}"}`);
    this.db
      .doc(`events/${this.eventId}`)
      .update(updateObj)
      .then(() => {
        this.message2 = 'Updated!';
      })
      .catch((err) => {
        this.message2 = err;
        console.error(err);
      });
  }
  openIDDialog() {
    this.dialog.open(IdDialogComponent);
  }

  createEvent(
    name: string,
    startDate: any,
    endDate: any,
    description: string,

    location: string,
    address: string,
    imageUrl?: string,
    otherTimeStuff?: string,
    infoLink?: string
  ) {
    this.db
      .collection('events')
      .add({
        name: name,
        startDate: startDate,
        endDate: endDate,
        description: description,
        location: location,
        address: address,
        imageUrl: imageUrl,
        otherTimeStuff: otherTimeStuff,
        infoLink: infoLink,
      })
      .then((docRef) => {
        console.log(`Document written with ID: ${docRef.id}`);
        this.message = `Event created with ID ${docRef.id}`;
        this.db.doc(`events/${docRef.id}`).update({ id: docRef.id });
      })
      .catch((err) => {
        console.error(`Error adding document: ${err}`);
      });
  }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    this.titleService.setTitle(`Admin Dashboard - HER Kitchen Seattle`);
    this.db
      .collection('events')
      .get()
      .toPromise()
      .then((querySnapshot: any) => {
        querySnapshot.docs.forEach((doc: any) => {
          console.log(doc.data);
        });
      });
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'id-dialog',
  templateUrl: 'id-dialog.html',
})
export class IdDialogComponent {}
