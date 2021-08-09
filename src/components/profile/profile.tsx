import { useForm } from "react-hook-form";
import { useMeProfile } from "src/hooks/api/useMeProfile";
import type { ProfileData } from "src/types/user";
import FormControl from "src/components/form-control";
import TextInput from "src/components/text-input";
import MESSAGES from './profile.messages';

import styles from './profile.module.css';
import { ProfileMenuItem } from "../profile-menu-item";
import LockIcon from "src/icons/lock/lock";
import PhoneIcon from "src/icons/phone";
import UserIcon from "src/icons/user";
import { ProfileAvatar } from "../profile-avatar";

const Profile = (): JSX.Element => {
  const { data: meProfile } = useMeProfile();
  const { register, formState: {errors} } = useForm<ProfileData>({ defaultValues: meProfile });
  const firstName = register("firstName");
  const lastName = register("lastName");
  const phone = register("phone", {required: MESSAGES.phoneRequired});
  const email = register("email");

  return (
    <div className={styles["Profile"]}>
      <div className={styles["Profile__content"]}>
        <form>
          <FormControl
            label={MESSAGES.firstNameLabel}
            error={errors.firstName?.message}
            name={firstName.name}
          >
            <TextInput
              {...firstName}
              placeholder={MESSAGES.firstNamePlaceholder}
              error={Boolean(errors.firstName)}
            />
          </FormControl>

          <FormControl
            label={MESSAGES.lastNameLabel}
            error={errors.lastName?.message}
            name={lastName.name}
          >
            <TextInput
              {...lastName}
              placeholder={MESSAGES.lastNamePlaceholder}
              error={Boolean(errors.lastName)}
            />
          </FormControl>

          <FormControl
            label={MESSAGES.emailLabel}
            error={errors.email?.message}
            name={email.name}
          >
            <TextInput
              {...email}
              type="email"
              placeholder={MESSAGES.emailPlaceholder}
              error={Boolean(errors.email)}
            />
          </FormControl>
        </form>
      </div>
      <div className={styles["Profile__info"]}>
        <ProfileAvatar />
        <div>
          <ProfileMenuItem
            label="Пароль"
            Icon={LockIcon}
            value="********"
            onClick={() => {}}
          />
          <ProfileMenuItem
            label="Номер телефона"
            Icon={PhoneIcon}
            value={`*${meProfile?.phone.slice(-4)}`}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
