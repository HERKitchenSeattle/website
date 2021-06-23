import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { DialogComponent } from './dialog/dialog.component';
import { pages } from './pages';
import { MDCRipple } from '@material/ripple';
import { ViewportScroller } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    public dialog: MatDialog,
    private auth: AngularFireAuth,
    private viewportScroller: ViewportScroller
  ) {
    if (this.auth.authState.pipe(first()).toPromise()) {
      this.signedIn = true;
    }
  }
  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }
  signedIn: boolean = false;
  openDialog() {
    this.dialog.open(DialogComponent);
  }
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
  pages = pages;
  debounce(fn: Function) {
    let frame: any;

    return (...params: any[]) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
    };
  }
  scrollToTop() {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  storeScroll() {
    if (typeof document !== undefined)
      document.body.dataset.scroll = window.scrollY.toString();
  }
  /**
   * @param el The element to scroll into view
   */
  async scroll(el: string) {
    // let id = document.getElementById(el);
    // id?.scrollIntoView({ behavior: 'smooth' });
    this.viewportScroller.scrollToAnchor(el);
    // this.viewportScroller.scrollToPosition([
    //   0,
    //   this.viewportScroller.getScrollPosition()[1] + 80,
    // ]
  }
  console = console;
  async ngOnInit() {
    this.document.querySelectorAll('.navbar-link > span').forEach((el) => {
      MDCRipple.attachTo(el);
    });
    this.document.addEventListener('scroll', this.debounce(this.storeScroll), {
      passive: true,
    });
    this.storeScroll();
    const user = await this.isLoggedIn();
    if (user) {
      this.signedIn = true;
      this.document.getElementById('profile-stuff')!.style.display = 'block';
    } else {
      this.signedIn = false;
      this.document.getElementById('profile-stuff')!.style.display = 'none';
    }
    this.auth.onAuthStateChanged(
      async (user) => {
        const alsoUser = await this.isLoggedIn();
        if (user && alsoUser) {
          this.signedIn = true;
          this.document.getElementById('profile-stuff')!.style.display =
            'block';
        } else {
          this.signedIn = false;
          this.document.getElementById('profile-stuff')!.style.display = 'none';
        }
      },
      (err) => {
        this.signedIn = false;
        console.log(err);

        this.document.getElementById('profile-stuff')!.style.display = 'none';
      }
    );
  }
}
