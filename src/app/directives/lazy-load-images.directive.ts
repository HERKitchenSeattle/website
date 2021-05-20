import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[src]',
})
export class LazyLoadImagesDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;
    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
