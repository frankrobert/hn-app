import * as React from 'react';
import { IItem } from '../../redux/Items/types';
import { format } from 'timeago.js';
import styles from './item-details.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  item: IItem;
  index?: number;
  setCurrentItem: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ItemDetails: React.FunctionComponent<IProps> = (props: IProps) => {
  const { item, setCurrentItem, index } = props;
  const spacer = ' | ';
  return (
    <tr>
      <td colSpan={2} />
      <td className={styles.details}>
        <span>{item.score} points</span>
        {' by '}
        <a href={`https://news.ycombinator.com/user?id=${item.by}`}>
          {item.by}
        </a>{' '}
        <span>
          <Link onClick={setCurrentItem} to={`/item?id=${item.id}`}>
            {format(item.time, new Date().toString())}
          </Link>
        </span>
        {spacer}
        <a href={`https://news.ycombinator.com/hide?id=${item.id}`}>hide</a>
        {spacer}
        {!index && (
          <>
            <a href={`https://hn.algolia.com/?query=${item.title}&sort=byDate&dateRange=all&type=story&storyText=false&prefix&page=0`}>past</a>
            {spacer}
            <a href={`https://hn.algolia.com/?search=${item.title}`}>web</a>
            {spacer}
            <a href={`https://news.ycombinator.com/fave?id=${item.id}`}>
              favorite
            </a>
            {spacer}
          </>
        )}
        <Link onClick={setCurrentItem} to={`/item?id=${item.id}`}>
          {item.descendants} comments
        </Link>
      </td>
    </tr>
  );
};

export { ItemDetails };
