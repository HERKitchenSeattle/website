import { ViewportScroller } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HER Kitchen';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
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
