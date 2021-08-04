import NavLink from "next/link";

import Logo from "src/components/logo";
import TextInput from "src/components/text-input";
import Button from "src/components/button";
import FormControl from "src/components/form-control";

import { ROUTE_DEFAULT, ROUTE_SIGN_IN } from "src/utils/route";

import MESSAGES from './sign-up.messages';

import styles from "./signup.module.css";

const SignIn = (): JSX.Element => {
  return (
    <main className={styles["SignIn"]}>
      <section className={styles["SignIn__header"]}>
        <Logo />
      </section>

      <section className={styles["SignIn__content"]}>
        <h1 className={styles["SignIn__title"]}>{MESSAGES.pageTitle}</h1>
        <form className={styles["SignIn__form"]}>
          <FormControl label={MESSAGES.emailLabel}>
            <TextInput
              name="userName"
              type="email"
              required
              placeholder={MESSAGES.emailPlaceholder}
            />
          </FormControl>

          <FormControl label={MESSAGES.passwordLabel}>
            <TextInput
              name="password"
              type="password"
              required
              placeholder={MESSAGES.passwordPlaceholder}
            />
          </FormControl>

          <FormControl label={MESSAGES.submitPasswordLabel}>
            <TextInput
              name="submitPassword"
              type="password"
              required
              placeholder={MESSAGES.submitPasswordPlaceholder}
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
