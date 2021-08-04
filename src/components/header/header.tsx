import NavLink from 'next/link';

import cn from "classnames";

import styles from "./header.module.css";
import { ROUTE_SIGN_IN } from 'src/utils/route';

const Header = (): JSX.Element => {
  return (
    <header className={cn(styles["Header"])}>
      <div className={styles["Header__user"]}></div>
      <NavLink href={ROUTE_SIGN_IN}>
    Войти в систему
      </NavLink>
      <button
        title="Open navbar"
        className={cn(styles["Header__menuButton"], styles["MenuButton"])}
        onClick={() => {}}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <defs />
            <path
              fill="#07022d"
              fillRule="evenodd"
              d="M2 20h20v-2H2v2zM2 6h20V4H2v2zm0 7h20v-2H2v2z"
            />
          </svg>
        </span>
      </button>
    </header>
  );
};

export default Header;
