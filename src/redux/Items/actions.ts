import { actionTypes } from './action-types';
import { AnyAction, Dispatch } from 'redux';
import { CRUDApi } from '../../utils/api';
import { AxiosResponse } from 'axios';
import { IState } from '../types';
import { IItem } from './types';

CRUDApi.createEntity({ name: 'item' });

export const getAllStoriesByType = (type: string, page: number = 1) => async (
  dispatch: Dispatch,
  getState: Function
) => {
  const store: IState = getState();
  const pageSize = store.items.pageSize;
  const result: AxiosResponse = await CRUDApi.endpoints[
    `${type.toUpperCase()}_STORIES`
  ].GET_ALL();
  const items = result.data
    .filter((item: IItem) => !item.deleted && !item.dead)
    .slice(page * pageSize - pageSize, page * pageSize);
  const itemPromises = items.map((item: number) =>
    CRUDApi.endpoints.item.getOne(item)
  );

  return dispatch({
    type: actionTypes.GET_ALL,
    payload: Promise.all(itemPromises),
  });
};

export const setPage = (page: number) => {
  return {
    type: actionTypes.SET_PAGE,
    payload: { page },
  };
};

export const setCurrentItem = (id: number | null) => (
  dispatch: Dispatch,
  getState: Function
) => {
  const store = getState();
  const itemsById = store.items.itemsById;
  let currentItemPromise;

  if (!id) {
    currentItemPromise = new Promise((resolve) => resolve({ data: null }));
  } else if (!itemsById[id]) {
    currentItemPromise = CRUDApi.endpoints.item.getOne(id);
  } else {
    currentItemPromise = new Promise((resolve) =>
      resolve({ data: itemsById[id] })
    );
  }

  return dispatch({
    type: actionTypes.SET_CURRENT_ITEM,
    payload: currentItemPromise,
  });
};
