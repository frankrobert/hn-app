import * as React from 'react';
import get from 'lodash/get';
import { IAction, IState } from '../types';
import { Reducer } from 'redux';

const isInAsyncState = ({ type }: IAction, asyncState: string): boolean => {
  return type.endsWith(`_${asyncState}`) ? type : '';
};

const handlePending = ({ state, action }: IAction): Partial<IState> => {
  return {
    ...state,
    error: '',
    ...setLoadingState({ state, action, isLoading: true }),
  };
};
const handleRejected = ({ state, action }: IAction): Partial<IState> => {
  const error = get(action, 'payload.response.data.error', true);

  if (!error) {
    // tslint:disable-next-line
    console.warn('Missing Error Handler: ', { action: action.payload });
  }

  return {
    ...state,
    error,
    ...setLoadingState({ state, action, isLoading: false }),
  };
};

const handleFulfilled = ({ state, action }: IAction): Partial<IState> => {
  return {
    ...state,
    ...setLoadingState({ state, action, isLoading: false }),
  };
};

const setLoadingState = ({
  state,
  action,
  isLoading,
}: IAction): { isLoading: boolean } => {
  return { isLoading };
};

type IReducerFor = (prefix: string) => Reducer;

export const loadingReducerFor: IReducerFor = (prefix: string): Reducer => {
  return (state = {}, action: IAction) => {
    if (!action.type.includes(prefix)) {
      return state;
    }

    switch (action.type) {
      case isInAsyncState(action, 'PENDING'): {
        return handlePending({ state, action });
      }
      case isInAsyncState(action, 'FULFILLED'): {
        return handleFulfilled({ state, action });
      }
      case isInAsyncState(action, 'REJECTED'): {
        return handleRejected({ state, action });
      }
      default: {
        return state;
      }
    }
  };
};
