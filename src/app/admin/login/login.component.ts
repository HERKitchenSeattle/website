import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import $ from 'jquery';
import { Title } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    $('.goToDash').hide();
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;
  message!: string;
  errCode: string = '';
  passwordToggle() {
    this.hide = !this.hide;
  }
  login() {
    this.auth.signInWithEmailAndPassword;
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
    if ($('.email').val()) {
      let email = $('.email').val();
      this.auth
        .sendPasswordResetEmail(email as string)
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
      $('.goToDash').css('display', 'none');
    }
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        $('.goToDash').css('display', 'none');
      } else if (user) {
        window.location.href = '/#/admin';
      }
    });
    $(document).on('keypress', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        let email = $('.email').val();
        let password = $('.password').val();
        this.auth
          .signInWithEmailAndPassword(email as string, password as string)
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
        $('.goToDash').show();
        $('.signInButton').hide();
        // this.router.navigateByUrl('console/dashboard');
      } else {
        return;
      }
    });
    $('form.login').on('submit', (event) => {
      event.preventDefault();
      let email = $('.email').val();
      let password = $('.password').val();
      this.auth
        .signInWithEmailAndPassword(email as string, password as string)
        .then(async (user) => {
          console.log(user);

          if (!user.user?.emailVerified) {
            (await this.auth.currentUser)?.sendEmailVerification().then(() => {
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
        });
    });
  }
}
