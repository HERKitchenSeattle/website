import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-console',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {}
  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }
  ngOnInit(): void {
    const user = this.isLoggedIn();
    if (!user) {
      window.location.href = '/#/admin/login';
      console.log('go to login');
    }
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = '/#/admin/login';
        console.log('go to login');
      }
    });
  }
}
