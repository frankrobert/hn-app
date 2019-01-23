import * as React from 'react';
import { IItem } from '../../redux/Items/types';
import { Comment } from '../Comment';

interface IProps {
  comments: IItem[];
  item: IItem;
}

const CommentList: React.FunctionComponent<IProps> = (props: IProps) => {
  const { comments, item } = props;
  return (
    <table>
      <tbody>
        {comments.map((comment) => {
          return (
            <tr key={comment.id}>
              <td>
                <Comment comment={comment} item={item} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { CommentList };
