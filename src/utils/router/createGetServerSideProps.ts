import type { GetServerSideProps } from "next";

import { logout } from "src/utils/auth/auth";
import { parseAuthCookie } from "src/utils/auth/authCookie";
import { ROUTE_DEFAULT, ROUTE_SIGN_IN } from "src/utils/routes";
import { redirectByGetServerSideProps } from "./redirectByGetServerSideProps";

export const createGetServerSideProps = (
  getServerSideProps?: GetServerSideProps
): GetServerSideProps => {
  return async (context) => {
    const accessToken = parseAuthCookie(context.req?.headers?.cookie ?? "");

    try {
      const isSignInPage = context.resolvedUrl.includes(ROUTE_SIGN_IN);
      if (!accessToken && !isSignInPage) {
        throw new ErrorUnauthenticated();
      }

      if (isSignInPage && accessToken) {
        throw new ErrorDuplicateAuthenticated();
      }

      if (getServerSideProps) {
        return await getServerSideProps(context);
      }
    } catch (error) {
      if (error instanceof ErrorUnauthenticated) {
        logout(context.res);
        return redirectByGetServerSideProps(ROUTE_SIGN_IN);
      }

      if (error instanceof ErrorDuplicateAuthenticated) {
        return redirectByGetServerSideProps(ROUTE_DEFAULT);
      }

      throw error;
    }

    return {
      props: {},
    };
  };
};

class ErrorUnauthenticated extends Error {
  readonly type = "UNAUTHENTICATED";
}

class ErrorDuplicateAuthenticated extends Error {
  readonly type = "DUPLICATE_AUTHENTICATED";
}
