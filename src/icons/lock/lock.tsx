import { SVGAttributes } from "react";

import styles from './lock.module.css';

const LockIcon = (props: SVGAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className={styles['LockIcon']}
    {...props}
  >
    <path
      d="M12 2c2.689 0 4.882 2.122 4.995 4.783L17 7v3.171c1.113.393 1.924 1.424 1.995 2.653L19 13v5c0 1.598-1.249 2.904-2.824 2.995L16 21H8c-1.598 0-2.904-1.249-2.995-2.824L5 18v-5c0-1.306.835-2.418 2-2.83V7c0-2.761 2.239-5 5-5zm4 10H8c-.513 0-.936.386-.993.883L7 13v5c0 .513.386.936.883.993L8 19h8c.513 0 .936-.386.993-.883L17 18v-5c0-.552-.448-1-1-1zm-4-8c-1.598 0-2.904 1.249-2.995 2.824L9 7v3h6V7c0-1.657-1.343-3-3-3z"
      fill-rule="evenodd"
    />
  </svg>
);

export default LockIcon;
