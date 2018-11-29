import { Item } from './Item';

export interface Category extends Item {
  items?: Item[];
}
