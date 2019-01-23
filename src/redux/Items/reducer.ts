import reduceReducers from 'reduce-reducers';
import { actionTypes } from './action-types';
import { IItem, IItemsById, IItemsReducer } from './types';
import { loadingReducerFor } from '../Loading';
import { IAction } from '../types';
import { Reducer, AnyAction } from 'redux';
import { AxiosResponse } from 'axios';

const initialState: IItemsReducer = {
  itemsById: {},
  page: 1,
  pageSize: 30,
  currentItem: {} as IItem
};

const itemsReducer: Reducer<IItemsReducer, AnyAction> = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case actionTypes.GET_ALL_FULFILLED: {
      // allows us to work with the garbage API
      const results = action.payload.flatMap(
        (payload: AxiosResponse) => payload.data
      );
      // transform to a better data structure to get O(n) lookups
      const itemsById = results.reduce(
        (result: IItemsById, item: IItem) => {
          result[item.id] = item;
          return result;
        },
        {} as IItemsById
      );

      return { ...state, itemsById };
    }
    case actionTypes.SET_PAGE: {
      const { page } = action.payload;

      return { ...state, page };
    }
    case actionTypes.SET_CURRENT_ITEM_FULFILLED: {
      const { data } = action.payload;

      return { ...state, currentItem: data };
    }
    default: {
      return state;
    }
  }
};

export const reducer: Reducer = reduceReducers<IItemsReducer>(
  itemsReducer,
  loadingReducerFor('ITEMS')
);
