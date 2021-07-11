import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  itemId: string | null = '';
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params): any => {
        this.itemId = params.get('id');
      })
    );
    console.log(this.itemId);
    class EpicElement extends HTMLParagraphElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
    }
    customElements.define('epic-element', EpicElement, { extends: 'p' });
  }
}
