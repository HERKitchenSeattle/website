import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private auth: AngularFireAuth) {}
  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }
  isSignedIn() {
    return this.isLoggedIn();
  }
}
