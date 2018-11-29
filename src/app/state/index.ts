import { createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromReducer from './reducer';

// export type State = fromReducer.State;
export interface State {
  category: fromReducer.State;
}

export const reducer: ActionReducerMap<State> = {
  category: fromReducer.appReducer
};

export const getCategoryState = (state: State) => state.category;

export const getCategories = createSelector(
  getCategoryState,
  fromReducer.categories
);

export const getSelectedCategory = createSelector(
  getCategoryState,
  fromReducer.selectedCategory
);

export const getCategoryItems = createSelector(
  getCategoryState,
  fromReducer.items
);

export const getCategoriesList = createSelector(
  getCategories,
  getSelectedCategory,
  getCategoryItems,
  (categories, selectedCategory, items) => {
    return Object.keys(categories).map(key => {
      const _items = categories[key].type === selectedCategory ? items : [];
      return {
        ...categories[key],
        items: _items
      };
    });
  }
);
