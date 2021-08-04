import Logo from "src/components/logo";
import TextInput from "src/components/text-input";
import Button from "src/components/button";
import FormControl from "src/components/form-control";

import MESSAGES from './sign-in.messages';

import styles from "./signin.module.css";

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

          <Button className={styles["SignIn__submit"]} size='full-width'>
            {MESSAGES.signIn}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
