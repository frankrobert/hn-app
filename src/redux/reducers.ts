import { combineReducers } from 'redux';
import { IState } from './types';
import { reducer as items } from "./Items/reducer";
import { reducer as comments } from './Comments/reducer';

const rootReducer = combineReducers<IState>({
  items,
  comments
});

export { rootReducer };
