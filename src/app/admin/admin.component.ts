import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta, Title } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-console',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private titleService: Title,
    private db: AngularFirestore,
    public meta: Meta
  ) {
    this.titleService.setTitle(`Messages - Admin - HER Kitchen Seattle`);
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }
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
