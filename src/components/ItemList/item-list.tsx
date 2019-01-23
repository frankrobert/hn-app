import * as React from 'react';
import { IItem } from '../../redux/Items/types';
import { isEmpty } from 'lodash';
import { Item } from '../Item';
import styles from './item-list.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  items: IItem[];
  page: number;
  pageSize: number;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  setCurrentItem: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ItemList: React.FunctionComponent<IProps> = (props: IProps) => {
  const { items, page, onClick, pageSize, setCurrentItem } = props;

  if (isEmpty(items)) {
    return null;
  }

  return (
    <table className={styles.root} cellSpacing={0} cellPadding={0}>
      <tbody>
        {items.map((item, index) => {
          const computedIndex = index + 1 + pageSize * (page - 1);
          return (
            <Item
              setCurrentItem={setCurrentItem}
              key={item.id}
              item={item}
              index={computedIndex}
            />
          );
        })}
        <tr className={styles.spacer} />
        <tr>
          <td colSpan={2} />
          <td>
            <Link onClick={onClick} to={`?page=${page + 1}`}>
              More
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { ItemList };
