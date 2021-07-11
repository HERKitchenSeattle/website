import { ViewportScroller } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
// import { fader } from './route-animations';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  Router,
  NavigationStart,
  NavigationEnd,
  RouterOutlet,
} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CookieComponent } from './easter-eggs/cookie/cookie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [fader],
})
export class AppComponent implements OnInit {
  title = 'HER Kitchen';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private viewportScroller: ViewportScroller,
    private dialog: MatDialog,
    private _snackbar: MatSnackBar
  ) {
    if (typeof window !== undefined) {
      if (!window.localStorage.getItem('acceptCookies')) {
        let cookieSnackbar = this._snackbar.open(
          'This site uses cookies',
          'Accept'
        );
        cookieSnackbar.afterDismissed().subscribe(() => {
          window.localStorage.setItem('acceptCookies', 'true');
        });
      }
    }
    this.viewportScroller.setOffset([0, 100]);
    this.viewportScroller.setHistoryScrollRestoration('manual');
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        Promise.all(
          Array.from(this.document.images)
            .filter((img: any) => !img.complete)
            .map(
              (img: any) =>
                new Promise((resolve) => {
                  img.onload = img.onerror = resolve;
                })
            )
        ).then(() => {
          this.loading = false;
        });
      }
      if (event instanceof NavigationEnd) {
        this.loading = true;
        Promise.all(
          Array.from(this.document.images)
            .filter((img: any) => !img.complete)
            .map(
              (img: any) =>
                new Promise((resolve) => {
                  img.onload = img.onerror = resolve;
                })
            )
        ).then(() => {
          this.loading = false;
        });
      }
    });
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
  loading: boolean = true;
  ngOnInit() {
    window.onload = () => {
      Promise.all(
        Array.from(this.document.images)
          .filter((img: any) => !img.complete)
          .map(
            (img: any) =>
              new Promise((resolve) => {
                img.onload = img.onerror = resolve;
              })
          )
      ).then(() => {
        this.loading = false;
      });
    };
    addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'c') {
        addEventListener('keydown', (e) => {
          if (e.key.toLowerCase() === 'o') {
            addEventListener('keydown', (e) => {
              if (e.key.toLowerCase() === 'o') {
                addEventListener('keydown', (e) => {
                  if (e.key.toLowerCase() === 'k') {
                    addEventListener('keydown', (e) => {
                      if (e.key.toLowerCase() === 'i') {
                        addEventListener('keydown', (e) => {
                          if (e.key.toLowerCase() === 'e') {
                            console.log('cooookie');
                            this.dialog.open(CookieComponent);
                            // @ts-ignore
                            window.removeAllListeners('keydown');
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
}
