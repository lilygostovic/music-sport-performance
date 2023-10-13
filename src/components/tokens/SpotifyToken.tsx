import { spotifyService } from "../../services";
import { useEffect } from "react";

export const SpotifyToken = () => {
  const params = new URLSearchParams(location.search);
  const authCode = params.get("code");

  const { storeAuthToken } = spotifyService;

  useEffect(() => {
    if (authCode !== null) {
      storeAuthToken(authCode);
    }
  }, [authCode]);

  return <></>;
};
