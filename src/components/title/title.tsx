import cn from "classnames";

import styles from "./title.module.css";

const Title = (): JSX.Element => {
  return (
    <section className={styles["Title__block"]}>
      <div className={styles["Title__logo"]}>
        <span className={styles["Title__logo_highlight"]}>СИБ</span>
        <span className={styles["Title__logo_bold"]}>КАРТ</span>
        <span>МОТОРСПОРТ ТОП10</span>
      </div>
      <span className={styles["Title__date"]}>дата зачета 04.08.2021</span>
    </section>
  );
};

export default Title;
