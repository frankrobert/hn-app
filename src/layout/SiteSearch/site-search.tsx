import * as React from 'react';
import styles from './site-search.module.scss';

const SiteSearch: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <form className={styles.root} method={'get'} action={'//hn.algolia.com/'}>
      Search:{' '}
      <input
        type="text"
        name="q"
        value={value}
        onChange={handleChange}
        size={17}
        autoCorrect="off"
        autoCapitalize="off"
      />
    </form>
  );
};

export { SiteSearch };
