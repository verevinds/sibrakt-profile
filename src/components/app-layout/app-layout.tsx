import { PropsWithChildren } from "react";
import Header from "../header";
import styles from "./app-layout.module.css";

const AppLayout = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <div className={styles["AppLayout"]}>
      <Header />
      <div className={styles["AppLayout__content"]}>{children}</div>
    </div>
  );
};

export default AppLayout;
