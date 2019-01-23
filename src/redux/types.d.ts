import { AnyAction } from 'redux';
import { IItemsReducer } from './Items/types';
import { ICommentsReducer } from './Comments/types';

export interface IState {
  items: IItemsReducer;
  comments: ICommentsReducer;
}

interface ISyncAction<T> extends AnyAction {
  type: string;
  payload?: any;
}

type IAsyncAction<T> = () => Promise<ISyncAction<T>>;

export type IAction = ISyncAction | IAsyncAction;
