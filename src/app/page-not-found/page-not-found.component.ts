import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle(`Page not found - HER Kitchen Seattle}`);
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }
  // @ts-ignore
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
  scrollToTop() {
    this.panel.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start',
    });
  }
  ngOnInit(): void {}
}
