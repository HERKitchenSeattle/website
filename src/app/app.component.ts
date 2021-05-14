import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import $ from 'jquery';
import { interval } from 'rxjs';
import { UpdateService } from './update.service';

@Component({
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
    if (!window.localStorage.getItem('theme')) {
      $('*').attr('theme', 'dark');
    } else if (window.localStorage.getItem('theme') == 'light') {
      $('*').attr('theme', 'light');
    } else if (window.localStorage.getItem('theme') == 'dark') {
      $('*').attr('theme', 'dark');
    }
    interval(300).subscribe(() => {
      // console.log('storage was changed');

      if (!window.localStorage.getItem('theme')) {
        $('*').attr('theme', 'dark');
      } else if (window.localStorage.getItem('theme') == 'light') {
        $('*').attr('theme', 'light');
      } else if (window.localStorage.getItem('theme') == 'dark') {
        $('*').attr('theme', 'dark');
      }
    });
  }

  ngOnInit() {
    window.localStorage.setItem('xm', new Date().getTime().toString());
  }
}
