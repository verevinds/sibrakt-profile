import { NextRouter } from "next/router";
import {
  DEFAULT_FROM,
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
  DEFAULT_TO,
} from "../constants";
import { dateToTimestamp } from "../date/dateToTimestamp";

type DateDefault = { from: Date; to: Date };

export const getParamsByQuery = {
  pagePagination: (
    query: NextRouter["query"]
  ): { offset: number; limit: number; query?: string | string[] } => {
    const limit = Number(query.pageSize ?? DEFAULT_LIMIT);
    const offset = Number(query.pageIndex ?? DEFAULT_OFFSET) * limit;

    if (query?.query) {
      return {
        limit,
        offset,
        query: query?.query,
      };
    }
    return {
      limit,
      offset,
    };
  },
  dateRange: (
    query: NextRouter["query"],
    dateDefault?: DateDefault
  ): { from: number; to: number } => {
    const defaultFrom = dateDefault
      ? dateToTimestamp(dateDefault.from)
      : dateToTimestamp(DEFAULT_FROM);
    const defaultTo = dateDefault
      ? dateToTimestamp(dateDefault.to)
      : dateToTimestamp(DEFAULT_TO);

    return {
      from: Number(query.from ?? defaultFrom),
      to: Number(query.to ?? defaultTo),
    };
  },
};
