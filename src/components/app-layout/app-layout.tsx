import { PropsWithChildren } from "react";
import Header from "../header";

const AppLayout = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;
