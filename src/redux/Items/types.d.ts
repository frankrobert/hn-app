
export interface IItem {
  id: number;
  deleted?: boolean;
  type: string;
  by: string;
  time: number;
  text?: string;
  dead: boolean;
  parent?: number;
  poll?: number;
  kids: number[];
  url: string;
  score: number;
  title: string;
  descendants: number;
  parts?: number[];
}

export interface IItemsById {
  [key: string]: IItem;
}

export interface IItemsReducer {
  itemsById: IItemsById;
  isLoading?: boolean;
  page: number;
  pageSize: number;
  currentItem: IItem;
}
