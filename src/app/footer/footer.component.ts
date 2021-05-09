import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}
  year = new Date().getFullYear();
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit(): void {}
}
