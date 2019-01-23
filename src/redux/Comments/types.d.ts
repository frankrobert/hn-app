import { IItem } from '../Items/types';

export interface ICommentsById {
  [key: string]: IItem[];
}

export interface ICommentsReducer {
  commentsById: ICommentsById;
  isLoading?: boolean;
}
