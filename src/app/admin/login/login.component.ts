import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { DOCUMENT, Location } from '@angular/common';

import { Title } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
const perf = firebase.performance();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // input values
  emailVal!: string;
  passwordVal!: string;
  constructor(
    public auth: AngularFireAuth,
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private location: Location
  ) {
    if (typeof document !== undefined) {
      // document.getElementById('goToDash')!.style.display = 'none';
      this.document
        .querySelectorAll<HTMLButtonElement>('#goToDash')
        .forEach((el) => {
          el.style.display = 'none';
        });
    }
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  message!: string;
  errCode: string = '';
  passwordToggle() {
    this.hide = !this.hide;
  }
  login() {
    this.auth.signInWithEmailAndPassword(this.emailVal, this.passwordVal);
  }
  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }
  async signOut() {}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  resetPassword() {
    if (this.emailVal) {
      let email = this.emailVal;
      this.auth
        .sendPasswordResetEmail(email)
        .then(() => {
          this.message = 'sent!';
          this.errCode = '';
        })
        .catch((err) => {
          this.message = err.message;
          this.errCode = err.code;
        });
    } else {
      this.message = 'You have to provide an email';
      this.errCode = '';
    }
  }
  loginMessage: string = '';
  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      let message = params['loginMessage'];
      if (message) {
        this.loginMessage = message.replace(/['"]+/g, '');
      }
    });

    const user = await this.isLoggedIn();
    this.titleService.setTitle(`Admin login - HER Kitchen Seattle`);
    if (user) {
      this.message = 'Signed in!!';
    } else {
      this.message = '';

      this.document.getElementById('goToDash')!.style.display = 'none';
    }
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        this.document.getElementById('goToDash')!.style.display = 'none';
      } else if (user && this.document.defaultView) {
        this.document.defaultView.location.href = '/#/admin';
      }
    });

    this.document.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        e.preventDefault();
        let email = this.emailVal;
        let password = this.passwordVal;
        this.auth
          .signInWithEmailAndPassword(email, password)
          .then(async (user) => {
            console.log(user);

            if (!user.user?.emailVerified) {
              let signedInUser = this.auth.currentUser;
              (await this.auth.currentUser)
                ?.sendEmailVerification()
                .then(() => {
                  console.log('sent!');
                  this.message =
                    'Your email is not verified; we sent an email to you.';
                  this.errCode = '';
                });
            } else if (
              user.user.emailVerified &&
              (await this.isLoggedIn()) &&
              this.auth.currentUser
            ) {
              this.message = 'signed in!';
              this.errCode = '';
              this.auth
                .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                  return this.auth.signInWithEmailAndPassword(
                    email as string,
                    password as string
                  );
                });
            } else {
              this.message = 'error';
            }
          })
          .catch((err) => {
            console.log(err);
            this.message = err.message;
            this.errCode = err.code;
          });
      }
    });
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.message = 'Signed in!';
        this.errCode = '';

        this.document.getElementById('goToDash')!.style.display =
          'inline-block';

        this.document.getElementById('signInButton')!.style.display = 'none';
        // this.router.navigateByUrl('console/dashboard');
      } else {
        return;
      }
    });
    this.document
      .querySelectorAll('form.login')[0]
      .addEventListener('submit', (event: Event) => {
        const trace = perf.trace('userLogin');

        trace.start();
        event.preventDefault();
        try {
          let email = this.emailVal;
          let password = this.passwordVal;

          this.auth
            .signInWithEmailAndPassword(email as string, password as string)
            .then(async (user) => {
              console.log(user);
              trace.putAttribute('verified', `${user.user?.emailVerified}`);
              if (!user.user?.emailVerified) {
                (await this.auth.currentUser)
                  ?.sendEmailVerification()
                  .then(() => {
                    console.log('sent!');
                    this.message =
                      'Your email is not verified; we sent an email to you.';
                    this.errCode = '';
                  });
              } else {
                this.message = 'signed in!!';
                this.errCode = '';
                this.auth
                  .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                  .then(() => {
                    return this.auth.signInWithEmailAndPassword(
                      email as string,
                      password as string
                    );
                  });
              }
            })
            .catch((err) => {
              console.log(err);
              this.message = err.message;
              this.errCode = err.code;
              trace.putAttribute('errorCode', err.code);
            });
        } catch (error) {}

        trace.stop();
      });
  }
}
