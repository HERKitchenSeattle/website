import { Directive, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img',
})
export class LazyLoadImagesDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;
    if (supports && !nativeElement.hasAttribute('loading')) {
      nativeElement.setAttribute('loading', 'lazy');
    }
    if (!supports) {
      interval(5000).subscribe(() => {
        console.log('if you see this, you should update your browser');
      });
      console.log('if you see this, you should update your browser');
    }
  }
}
