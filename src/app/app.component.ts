import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HER Kitchen';
  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        Promise.all(
          Array.from(document.images)
            .filter((img) => !img.complete)
            .map(
              (img) =>
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
          Array.from(document.images)
            .filter((img) => !img.complete)
            .map(
              (img) =>
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
    function detectKey(key: string, callback: Function) {
      document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() == key) {
          callback();
          return true;
        } else {
          return false;
        }
      });
    }
    window.onload = () => {
      Promise.all(
        Array.from(document.images)
          .filter((img) => !img.complete)
          .map(
            (img) =>
              new Promise((resolve) => {
                img.onload = img.onerror = resolve;
              })
          )
      ).then(() => {
        this.loading = false;
      });
    };
    detectKey('c', () => {
      (
        detectKey('o', () => {
          (
            detectKey('o', () => {
              (
                detectKey('k', () => {
                  (
                    detectKey('i', () => {
                      (
                        detectKey('e', () => {
                          console.log('test');
                          return;
                        }) as any
                      ).then((res: boolean) => {
                        document.removeAllListeners!();
                      });
                    }) as any
                  ).then((res: boolean) => {
                    document.removeAllListeners!();
                  });
                }) as any
              ).then((res: boolean) => {
                document.removeAllListeners!();
              });
            }) as any
          ).then((res: boolean) => {
            document.removeAllListeners!();
          });
        }) as any
      ).then((res: boolean) => {
        document.removeAllListeners!();
      });
    });
  }
}
