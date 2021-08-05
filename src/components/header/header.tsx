import cn from "classnames";

import Button from "src/components/button";

import { useAccessToken } from "src/hooks/useAccessToken";

import {
  ROUTE_ADMIN,
  ROUTE_DEFAULT,
  ROUTE_PROFILE,
  ROUTE_SIGN_IN,
} from "src/utils/route";

import styles from "./header.module.css";
import ActiveLink from "src/components/active-link/active-link";
import { useMeProfile } from "src/hooks/useMeProfile";

const Header = (): JSX.Element => {
  const { accessToken, removeAccessToken, isAccessToken } = useAccessToken();
  const { data } = useMeProfile();
  const isAdmin = data?.role === "admin";

  return (
    <header className={cn(styles["Header"])}>
      <nav className={styles["Header__navigation"]}>
        <ActiveLink
          href={ROUTE_DEFAULT}
          activeClassName={styles["Header__link_active"]}
        >
          <a>Зачет дня</a>
        </ActiveLink>
        {isAccessToken && (
          <ActiveLink
            href={ROUTE_PROFILE}
            activeClassName={styles["Header__link_active"]}
          >
            <a>Личный кабинет</a>
          </ActiveLink>
        )}
        {isAdmin && (
          <ActiveLink
            href={ROUTE_ADMIN}
            activeClassName={styles["Header__link_active"]}
          >
            <a>Панель администратора</a>
          </ActiveLink>
        )}
      </nav>
      <div className={styles["Header__exit"]}>
        {accessToken ? (
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
