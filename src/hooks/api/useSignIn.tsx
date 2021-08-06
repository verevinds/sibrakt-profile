import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

import { useRequest } from "src/hooks/useRequest";
import { SignUpRequest } from "src/types/auth";
import { ApiError } from "src/types/error";

import { ROUTE_DEFAULT } from "src/utils/route";

import { useAccessToken } from "src/hooks/useAccessToken";

type AuthResponse = { accessToken: string };

export const useSignIn = () => {
  const request = useRequest();
  const { setAccessToken } = useAccessToken();
  const router = useRouter();

  async function mutationFn(value: SignUpRequest) {
    const { data } = await request.post("/api/auth/signin", value);

    return data;
  };

  return useMutation<AuthResponse, AxiosError<ApiError>, SignUpRequest>(
    mutationFn,
    {
      onSuccess: ({ accessToken }) => {
        setAccessToken(accessToken);

        router.replace(ROUTE_DEFAULT);
      },
    }
  );
};
