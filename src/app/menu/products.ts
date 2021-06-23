export interface Product {
  name: string;
  desc?: string;
  price?: string;
  fileName?: string;
  image?: boolean;
}

export function fillProduct() {
  for (let cookie of classicCookies) {
    if (!cookie.fileName) {
      cookie.fileName = cookie.name;
    }
    if (!cookie.price) {
      cookie.price = '$3.50';
    }
  }
  for (let bar of oatBars) {
    if (!bar.fileName) {
      bar.fileName = bar.name;
    }
    if (!bar.price) {
      bar.price = '$3.50';
    }
    if (bar.image != false) {
      bar.image = true;
    }
  }
  for (let cookie of shortbreadCookies) {
    if (!cookie.fileName) {
      cookie.fileName = cookie.name;
    }
    if (!cookie.price) {
      cookie.price = '$2.00';
    }
  }
  for (let bar of dessertBars) {
    if (!bar.fileName) {
      bar.fileName = bar.name;
    }
    if (!bar.price) {
      bar.price = '$3.50';
    }
  }
}
export const classicCookies: Product[] = [
  {
    name: 'Black Forest',
    desc: 'Chocolate and bing cherries',
  },
  {
    name: 'BSS',
    desc: 'Black sesame seeds',
  },
  {
    name: 'bLIMEy',
    desc: 'Lime and sweet sage',
  },
  {
    name: 'Tropical Twist',
    desc: 'Coconut, lemon and pineapple',
  },
  {
    name: 'Cool Mint',
    desc: 'Chocolate and peppermint',
  },
  {
    name: "Let's Date",
    desc: 'Date sweetened only with dates',

    fileName: 'Date',
  },
  {
    name: 'Java',
    desc: 'Coffee and cardamom',
  },
  {
    name: 'Love',
    desc: 'Beet and raspberry',
  },
  {
    name: "More S'More",
    desc: 'Gingerbread and marshmellow',
  },
  {
    name: 'Nana Chips',
    desc: 'Banana',
  },
  {
    name: 'Old Fashioned',
    desc: 'Oatmeal and raisins',
  },
  {
    name: 'PB&S',
    desc: 'Peanut butter and salt',
  },
  {
    name: 'Pie O Pie',
    desc: 'Apple and cinnamon',
  },
  {
    name: 'Spicy',
    desc: 'Chai tea',
  },
  {
    name: 'Autumn',
    desc: 'Pumpkin seeds and cranberries',
  },
  {
    name: 'Zen',
    desc: 'Matcha and pistachio',
  },
  {
    name: 'Zesty',
    desc: 'White chocolate and orange',
  },
];
export const shortbreadCookies: Product[] = [
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
export const oatBars: Product[] = [
  {
    name: 'Oat',
  },
  {
    name: 'Chocolate',
  },
  {
    name: 'Chocolate Chip',
  },
  {
    name: 'Coconut',
    image: false,
  },
  {
    name: 'Matcha',
  },
];
export const muffins: Product[] = [
  {
    name: 'Muffins',
  },
];
export const dessertBars: Product[] = [
  {
    name: 'Lemon Bars',
    fileName: 'Lemon Bar',
  },
  {
    name: 'Brownie Decadence',
    price: '$5.00',
  },
  {
    name: 'Blueberry Lemon Bars',
  },
  {
    name: 'Raspberry Lemon Bars',
    fileName: 'Raspberry Lemon Bar',
  },
  {
    name: 'PB Brownies',
  },
];
