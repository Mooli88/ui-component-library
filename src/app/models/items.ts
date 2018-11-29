import { Item } from './Item';
import { categories } from './Categories';
import { CategoriesType } from './CategoriesType';

interface Items {
  [key: string]: Item;
}

interface CategoriseItems {
  [key: string]: Item[];
}

const url = './docs/';

export const items: Items = {
  checkbox: {
    name: 'checkbox',
    url: `${url}/components/checkbox`,
    type: CategoriesType.Components,
  },
  inputs: {
    name: 'input',
    url: `${url}/components/input`,
    type: CategoriesType.Components,
  },
  button: {
    name: 'button',
    url: `${url}/components/button`,
    type: CategoriesType.Components,
  },
  select: {
    name: 'select',
    url: `${url}/components/select`,
    type: CategoriesType.Components,
  },
  radioButtons: {
    name: 'radio-buttons',
    url: `${url}/components/radio-buttons`,
    type: CategoriesType.Components,
  },
  textarea: {
    name: 'textarea',
    url: `${url}/components/textarea`,
    type: CategoriesType.Components,
  },
  card: {
    name: 'card',
    url: `${url}/content/input`,
    type: CategoriesType.Content,
  },
  hero: {
    name: 'hero',
    url: `${url}/content/button`,
    type: CategoriesType.Content,
  },
  logo: {
    name: 'logo',
    url: `${url}/content/select`,
    type: CategoriesType.Content,
  },
};

Object.keys(items).forEach(key => {
  Object.freeze(items[key]);
});

Object.freeze(items);

export const itemsList: Item[] = Object.keys(items).map(key => {
  return items[key];
});

export const indexedItems: CategoriseItems = {};

Object.keys(categories).forEach(key => {
  const type: number = categories[key].type;

  indexedItems[type] = itemsList.filter(item => {
    return item.type === categories[key].type;
  });
});

console.log(indexedItems);
