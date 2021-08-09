import { SVGAttributes } from "react";

import styles from './user.module.css';

const UserIcon = (props: SVGAttributes<SVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    viewBox="0 0 18 18"
    width="18"
    height="18"
    className={styles['UserIcon']}
    {...props}
  >
    <defs />
    <path
      fill-rule="evenodd"
      d="M3 11.7c3.6-2.3 8.4-2.3 12 0 .5.4 1 1 1 1.8V17H2v-3.3c0-.8.4-1.6 1-2zm8.8-9.5a4 4 0 11-5.6 5.6 4 4 0 015.6-5.6z"
    />
  </svg>
);

export default UserIcon;
