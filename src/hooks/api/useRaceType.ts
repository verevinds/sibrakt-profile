import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

import { useRequest } from "src/hooks/useRequest";
import { SignUpRequest } from "src/types/auth";
import { ApiError } from "src/types/error";

import { RaceTypeData } from "src/types/race";

type ValueRequest = {
  payload: Pick<RaceTypeData, "name"> | Pick<RaceTypeData, "_id">;
  method?: Method;
};
type Method = "post" | "put";
export const useRaceType = () => {
  const request = useRequest();

  async function mutationFn({ payload, method = "post" }: ValueRequest) {
    const config = {
      put: payload,
      post: payload,
    };
    const { data } = await request[method]("/api/race-type", config[method]);

    return data;
  }

  return useMutation<RaceTypeData, AxiosError<ApiError>, ValueRequest>(
    mutationFn
  );
};
