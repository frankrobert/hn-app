import { actionTypes } from './action-types';
import { Dispatch } from 'redux';
import { CRUDApi } from '../../utils/api';
import { isEmpty } from 'lodash';
import { IItem } from '../Items/types';

export const getAllById = (ids: number[] | null) => async (dispatch: Dispatch) => {
  if (!ids) {
    return dispatch({
      type: actionTypes.GET_ALL,
      payload: new Promise((resolve) => resolve({ data: [] })),
    });
  }

  const itemPromises = ids.map((id: number) =>
    CRUDApi.endpoints.item.getOne(id)
  );

  let kids = (await Promise.all(itemPromises)).map((payload) => payload.data);

  await getAllKids(kids);
  async function getAllKids(children: IItem[]) {
    for (const kid of children) {
      if (isEmpty(kid.kids)) {
        continue;
      }

      const commentPromises = kid.kids.map((id: number) =>
        CRUDApi.endpoints.item.getOne(id)
      );
      const newKids = (await Promise.all(commentPromises)).map(
        (payload) => payload.data
      );

      kids = kids.concat(newKids);

      if (newKids.every((child) => isEmpty(child.kids))) {
        continue;
      }
      // cast to item array by using any
      await getAllKids(newKids);
    }
  }

  kids = kids.filter((child: IItem) => !child.deleted && !child.dead);

  return dispatch({
    type: actionTypes.GET_ALL,
    payload: new Promise((resolve) => resolve({ data: kids })),
  });
};
