import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  shortbreadCookies,
  classicCookies,
  fillProduct,
  muffins,
  oatBars,
  dessertBars,
} from './products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  /**
   * @param titleService The service that changes the title
   * @param meta The service that changes meta tags.
   */
  constructor(
    private titleService: Title,
    public meta: Meta,
    private viewportScroller: ViewportScroller
  ) {
    this.titleService.setTitle(`Menu - HER Kitchen Seattle`);
    this.meta.updateTag({
      name: 'description',
      content:
        "HER Kitchen's vegan and gluten free menu. Cookies, muffins, brownies, bars, and more!",
    });
  }
  console = console;
  loading: boolean = true;
  panelOpenState = false;
  cookiesFolder = '../../assets/images/cookies';
  classicCookies = classicCookies;
  shortbreadCookies = shortbreadCookies;
  oatBars = oatBars;
  muffins = muffins;
  dessertBars = dessertBars;

  /**
   * @param el The element to scroll into view
   */
  async scroll(el: string) {
    // let id = document.getElementById(el);
    // id?.scrollIntoView({ behavior: 'smooth' });
    this.viewportScroller.scrollToAnchor(el);
    // this.viewportScroller.scrollToPosition([
    //   0,
    //   this.viewportScroller.getScrollPosition()[1] + 80,
    // ]);
  }

  ngOnInit(): void {
    fillProduct();
  }
}
