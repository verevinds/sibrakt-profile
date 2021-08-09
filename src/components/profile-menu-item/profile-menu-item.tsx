import ArrowIcon from 'src/icons/arrow';

import styles from "./profile-menu-item.module.css";

interface Props {
  label: string;
  value?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

export const ProfileMenuItem: React.FC<Props> = ({
  label,
  value,
  Icon,
  onClick,
}) => {
  return (
    <div className={styles["ProfileMenuItem"]} onClick={onClick}>
      <div className={styles["ProfileMenuItem__column"]}>
        <Icon />
        <span className={styles["ProfileMenuItem__label"]}>{label}</span>
      </div>
      <div className={styles["ProfileMenuItem__column"]}>
        <span className={styles["ProfileMenuItem__value"]}>{value}</span>
        <ArrowIcon variant='right' />
      </div>
    </div>
  );
};
