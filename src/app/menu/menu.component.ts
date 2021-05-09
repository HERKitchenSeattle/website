import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import $ from 'jquery';

import { Meta, Title } from '@angular/platform-browser';

interface cookies {
  name: string;
  desc?: string;
  price?: string;
  fileName?: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private titleService: Title,
    private router: Router,
    public meta: Meta
  ) {
    this.titleService.setTitle(`Menu - HER Kitchen Seattle`);
    this.meta.updateTag({
      name: 'description',
      content:
        "HER Kitchen's vegan and gluten free menu. Cookies, muffins, brownies, bars, and more!",
    });

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        $('.spinner').show();
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        $('.spinner').hide();
        $('.main').show();
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        $('.spinner').hide();
        $('.main').show();
        // Present error to user
        console.log(event.error);
      }
    });
  }
  scroll(el: string) {
    let id = document.getElementById(el);
    id?.scrollIntoView({ behavior: 'smooth' });
  }
  loading = true;
  openDialog(index: number): void {
    document.getElementById('item-' + index)?.classList.toggle('hidden');
  }
  panelOpenState = false;
  cookiesFolder = '../../assets/images/cookies';
  classicCookies: Array<cookies> = [
    {
      name: 'Black Forest',
      desc: 'Chocolate and bing cherries',
      price: '$2.50',
    },
    {
      name: 'BSS',
      desc: 'Black sesame seeds',
      price: '$2.50',
    },
    {
      name: 'bLIMEy',
      desc: 'Lime and sweet sage',
      price: '$2.50',
    },
    {
      name: 'Tropical Twist',
      desc: 'Coconut, lemon and pineapple',
      price: '$2.50',
    },
    {
      name: 'Cool Mint',
      desc: 'Chocolate and peppermint',
      price: '$2.50',
    },
    {
      name: "Let's Date",
      desc: 'Date sweetened only with dates',
      price: '$2.50',
      fileName: 'Date',
    },
    {
      name: 'Java',
      desc: 'Coffee and cardamom',
      price: '$2.50',
    },
    {
      name: 'Love',
      desc: 'Beet and raspberry',
      price: '$2.50',
    },
    {
      name: "More S'More",
      desc: 'Gingerbread and marshmellow',
      price: '$3.50',
    },
    {
      name: 'Nana Chips',
      desc: 'Banana',
      price: '$2.50',
    },
    {
      name: 'Old Fashioned',
      desc: 'Oatmeal and raisins',
      price: '$2.50',
    },
    {
      name: 'PB&S',
      desc: 'Peanut butter and salt',
      price: '$2.50',
    },
    {
      name: 'Pie O Pie',
      desc: 'Apple and cinnamon',
      price: '$2.50',
    },
    {
      name: 'Spicy',
      desc: 'Chai tea',
      price: '$2.50',
    },
    {
      name: 'Autumn',
      desc: 'Pumpkin seeds and cranberries',
      price: '$2.50',
    },
    {
      name: 'Zen',
      desc: 'Matcha and pistachio',
      price: '$2.50',
    },
    {
      name: 'Zesty',
      desc: 'White chocolate and orange',
      price: '$2.50',
    },
  ];
  shortbreadCookies: cookies[] = [
    {
      name: 'Beet',
      price: '$2.00',
    },
    {
      name: 'BSS',
    },
    {
      name: 'Lemon',
    },
    {
      name: 'Matcha',
    },
    {
      name: 'Orange',
    },
  ];
  columns = 4;
  closeDialog(index: number) {
    document.getElementById('item-' + index)?.classList.toggle('hidden');
  }
  ngOnInit(): void {
    for (let cookie of this.classicCookies) {
      if (!cookie.fileName) {
        cookie.fileName = cookie.name;
      }
      if (!cookie.price) {
        cookie.price = '$2.50';
      }
    }
    for (let cookie of this.shortbreadCookies) {
      if (!cookie.fileName) {
        cookie.fileName = cookie.name;
      }
      if (!cookie.price) {
        cookie.price = '$2.00';
      }
    }

    this.loading = false;
  }
}
