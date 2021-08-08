import { NextRouter } from "next/router";

export const clearDynamicPathname = (
  pathname: NextRouter["pathname"],
  query: NextRouter["query"]
) => {
  const newPathname = pathname;
  Object.keys(query).forEach((key) =>
    newPathname.replace(`[${key}]`, String(query[key]))
  );

  return newPathname;
};
