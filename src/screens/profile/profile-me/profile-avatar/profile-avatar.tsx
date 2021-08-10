import styles from "./profile-avatar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface Props {
  profileUrl?: string;
  className?: string;
}

export const ProfileAvatar: React.FC<Props> = ({ profileUrl, className }) => {
  return (
    <div className={styles["ProfileAvatar"]}>
      <div className={styles["ProfileAvatar__avatar"]} onClick={() => {}}>
        {profileUrl ? (
          <img
            className={styles["ProfileAvatar__avatarImage"]}
            src={profileUrl}
          />
        ) : (
          <FontAwesomeIcon icon={faUser} color='white' size='5x'/>
        )}
      </div>
    </div>
  );
};
