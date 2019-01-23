import * as React from 'react';
import { IItem } from '../../redux/Items/types';
import styles from './item-title.module.scss';
import { ItemTitle } from './item-title';
import { ItemDetails } from './item-details';

interface IProps {
  item: IItem;
  index?: number;
  setCurrentItem: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Item: React.FunctionComponent<IProps> = (props: IProps) => {
  const { index, item, setCurrentItem } = props;
  return (
    <>
      <ItemTitle item={item} index={index} />
      <ItemDetails setCurrentItem={setCurrentItem} item={item} index={index} />
      <tr className={styles.spacer} />
    </>
  );
};

export { Item };
