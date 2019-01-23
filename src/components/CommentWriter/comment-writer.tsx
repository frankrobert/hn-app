import * as React from 'react';
import { Item } from '../Item';
import { IItem } from '../../redux/Items/types';

interface IProps {
  item: IItem;
  onGoTo: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const CommentWriter: React.FunctionComponent<IProps> = (props: IProps) => {
  const { item, onGoTo } = props;
  return (
    <table>
      <tbody>
      <Item item={item} setCurrentItem={() => null} />
      <tr>
        <td colSpan={2} />
        <td>
          <textarea name="text" rows={6} cols={60} />
          <br />
          <br />
          <input
            onClick={onGoTo}
            type={'submit'}
            value={'add comment'}
          />
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export { CommentWriter };
