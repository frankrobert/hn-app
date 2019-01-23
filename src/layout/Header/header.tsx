import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { connect } from 'react-redux';
import { IState } from '../../redux/types';
import Logo from '../../assets/y18.gif';

interface IStateProps {
}

const mapStateToProps = (state: IState): IStateProps => ({
});

type IProps = IStateProps;

const Header: React.FunctionComponent<IStateProps> = (props: IProps) => {
  const spacer = " | ";
  const activeLinkStyle = { color: 'white' }
  return (
    <table className={styles.root} cellPadding={0} cellSpacing={0}>
      <tbody>
      <tr>
        <td className={styles.logoWrapper}>
          <Link to={'/'}>
            <img className={styles.logo} src={Logo} />
          </Link>
        </td>
        <td className={styles.nav}>
          <span className={styles.pageTop}>
            <b className={styles.title}>
              <Link to={'/news'}>Hacker News</Link>
            </b>
            <NavLink activeStyle={activeLinkStyle} to={'/newest'}>new</NavLink>
            {spacer}
            <a href={'https://news.ycombinator.com/newcomments'}>comments</a>
            {spacer}
            <NavLink activeStyle={activeLinkStyle} to={'/ask'}>ask</NavLink>
            {spacer}
            <NavLink activeStyle={activeLinkStyle} to={'/show'}>show</NavLink>
            {spacer}
            <a href={'https://news.ycombinator.com/jobs'}>jobs</a>
            {spacer}
            <a href={'https://news.ycombinator.com/submit'}>submit</a>
          </span>
        </td>
      </tr>
      </tbody>
    </table>
  );
};

const enhancedHeader = connect(mapStateToProps)(Header);

export { enhancedHeader as Header };
