import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  darkMode = true;
  constructor(private viewportScroller: ViewportScroller) {}
  year = new Date().getFullYear();
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  toggleTheme() {
    if (window.localStorage.getItem('theme') == 'light') {
      this.darkMode = false;
    } else if (window.localStorage.getItem('theme') == 'dark') {
      this.darkMode = true;
    } else if (!window.localStorage.getItem('theme')) {
      this.darkMode = true;
    }
    if (
      !window.localStorage.getItem('theme') ||
      window.localStorage.getItem('theme') == 'dark'
    ) {
      window.localStorage.setItem('theme', 'light');
    } else if (window.localStorage.getItem('theme') == 'light') {
      window.localStorage.setItem('theme', 'dark');
    }
  }
  ngOnInit(): void {
    if (window.localStorage.getItem('theme') == 'light') {
      this.darkMode = false;
    } else if (window.localStorage.getItem('theme') == 'dark') {
      this.darkMode = true;
    } else if (!window.localStorage.getItem('theme')) {
      this.darkMode = true;
    }
  }
}
