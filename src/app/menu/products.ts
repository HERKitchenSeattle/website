import { Product } from '../product';
export function getProduct(product: string) {
  for (let cookie of classicCookies) {
    if (!cookie.fileName) {
      cookie.fileName = cookie.name;
    }
    if (!cookie.price) {
      cookie.price = '$2.50';
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
  if (
    product === 'shortbreadCookies' ||
    'classicCookies' ||
    'oatBars' ||
    'muffins'
  ) {
    return eval(product);
  }
}
const classicCookies: Product[] = [
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
const shortbreadCookies: Product[] = [
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
const oatBars: Product[] = [
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
const muffins: Product[] = [
  {
    name: 'Muffins',
  },
];
