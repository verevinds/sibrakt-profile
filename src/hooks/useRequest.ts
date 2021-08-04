import axios, { AxiosRequestConfig } from "axios";

import { useAccessToken } from "src/hooks/useAccessToken";

export const useRequest = () => {
  const { accessToken } = useAccessToken();

  const config: AxiosRequestConfig = {};

  if (accessToken) {
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  }
  const request = axios.create(config);

  return request;
};
