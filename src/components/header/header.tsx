import cn from "classnames";

import Button from "src/components/button";
import ActiveLink from "src/components/active-link/active-link";
import NavLinks from "src/components/nav-links/nav-links";

import { useAccessToken } from "src/hooks/useAccessToken";

import {
  ROUTE_SIGN_IN,
} from "src/utils/route";

import styles from "./header.module.css";

const Header = (): JSX.Element => {
  const { removeAccessToken, isAccessToken } = useAccessToken();

  return (
    <header className={cn(styles["Header"])}>
      <div className={styles["Header__navigation"]}>
        <NavLinks />
      </div>
      <div className={styles["Header__exit"]}>
        {isAccessToken ? (
          <Button variant="link" onClick={removeAccessToken}>
            Выйти
          </Button>
        ) : (
          <ActiveLink href={ROUTE_SIGN_IN}>
            <a>Войти в систему</a>
          </ActiveLink>
        )}
      </div>
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
