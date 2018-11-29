import * as actions from './actions';
import { Category } from '../models/Category';
import { categories as _categories } from '../models/Categories';
import { Item } from '../models/Item';
import { CategoriesType } from '../models/CategoriesType';
import { indexedItems } from '../models/items';

export interface State {
  categories: {
    [key: string]: Category;
  };
  selectedCategory: number;
  selectedCategoryItem?: Item;
  items: Item[];
}

const initState: State = {
  categories: {
    ..._categories
  },
  selectedCategory: CategoriesType.Components,
  items: indexedItems[CategoriesType.Components]
};

export function appReducer(state: State = initState, action: actions.All) {
  switch (action.type) {
    case actions.UPDATE_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
        items: indexedItems[action.payload]
      };

    case actions.UPDATE_ITEMS:
      const type = action.payload || state.selectedCategory;
      return {
        ...state,
        items: indexedItems[type]
      };

    case actions.GET_SELECTED_CATEGORY_ITEM:
      return {
        ...state,
        selectedCategoryItem: action.payload
      };

    default:
      return state;
  }
}

export const categories = (state: State) => state.categories;
export const selectedCategory = (state: State) => state.selectedCategory;
export const items = (state: State) => state.items;
