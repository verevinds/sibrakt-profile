import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useNavigationState = () => {
  const [isNavigating, setNavigating] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setNavigating(true));
    router.events.on("routeChangeComplete", () => setNavigating(false));
    router.events.on("routeChangeError", () => setNavigating(false));

    return () => {
      router.events.off("routeChangeStart", () => setNavigating(false));
      router.events.on("routeChangeComplete", () => setNavigating(false));
      router.events.off("routeChangeError", () => setNavigating(false));
    };
  }, []);

  return { isNavigating };
};
