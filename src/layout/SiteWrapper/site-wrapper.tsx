import * as React from 'react';
import { Header } from '../Header';
import styles from './site-wrapper.module.scss';
import { Footer } from '../Footer';

interface IProps {
  children: React.ReactNode;
}

const SiteWrapper: React.FunctionComponent<IProps> = ({ children }: IProps) => {
  return (
    <table className={styles.root} cellSpacing={0} cellPadding={0}>
      <tbody>
        <tr>
          <td>
            <Header />
          </td>
        </tr>
        <tr className={styles.pagespace} />
        <tr>
          <td>{children}</td>
        </tr>
        <tr>
          <td>
            <Footer />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { SiteWrapper };
