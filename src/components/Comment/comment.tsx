import * as React from 'react';
import { IItem } from '../../redux/Items/types';
import styles from './comment.module.scss';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

interface IProps {
  comment: IItem;
  item: IItem;
}

const Comment: React.FunctionComponent<IProps> = (props: IProps) => {
  const { comment, item } = props;
  return (
    <table className={styles.root}>
      <tbody>
        <tr>
          <td>
            <img height={1} width={0} />
          </td>
          <td className={styles.valign}>
            <a href={`https://news.ycombinator.com/vote?id=${item.id}&how=up`}>
              <div className={styles.voter} />
            </a>
          </td>
          <td>
            <div className={styles.title}>
              <a href={`https://news.ycombinator.com/user?id=${comment.by}`}>
                {comment.by}
              </a>{' '}
              <span>
                <a href={`https://news.ycombinator.com/item?id=${comment.id}`}>
                  {format(comment.time, new Date().toString())}
                </a>
              </span>{' '}
              <a href="javascript:void(0)">[-]</a>
            </div>
            <br />
            <div className={styles.comment}>
              <span
                dangerouslySetInnerHTML={{ __html: comment.text as string }}
              />
              <div>
                <p>
                  <u>
                    <a
                      href={`https://news.ycombinator.com/reply?id=${item.id}`}
                    >
                      reply
                    </a>
                  </u>
                </p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { Comment };
