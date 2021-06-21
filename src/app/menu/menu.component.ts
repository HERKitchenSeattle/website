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
  constructor(private titleService: Title, public meta: Meta) {
    this.titleService.setTitle(`Menu - HER Kitchen Seattle`);
    this.meta.updateTag({
      name: 'description',
      content:
        "HER Kitchen's vegan and gluten free menu. Cookies, muffins, brownies, bars, and more!",
    });
  }
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
  scroll(el: string) {
    let id = document.getElementById(el);
    id?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
    fillProduct();
  }
}
