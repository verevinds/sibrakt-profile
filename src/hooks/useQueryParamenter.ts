import { useRouter } from "next/router";

import { NextRouter } from "next/router";
import { clearDynamicPathname } from "src/utils/router/clearDynamicPathname";
import { removeQueryParameters } from "src/utils/router/removeQueryParameters";

export const useQueryParamenter = (): NextRouter & {
  changeQueryParameter(
    query: NextRouter["query"],
    removeQueries?: string
  ): void;
} => {
  const router = useRouter();

  return {
    ...router,
    changeQueryParameter(query, removeQueries) {
      const clearQuery = removeQueryParameters(router.query, removeQueries);
      router.push({
        pathname: clearDynamicPathname(router.pathname, router.query),
        query: {
          ...clearQuery,
          ...query,
        },
      });
    },
  };
};
