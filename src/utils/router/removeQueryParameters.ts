import { NextRouter } from "next/router";

export const removeQueryParameters = (
  query: NextRouter["query"],
  removeQueries?: string
): NextRouter["query"] => {
  if (removeQueries) {
    const cloneQuery = { ...query };

    if (Array.isArray(removeQueries)) {
      Array.from(removeQueries, (queryName) => {
        delete cloneQuery[queryName];
      });
      return cloneQuery;
    }

    delete cloneQuery[removeQueries];

    return cloneQuery;
  }

  return query;
};
