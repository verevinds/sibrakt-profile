import { AxiosError } from "axios";
import { useMutation } from "react-query";

import { useRequest } from "src/hooks/useRequest";
import { ChangePasswordForm, SignUpRequest } from "src/types/auth";
import { ApiError } from "src/types/error";

type Response = { message: string };

export const useChangePassword = () => {
  const request = useRequest();

  async function mutationFn(value: ChangePasswordForm) {
    const { data } = await request.put("/api/auth/pwd", value);

    return data;
  }

  return useMutation<Response, AxiosError<ApiError>, ChangePasswordForm>(
    mutationFn
  );
};
