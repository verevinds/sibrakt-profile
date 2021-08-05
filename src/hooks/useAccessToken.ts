import { useCookies } from "react-cookie";
type AccessTokenHook = () => {
  accessToken: string | null;
  removeAccessToken: () => void;
  setAccessToken: (accessToken: string) => void;
  isAccessToken: boolean;
};
export const useAccessToken: AccessTokenHook = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  return {
    accessToken: cookies["accessToken"] ?? null,
    removeAccessToken: () => removeCookie("accessToken"),
    setAccessToken: (accessToken) => setCookie("accessToken", accessToken),
    isAccessToken: Boolean(cookies["accessToken"]),
  };
};
