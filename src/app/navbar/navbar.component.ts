import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';

import $ from 'jquery';
import { first } from 'rxjs/operators';
import { DialogComponent } from './dialog/dialog.component';

interface Pages {
  name: string;
  tooltip: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog, private auth: AngularFireAuth) {
    if (this.auth.authState.pipe(first()).toPromise()) {
      this.signedIn = true;
    }
  }
  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }
  signedIn: boolean = false;
  openDialog() {
    // const dialogRef = this.dialog.open(NavbarDialog);

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this.dialog.open(DialogComponent);
  }
  link = 'https://herkitchenseattle.web.app';
  window = document.defaultView;
  loading = true;
  share() {
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out this bakery!',
          text: 'Check out this vegan and gluten free bakery!',
          url: 'https://herkitchenseattle.com',
        })
        .then(() => {
          console.log('Succesfully shared!');
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }
  pages: Array<Pages> = [
    {
      name: 'About',
      tooltip: 'About us',
    },
    {
      name: 'Menu',
      tooltip: 'HER Kitchen Menu',
    },
    {
      name: 'Events',
      tooltip: 'Where to find us',
    },
    {
      name: 'Contact',
      tooltip: 'Contact us',
    },
  ];

  async ngOnInit() {
    const user = await this.isLoggedIn();
    if (user) {
      this.signedIn = true;
      $('.profile-stuff').css('display', 'block');
    } else {
      this.signedIn = false;
      $('.profile-stuff').css('display', 'none');
    }
    this.auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.signedIn = true;
          $('.profile-stuff').css('display', 'block');
        } else {
          this.signedIn = false;
          $('.profile-stuff').css('display', 'none');
        }
      },
      (err) => {
        this.signedIn = false;
        console.log(err);

        $('.profile-stuff').css('display', 'none');
      }
    );
  }
}
