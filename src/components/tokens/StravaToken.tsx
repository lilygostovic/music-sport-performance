import { stravaService } from "../../services/stravaService";
import { useEffect } from "react";

export const StravaToken = () => {
  const params = new URLSearchParams(location.search);
  const authCode = params.get("code");

  const { storeAuthToken } = stravaService;

  useEffect(() => {
    if (authCode !== null) {
      storeAuthToken(authCode);
    }
  }, [authCode]);

  return <></>;
};
