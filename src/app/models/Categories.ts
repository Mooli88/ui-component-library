import { CategoriesType } from './CategoriesType';
// import { itemsList } from './items';
import { Category } from './Category';

export const categories = {
  gettingStatred: {
    name: 'Getting Started',
    type: CategoriesType.GettingStatred,
    url: 'docs/getting-started',
  },
  components: {
    name: 'Components',
    type: CategoriesType.Components,
    url: './docs/components',
  },
  content: {
    name: 'Content',
    type: CategoriesType.Content,
    url: '/docs/content',
  },
  layout: {
    name: 'Layout',
    type: CategoriesType.Layout,
    url: '/docs',
  },
  utilities: {
    name: 'Utilities',
    type: CategoriesType.Utilities,
    url: '/docs',
  },
};

export const categoriesList: Category[] = Object.keys(categories).map(key => {
  return categories[key];
});

// export const categories = {};

// const _url = '/docs';

// Object.keys(CategoriesType).forEach(key => {
//   let url = _url;

//   if (isNaN(Number(key))) {
//     categories[key] = {};

//     categories[key].items = itemsList.filter(item => {
//       return item.type === CategoriesType[key];
//     });

//     url = categories[key].items.length ? categories[key].items[0].url : _url;

//     categories[key] = {
//       ...categories[key],
//       name: key,
//       type: CategoriesType[key],
//       url: url,
//     };
//   }
// });

// export const categoriesList: Category[] = Object.keys(categories).map(key => {
//   return categories[key];
// });
