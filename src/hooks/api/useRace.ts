import { AxiosError } from "axios";
import { useMutation } from "react-query";

import { useRequest } from "src/hooks/useRequest";
import { ApiError } from "src/types/error";

import { RaceRequest, RaceTypeData } from "src/types/race";

type ValueRequest = {
  payload: RaceRequest;
  method?: Method;
};
type Method = "post" | "delete";
export const useRace = () => {
  const request = useRequest();

  async function mutationFn({ payload, method = "post" }: ValueRequest) {
    const config = {
      delete: { data: payload },
      post: payload,
    };

    const { data } = await request[method]("/api/race", config[method]);

    return data;
  }

  return useMutation<RaceTypeData, AxiosError<ApiError>, ValueRequest>(
    mutationFn
  );
};
