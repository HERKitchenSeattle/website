import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Meta } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private auth: AngularFireAuth, private meta: Meta) {
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
  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }
}
