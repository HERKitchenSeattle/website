/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {}
  product: Product | undefined;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('name')!;
  }
}
