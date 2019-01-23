import { createSelector } from 'reselect';
import { IState } from '../types';
import { IItem } from '../Items/types';

const commentsStoreSelector = (state: IState) => state.comments;
const commentsByIdSelector = (state: IState) => state.comments.commentsById;

export const commentsSelector = createSelector(
  [commentsByIdSelector],
  (commentsById) => {
    const values = Object.values(commentsById);
    return (values as any).flatMap((value: IItem) => value);
  }
);

export const isLoadingSelector = createSelector(
  [commentsStoreSelector],
  ({ isLoading }): boolean => isLoading as boolean
);
