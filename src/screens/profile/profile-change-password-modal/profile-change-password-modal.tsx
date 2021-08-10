import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Button from "src/components/button";
import FormControl from "src/components/form-control";
import Modal, { ModalProps } from "src/components/modal";
import ModalButtons from "src/components/modal-buttons";
import TextInputPassword from "src/components/text-input-password";
import { useChangePassword } from "src/hooks/api/useChangePassword";
import { ChangePasswordForm } from "src/types/auth";

import MESSAGES from "./profile-change-password-modal.messages";

import styles from "./profile-change-password-modal.module.css";

export type ChangePasswordModalProps = Omit<ModalProps, "title"> & {
  onChangeSuccess: () => void;
};

export const ChangePasswordModal = ({
  onChangeSuccess,
  ...props
}: ChangePasswordModalProps): JSX.Element => {
  const [errorCommon, setErrorCommon] = useState("");

  const { mutate } = useChangePassword();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset
  } = useForm<ChangePasswordForm>();

  useEffect(() => {
    return () => {
      setErrorCommon("");
      reset()
    };
  }, []);

  const onSubmit = handleSubmit(async (value) => {
    setErrorCommon("");
    if (value.newPassword !== value.confirmPassword) {
      setError("confirmPassword", {
        type: "validate",
        message: MESSAGES.confirmPasswordError,
      });
      return;
    }

    await mutate(value, {
      onError: (error) => {
        console.dir(error);
        setErrorCommon(error.response?.data.message!);
      },
      onSuccess: () => {
        onChangeSuccess();
        reset();
      },
    });
  });

  const currentPassword = register("currentPassword", {
    required: MESSAGES.currentPasswordRequired,
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
          label={MESSAGES.confirmPasswordLabel}
          name={currentPassword.name}
          error={errors.currentPassword?.message}
        >
          <TextInputPassword
            {...currentPassword}
            placeholder={MESSAGES.confirmPasswordPlaceholder}
            variant="light"
            error={Boolean(errors.currentPassword)}
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
        <div className={styles["ProfileChangePasswordModal__error"]}>
          <Alert variant={errorCommon ? "danger" : "light"}>
            {errorCommon && errorCommon}
          </Alert>
        </div>
        <ModalButtons alignContent="center">
          <Button variant="primary" size="large">
            {MESSAGES.save}
          </Button>
        </ModalButtons>
      </form>
    </Modal>
  );
};
