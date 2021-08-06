import NavLink from "next/link";
import { useForm } from "react-hook-form";

import Logo from "src/components/logo";
import TextInput from "src/components/text-input";
import TextInputPassword from "../text-input-password";
import Button from "src/components/button";
import FormControl from "src/components/form-control";

import { useSignIn } from "src/hooks/api/useSignIn";

import { ROUTE_DEFAULT, ROUTE_SIGN_UP } from "src/utils/route";

import { SignInRequest } from "src/types/auth";

import MESSAGES from "./sign-in.messages";

import styles from "./signin.module.css";
import TextInputPhone from "../text-input-phone";

const SignUp = (): JSX.Element => {
  const { error, mutate, isError: isErrorResponse } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setError,
  } = useForm<SignInRequest & { submitPassword: string }>({
    mode: "onChange",
  });

  const phone = register("phone", {
    required: MESSAGES.phoneRequired,
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
            label={MESSAGES.phoneLabel}
            error={formErrors.phone?.message || error?.response?.data.message}
          >
            <TextInputPhone
              maxLength={10}
              placeholder={MESSAGES.phonePlaceholder}
              error={Boolean(isErrorResponse || formErrors.phone)}
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
              error={Boolean(isErrorResponse || formErrors.password)}
              {...password}
            />
          </FormControl>

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
