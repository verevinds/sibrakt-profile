import { Redirect } from "next";

export function redirectByGetServerSideProps(
  route: string,
  options?: Redirect
): {
  redirect: Redirect;
} {
  return {
    redirect: {
      destination: route,
      permanent: false,
      ...options,
    },
  };
}
