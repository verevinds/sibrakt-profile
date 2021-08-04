import NavLink from "next/link";
import { useForm } from "react-hook-form";

import Logo from "src/components/logo";
import TextInput from "src/components/text-input";
import Button from "src/components/button";
import FormControl from "src/components/form-control";

import { useSignIn } from "src/hooks/api/useSignIn";

import { ROUTE_DEFAULT, ROUTE_SIGN_UP } from "src/utils/route";

import { SignInRequest } from "src/types/auth";

import MESSAGES from "./sign-in.messages";

import styles from "./signin.module.css";
import { Alert } from "react-bootstrap";

const SignUp = (): JSX.Element => {
  const { error, mutate, isError } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isValid },
    setError,
  } = useForm<SignInRequest & { submitPassword: string }>({
    mode: "onChange",
  });

  const email = register("email", {
    required: MESSAGES.emailRequired,
  });
  const password = register("password", {
    required: MESSAGES.passwordRequired,
  });

  const onSubmit = handleSubmit((data) => mutate(data));
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
            error={formErrors.email?.message}
          >
            <TextInput
              type="email"
              placeholder={MESSAGES.emailPlaceholder}
              error={Boolean(
                formErrors.email?.message || error?.response?.data.message
              )}
              {...email}
            />
          </FormControl>

          <FormControl
            label={MESSAGES.passwordLabel}
            error={formErrors.password?.message}
          >
            <TextInput
              type="password"
              placeholder={MESSAGES.passwordPlaceholder}
              error={Boolean(formErrors.password?.message)}
              {...password}
            />
          </FormControl>
          {isError && <Alert>{error?.response?.data.message}</Alert>}

          <Button className={styles["SignIn__submit"]} size="full-width">
            {MESSAGES.signIn}
          </Button>
        </form>
      </section>

      <section className={styles["SignIn__links"]}>
        <NavLink href={ROUTE_DEFAULT}>{MESSAGES.navLinkBackText}</NavLink>
        <NavLink href={ROUTE_SIGN_UP}>{MESSAGES.navLinkSignUpText}</NavLink>
      </section>
    </main>
  );
};

export default SignUp;
