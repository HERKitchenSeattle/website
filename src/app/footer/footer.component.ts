import { ViewportScroller } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { VERSION as fireVersion } from '@angular/fire';
import epic from 'bootstrap/js/dist/base-component';
import { VERSION as epicer } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private viewportScroller: ViewportScroller) {
    if (!window.localStorage.getItem('theme')) {
      window.localStorage.setItem('theme', 'light');
      this.darkMode = false;
    } else if (window.localStorage.getItem('theme') === 'light') {
      this.darkMode = false;
    } else if (window.localStorage.getItem('theme') === 'dark') {
      this.darkMode = true;
    }
  }
  checkTheme(): void {
    if (!window.localStorage.getItem('theme')) {
      window.localStorage.setItem('theme', 'light');
      // this.darkMode = false;
    } else if (window.localStorage.getItem('theme') === 'light') {
      // this.darkMode = false;
    } else if (window.localStorage.getItem('theme') === 'dark') {
      // this.darkMode = true;
    }
    // this.darkMode = !this.darkMode;
  }
  year = new Date().getFullYear().toString();
  scrollToTop() {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  darkMode = false;
  ng_version = VERSION;
  ng_material_version = epicer;
  ng_fire_version = fireVersion;
  bootstrap_version = epic.VERSION;
}
