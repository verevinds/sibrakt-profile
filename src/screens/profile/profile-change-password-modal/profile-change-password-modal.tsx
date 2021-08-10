import React from "react";
import { useForm } from "react-hook-form";
import Button from "src/components/button";
import FormControl from "src/components/form-control";
import Modal, { ModalProps } from "src/components/modal";
import ModalButtons from "src/components/modal-buttons";
import TextInputPassword from "src/components/text-input-password";

import MESSAGES from "./profile-change-password-modal.messages";

import styles from "./profile-change-password-modal.module.css";

interface ChangePasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export type ChangePasswordModalProps = Omit<ModalProps, "title"> & {
  onChangeSuccess: () => void;
};

export const ChangePasswordModal = ({
  onChangeSuccess,
  ...props
}: ChangePasswordModalProps): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<ChangePasswordForm>();

  const onSubmit = handleSubmit((value) => {
    if (value.newPassword !== value.confirmPassword) {
      setError("confirmPassword", {
        type: "validate",
        message: MESSAGES.confirmPasswordError,
      });
      return;
    }
  });

  const oldPassword = register("oldPassword", {
    required: MESSAGES.oldPasswordRequired,
  });
  const newPassword = register("newPassword", {
    required: MESSAGES.newPasswordRequired,
  });
  const confirmPassword = register("confirmPassword", {
    required: MESSAGES.confirmPasswordRequired,
  });

  return (
    <Modal
      {...props}
      title={MESSAGES.modalTitle}
      className={styles["ProfileChangePasswordModal"]}
    >
      <form onSubmit={onSubmit}>
        <FormControl
          label={MESSAGES.oldPasswordLabel}
          name={oldPassword.name}
          error={errors.oldPassword?.message}
        >
          <TextInputPassword
            {...oldPassword}
            placeholder={MESSAGES.oldPasswordPlaceholder}
            variant="light"
            error={Boolean(errors.oldPassword)}
          />
        </FormControl>
        <FormControl
          label={MESSAGES.newPasswordLabel}
          name={newPassword.name}
          error={errors.newPassword?.message}
        >
          <TextInputPassword
            {...newPassword}
            placeholder={MESSAGES.newPasswordPlaceholder}
            variant="light"
            error={Boolean(errors.newPassword)}
          />
        </FormControl>

        <FormControl
          label={MESSAGES.confirmPasswordLabel}
          name={confirmPassword.name}
          error={errors.confirmPassword?.message}
        >
          <TextInputPassword
            {...confirmPassword}
            placeholder={MESSAGES.confirmPasswordPlaceholder}
            variant="light"
            error={Boolean(errors.confirmPassword)}
          />
        </FormControl>

        <ModalButtons alignContent="center">
          <Button variant="primary" size="large">
            {MESSAGES.save}
          </Button>
        </ModalButtons>
      </form>
    </Modal>
  );
};
