import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle(`Page not found - HER Kitchen Seattle}`);
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }
  @ViewChild('panel', { read: ElementRef }) public panel!: ElementRef<any>;
  scrollToTop() {
    this.panel.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start',
    });
  }
}
