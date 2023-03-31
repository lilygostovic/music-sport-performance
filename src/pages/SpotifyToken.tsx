import { useEffect } from "react";

export const SpotifyToken = () => {
  const params = new URLSearchParams(location.search);
  const authCode = params.get("code");

  const SPOTIFY_CLIENT_ID: string = process.env.REACT_APP_SPOTIFY_CLIENT_ID as string;
  const SPOTIFY_CLIENT_SECRET: string = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET as string;
  const SPOTIFY_REDIRECT_URI: string = process.env.REACT_APP_SPOTIFY_REDIRECT_URI as string;

  useEffect(() => {
    if (authCode !== null) {
      const saveAuthTokens = async () => {
        const res = await fetch(
          `http://www.spotify.com/api/token?grant_type=authorization_code&code=${authCode}&redirect_uri=${SPOTIFY_REDIRECT_URI}`,
          {
            method: "POST",
            headers: {
              Authorization:
                "Basic " +
                Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString("base64"),
              "Content-Type": "application/x-www-form-urlencoded",
            },
          },
        );
        const json = await res.json();

        console.log("json: ", json);
      };

      saveAuthTokens().catch((err) => {
        console.log(err);
      });
    }
  }, [authCode]);

  return <></>;
};
