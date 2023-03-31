import { useEffect } from "react";

export const StravaToken = () => {
  const params = new URLSearchParams(location.search);
  const authCode = params.get("code");

  const STRAVA_CLIENT_ID: string = process.env.REACT_APP_STRAVA_CLIENT_ID as string;
  const STRAVA_CLIENT_SECRET: string = process.env.REACT_APP_STRAVA_CLIENT_SECRET as string;

  useEffect(() => {
    if (authCode !== null) {
      const saveAuthTokens = async () => {
        const res = await fetch(
          `http://www.strava.com/oauth/token?client_id=${STRAVA_CLIENT_ID}&client_secret=${STRAVA_CLIENT_SECRET}&code=${authCode}&grant_type=authorization_code`,
          {
            method: "POST",
          },
        );

        const json = await res.json();

        const refreshToken = json.refresh_token;
        const accessToken = json.access_token;

        localStorage.setItem("stravaRefreshToken", refreshToken);
        localStorage.setItem("stravaAccessToken", accessToken);

        location.href = "http://localhost:3000";
      };

      saveAuthTokens();
    }
  }, [authCode]);

  return <></>;
};
