import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(private auth: AngularFireAuth) {
    const user = this.isLoggedIn();
    if (!user) {
      window.location.href = '/#/admin/login';
      console.log('go to login');
    }
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href =
          '/#/admin/login?loginMessage="you have to login to acces messages"';
        console.log('go to login');
      }
    });
  }
  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }
  ngOnInit(): void {}
}
