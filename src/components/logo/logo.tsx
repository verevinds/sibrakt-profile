import { HTMLAttributes } from "react";
import cn from 'classnames';

import styles from './logo.module.css';

const Logo = ({className, ...restProps}: HTMLAttributes<HTMLDivElement>):JSX.Element => {
  return (
    <div className={cn(styles["Logo"], className)} {...restProps}>
      <span className={styles["Logo_highlight"]}>СИБ</span>
      <span className={styles["Logo_bold"]}>КАРТ</span>
      <span>МОТОРСПОРТ</span>
    </div>
  );

}

export default Logo;