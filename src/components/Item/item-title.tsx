import * as React from 'react';
import { IItem } from '../../redux/Items/types';
import styles from './item-title.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  index?: number;
  item: IItem;
}

function getDomain(url: string | undefined): string {
  if (!url) {
    return '';
  }
  return new URL(url).hostname.replace('www.', '');
}

const ItemTitle: React.FunctionComponent<IProps> = (props: IProps) => {
  const { item, index } = props;
  return (
    <tr>
      {
        <td align={'right'}>
          <span>{index && `${index}.`}</span>
        </td>
      }
      <td>
        <a href={`https://news.ycombinator.com/vote?id=${item.id}&how=up`}>
          <div className={styles.voter} />
        </a>
      </td>
      <td>
        {item.url ? (
          <a target={'_blank'} href={item.url}>
            {item.title}
          </a>
        ) : (
          <Link to={`/item?id=${item.id}`}>{item.title}</Link>
        )}{' '}
        <span className={styles.domain}>
          {item.url && (
            <>
              {'('}
              <a
                className={styles.link}
                href={`https://news.ycombinator.com/from?site=${getDomain(
                  item.url
                )}`}
              >
                {getDomain(item.url)}
              </a>
              {')'}
            </>
          )}
        </span>
      </td>
    </tr>
  );
};

export { ItemTitle };
