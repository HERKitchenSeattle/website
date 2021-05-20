import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  address: string;
}

interface Event {
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  imageUrl?: string;
  location: string;
  id?: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private db: AngularFirestore,
    public meta: Meta,
    public dialog: MatDialog
  ) {
    this.titleService.setTitle(`Events - HER Kitchen Seattle`);
    this.meta.updateTag({
      name: 'description',
      content:
        'Where HER Kitchen Seattle will vend. Generally around the Seattle area.',
    });
    this.meta.updateTag({ name: 'robots', content: 'index' });
  }

  eventsCollection!: AngularFirestoreCollection<Event>;
  log(stuff: any) {
    console.log(stuff);
  }
  getOtherTimeStuff(id: any) {
    console.log(this.db.collection('events').doc(id).get());
  }
  events!: Observable<Event[]>;
  snapshot: any;
  googleMapsBaseUrl: string =
    'https://www.google.com/maps/search/?api=1&query=';
  encodeURIComponent(url: any) {
    return encodeURIComponent(url);
  }
  timestampToDate(timestamp: any) {
    return new Date(timestamp.toDate()).toLocaleDateString('en-US');
  }
  ngOnInit(): void {
    this.eventsCollection = this.db.collection('events', (ref) => {
      return ref.orderBy('startDate').limit(10);
    });
    this.events = this.eventsCollection.valueChanges();
    console.log(this.events);
    console.log(this.eventsCollection);
  }
}
