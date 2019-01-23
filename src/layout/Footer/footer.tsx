import * as React from 'react';
import { SiteSearch } from "../SiteSearch";
import styles from './footer.module.scss';

const Footer: React.FunctionComponent = () => {
  const spacer = " | ";
  return (
    <>
      <table className={styles.root} cellSpacing="0" cellPadding="1">
        <tbody>
        <tr className={styles.spacer} />
        <tr>
          <td className={styles.line} />
        </tr>
        </tbody>
      </table>
      <br />
      <div className={styles.center}>
        <span className={styles.yclinks}>
          <a href="https://news.ycombinator.com/newsguidelines.html">Guidelines</a>
          {spacer}
          <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
          {spacer}
          <a href="mailto:hn@ycombinator.com">Support</a>
          {spacer}
          <a href="https://github.com/HackerNews/API">API</a>
          {spacer}
          <a href="https://news.ycombinator.com/security.html">Security</a>
          {spacer}
          <a href="https://news.ycombinator.com/lists.html">Lists</a>
          {spacer}
          <a href="https://news.ycombinator.com/bookmarklet.html">Bookmarklet</a>
          {spacer}
          <a href="https://www.ycombinator.com/legal">Legal</a>
          {spacer}
          <a href="https://www.ycombinator.com/apply">Apply to YC</a>
          {spacer}
          <a href="mailto:hn@ycombinator.com">Contact</a>
        </span>
        <br />
        <br />
        <SiteSearch />
      </div>
    </>
  )
};

export { Footer };
