import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { UpdateService } from './update.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'her-kitchen',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HER Kitchen';
  loading!: boolean;
  constructor(private sw: UpdateService, router: Router) {
    document.addEventListener('itemInserted', () => {}, false);
    this.loading = false;
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
    this.sw.checkForUpdates();
  }

  ngOnInit() {
    if (typeof window !== undefined)
      window.localStorage.setItem('xm', new Date().getTime().toString());
  }
}
