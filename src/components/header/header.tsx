import { PropsWithChildren } from 'react';
import styles from './header.module.css';

const Header = (): JSX.Element => {
  return <header className={styles["Header__block"]}>header</header>;
};

export default Header;
