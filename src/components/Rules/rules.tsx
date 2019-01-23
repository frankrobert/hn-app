import * as React from 'react';
import styles from './rules.module.scss';

const Rules: React.FunctionComponent = () => {
  return (
    <table>
      <tbody>
      <tr className={styles['small-spacer']} />
      <tr>
        <td colSpan={2} />
        <td>
          Please read the{' '}
          <a href="https://news.ycombinator.com/showhn">
            <u>rules</u>
          </a>
          . You can also browse the{' '}
          <a href="https://news.ycombinator.com/shownew">
            <u>newest</u>
          </a>{' '}
          Show HNs.
        </td>
      </tr>
      <tr className={styles['medium-spacer']} />
      </tbody>
    </table>
  );
};

export { Rules };
