import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

import { useRequest } from "src/hooks/useRequest";
import { SignUpRequest } from "src/types/auth/signup";
import { ApiError } from "src/types/error";

import { ROUTE_DEFAULT } from "src/utils/route";

import { useAccessToken } from "src/hooks/useAccessToken";

type AuthResponse = { accessToken: string };

export const useSignUp = () => {
  const request = useRequest();
  const { setAccessToken } = useAccessToken();
  const router = useRouter();

  const signUp = async (value: SignUpRequest) => {
    const { data } = await request.post("/api/auth/signup", value);
    return data;
  };

  return useMutation<AuthResponse, AxiosError<ApiError>, SignUpRequest>(
    signUp,
    {
      onSuccess: ({ accessToken }) => {
        setAccessToken(accessToken);

        router.replace(ROUTE_DEFAULT);
      },
    }
  );
};
