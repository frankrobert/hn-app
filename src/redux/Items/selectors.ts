import { createSelector } from 'reselect';
import { IState } from '../types';

const itemsStoreSelector = (state: IState) => state.items;
const itemsByIdSelector = (state: IState) => state.items.itemsById;
export const currentItemSelector = (state: IState) => state.items.currentItem;
export const pageSelector = (state: IState) => state.items.page;

export const itemsSelector = createSelector(
  [itemsByIdSelector],
  (itemsById) => {
    return Object.values(itemsById);
  }
);

export const isLoadingSelector = createSelector(
  [itemsStoreSelector],
  ({ isLoading }): boolean => isLoading as boolean
);
