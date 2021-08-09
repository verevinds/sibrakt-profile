import { useEffect } from "react";
import { useForm } from "react-hook-form";

import MESSAGES from "./profile.messages";

import { useMeProfile } from "src/hooks/api/useMeProfile";
import { useMeProfileMutation } from "src/hooks/api/useMeProfileMutation";

import type { ProfileData } from "src/types/user";

import FormControl from "src/components/form-control";
import TextInput from "src/components/text-input";
import Title from "src/components/title";
import Section from "src/components/section";
import Button from "src/components/button";
import { ProfileMenuItem } from "src/components/profile-menu-item";
import { ProfileAvatar } from "src/components/profile-avatar";

import LockIcon from "src/icons/lock/lock";
import PhoneIcon from "src/icons/phone";

import styles from "./profile.module.css";

const Profile = (): JSX.Element => {
  const { data: meProfile, refetch, isFetching } = useMeProfile();
  const { mutate, isLoading: isLoadingUpdate } = useMeProfileMutation();
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    setValue,
  } = useForm<ProfileData>({ defaultValues: meProfile });

  useEffect(() => {
    if (meProfile && isDirty)
      Object.keys(meProfile).forEach((key) => {
        setValue(
          key as keyof typeof meProfile,
          meProfile[key as keyof typeof meProfile]
        );
      });
  }, [meProfile]);

  const firstName = register("firstName");
  const lastName = register("lastName");
  const email = register("email");

  const onSubmit = handleSubmit(async (value) => {
    mutate(
      { payload: value, method: "put" },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  });

  return (
    <>
      <Title>{MESSAGES.pageTitle}</Title>

      <Section className={styles["Profile"]}>
        <div className={styles["Profile__content"]}>
          <h2>{MESSAGES.profileInfoTitle}</h2>
          <form onSubmit={onSubmit}>
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

            <Button
              disabled={!isDirty}
              type="submit"
              loading={isLoadingUpdate || isFetching}
            >
              {MESSAGES.submitButtonText}
            </Button>
          </form>
        </div>
        <div className={styles["Profile__info"]}>
          <ProfileAvatar />
          <div className={styles["Profile__info_security"]}>
            <h2>{MESSAGES.credentialInfoTitle}</h2>
            <ProfileMenuItem
              label={MESSAGES.passwordLabel}
              Icon={LockIcon}
              value={MESSAGES.passwordPlaceholder}
              onClick={() => {}}
            />
            <ProfileMenuItem
              label={MESSAGES.phoneLabel}
              Icon={PhoneIcon}
              value={`*${meProfile?.phone.slice(-4)}`}
              onClick={() => {}}
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Profile;
