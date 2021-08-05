import NavLink from "next/link";

import Logo from "src/components/logo";
import TextInput from "src/components/text-input";
import Button from "src/components/button";
import FormControl from "src/components/form-control";

import { ROUTE_DEFAULT, ROUTE_SIGN_IN } from "src/utils/route";

import MESSAGES from "./sign-up.messages";

import styles from "./signup.module.css";
import { useSignUp } from "src/hooks/api/useSignUp";
import { useForm } from "react-hook-form";
import { SignUpRequest } from "src/types/auth";
import TextInputPhone from "../text-input-phone";
import TextInputPassword from "../text-input-password";

const SignIn = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setError,
  } = useForm<SignUpRequest & { submitPassword: string }>({ mode: "onChange" });
  const { mutate, error } = useSignUp();

  const phone = register("phone", {
    required: MESSAGES.emailRequired,
  });
  const password = register("password", {
    required: MESSAGES.passwordRequired,
  });
  const submitPassword = register("submitPassword", {
    required: MESSAGES.submitPasswordRequired,
  });

  const onSubmit = handleSubmit((data) => {
    if (data.password !== data.submitPassword) {
      setError("submitPassword", {
        type: "value",
        message: "Пароли не совпадают",
      });
      return;
    }
    mutate(data);
  });

  return (
    <main className={styles["SignIn"]}>
      <section className={styles["SignIn__header"]}>
        <Logo />
      </section>

      <section className={styles["SignIn__content"]}>
        <h1 className={styles["SignIn__title"]}>{MESSAGES.pageTitle}</h1>
        <form className={styles["SignIn__form"]} onSubmit={onSubmit}>
          <FormControl
            label={MESSAGES.emailLabel}
            error={
              formErrors.phone?.message ||
              error?.response?.data.errors?.phone?.message ||
              error?.response?.data.message
            }
          >
            <TextInputPhone
              type="tel"
              placeholder={MESSAGES.emailPlaceholder}
              maxLength={10}
              error={Boolean(
                formErrors.phone?.message || error?.response?.data.message
              )}
              {...phone}
            />
          </FormControl>

          <FormControl
            label={MESSAGES.passwordLabel}
            error={formErrors.password?.message}
          >
            <TextInputPassword
              type="password"
              placeholder={MESSAGES.passwordPlaceholder}
              error={Boolean(formErrors.password?.message)}
              {...password}
            />
          </FormControl>

          <FormControl
            label={MESSAGES.submitPasswordLabel}
            error={formErrors.submitPassword?.message}
          >
            <TextInputPassword
              type="password"
              placeholder={MESSAGES.submitPasswordPlaceholder}
              error={Boolean(formErrors.submitPassword?.message)}
              {...submitPassword}
            />
          </FormControl>

          <Button className={styles["SignIn__submit"]} size="full-width">
            {MESSAGES.signIn}
          </Button>
        </form>
      </section>

      <section className={styles["SignIn__links"]}>
        <NavLink href={ROUTE_DEFAULT}>{MESSAGES.navLinkBackText}</NavLink>
        <NavLink href={ROUTE_SIGN_IN}>{MESSAGES.navLinkSignInText}</NavLink>
      </section>
    </main>
  );
};

export default SignIn;
