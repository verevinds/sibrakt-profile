import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

import { useRequest } from "src/hooks/useRequest";
import { SignUpRequest } from "src/types/auth";
import { ApiError } from "src/types/error";

import { RaceType } from "src/types/race";

type ValueRequest = Pick<RaceType, "name">;

export const useRaceTypeAdd = () => {
  const request = useRequest();

  async function signIn(value: ValueRequest) {
    const { data } = await request.post("/api/race-type", value);

    return data;
  }

  return useMutation<RaceType, AxiosError<ApiError>, ValueRequest>(signIn);
};
