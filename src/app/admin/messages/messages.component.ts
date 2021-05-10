import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Meta } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';

interface Message {
  date: any;
  email: string;
  id: string;
  message: string;
  name: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [
    trigger('detailExpanded', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class MessagesComponent implements OnInit, AfterViewInit {
  constructor(
    private auth: AngularFireAuth,
    private meta: Meta,
    private db: AngularFirestore
  ) {
    const user = this.isLoggedIn();
    if (!user) {
      window.location.href = '/#/admin/login';
      console.log('go to login');
      this.meta.updateTag({ name: 'robots', content: 'noindex' });
    }
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href =
          '/#/admin/login?loginMessage="you have to login to acces messages"';
        console.log('go to login');
      }
    });
  }
  displayedColumns: string[] = ['date', 'name', 'email', 'id'];
  dbDate(date: any) {
    return new Date(date.seconds).toLocaleDateString();
  }
  expandedMessage!: Message | null;
  messageCollection!: AngularFirestoreCollection<Message>;
  messages!: Observable<Message[]>;
  actualMessages: any = [];
  dataSource = new MatTableDataSource<Message>(this.messages as any);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }
  ngOnInit(): void {
    this.messageCollection = this.db.collection('events', (ref) => {
      return ref.orderBy('date');
    });
    this.messages = this.messageCollection.valueChanges();

    this.db.firestore
      .collection('messages')
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.docs.map((doc) => doc.data()));
        this.actualMessages = querySnapshot.docs.map((doc) => doc.data());
      })
      .then(() => {
        console.log(this.actualMessages);
      });
  }
  pushMessages(message: any) {
    this.actualMessages.push(message);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
