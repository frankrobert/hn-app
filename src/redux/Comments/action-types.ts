import { createActionTypes } from '../action-type-creator';

enum COMMENTS_ACTIONS {
  GET_ALL = 'GET_ALL',
  GET_ONE = 'GET_ONE',
}

export const actionTypes = createActionTypes('COMMENTS', [
  COMMENTS_ACTIONS.GET_ALL,
  COMMENTS_ACTIONS.GET_ONE,
]);
