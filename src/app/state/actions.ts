import { Action } from '@ngrx/store';
import { Item } from '../models/Item';

// export const GET_CATEGORIES = '[Categories] Get';
// export const GET_CATEGORY_ITEMS = '[Categories Items] Get';
export const UPDATE_SELECTED_CATEGORY = '[Categories Selected] Update';
export const UPDATE_ITEMS = '[Categories Items] Update';
export const GET_SELECTED_CATEGORY_ITEM = '[Categories Selected Items] Get';

export class UpdateSelectedCategory implements Action {
  readonly type = UPDATE_SELECTED_CATEGORY;

  constructor(public payload: number) {}
}

export class UpdateItems implements Action {
  readonly type = UPDATE_ITEMS;

  constructor(public payload: number) {}
}

export class GetSelectedCategoryItem implements Action {
  readonly type = GET_SELECTED_CATEGORY_ITEM;

  constructor(public payload: Item) {}
}

export type All =
  | UpdateSelectedCategory
  | UpdateItems
  | GetSelectedCategoryItem;
