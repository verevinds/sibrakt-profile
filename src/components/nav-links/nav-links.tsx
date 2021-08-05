import { useMeProfile } from "src/hooks/api/useMeProfile";
import ActiveLink from "src/components/active-link";

import styles from "./nav-links.module.css";
import { useAccessToken } from "src/hooks/useAccessToken";

import LINKS from "./nav-link.link";

const NavLinks = (): JSX.Element => {
  const { isAccessToken } = useAccessToken();
  const { data } = useMeProfile();

  return (
    <>
      {LINKS.map((link) => {
        if (link.accessProhibite.includes(data?.role!)) {
          return null;
        }
        if (link.withLogin && !isAccessToken) {
          return null;
        }
        return (
          <ActiveLink
            key={link.id}
            exec={link?.exec}
            href={link.href}
            activeClassName={styles["NavLinks__link_active"]}
          >
            <a>{link.text}</a>
          </ActiveLink>
        );
      })}
    </>
  );
};

export default NavLinks;
