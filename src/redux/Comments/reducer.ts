import reduceReducers from 'reduce-reducers';
import { actionTypes } from './action-types';
import { ICommentsById, ICommentsReducer } from './types';
import { IItem } from '../Items/types';
import { loadingReducerFor } from '../Loading';
import { IAction } from '../types';
import { Reducer, AnyAction } from 'redux';

const initialState: ICommentsReducer = {
  commentsById: {},
};

const commentsReducer: Reducer<ICommentsReducer, AnyAction> = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case actionTypes.GET_ALL_FULFILLED: {
      const { data } = action.payload;

      // transform to a better data structure to get O(n) lookups
      const commentsById = data.reduce(
        (result: ICommentsById, comment: IItem) => {
          if (!comment.parent) {
            return result;
          }

          if (!result[comment.parent]) {
            result[comment.parent] = [];
          }

          result[comment.parent].push(comment);
          return result;
        },
        {} as ICommentsById
      );

      return { ...state, commentsById };
    }
    default: {
      return state;
    }
  }
};

export const reducer: Reducer = reduceReducers<ICommentsReducer>(
  commentsReducer,
  loadingReducerFor('COMMENTS')
);
