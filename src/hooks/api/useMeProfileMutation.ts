import { AxiosError } from "axios";
import { useMutation } from "react-query";

import { useRequest } from "src/hooks/useRequest";
import { ApiError } from "src/types/error";

import type { ProfileData } from "src/types/user";

type ValueRequest = {
  payload: ProfileData;
  method?: Method;
};
type Method = "post" | "put";
export const useMeProfileMutation = () => {
  const request = useRequest();

  async function mutationFn({ payload, method = "post" }: ValueRequest) {
    const config = {
      put: { ...payload },
      post: payload,
    };
    const { data } = await request[method]("/api/profile/me", config[method]);

    return data;
  }

  return useMutation<ProfileData, AxiosError<ApiError>, ValueRequest>(
    mutationFn
  );
};
