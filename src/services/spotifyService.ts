const storeAuthToken = async (authCode: string) => {
  const SPOTIFY_CLIENT_ID: string = process.env.REACT_APP_SPOTIFY_CLIENT_ID as string;
  const SPOTIFY_CLIENT_SECRET: string = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET as string;
  const SPOTIFY_REDIRECT_URI: string = process.env.REACT_APP_SPOTIFY_REDIRECT_URI as string;

  const saveAuthTokens = async () => {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: authCode,
      redirect_uri: SPOTIFY_REDIRECT_URI,
    });

    console.log("1============");

    const res = await fetch(`http://www.spotify.com/api/token?${params.toString()}/`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    console.log("2============");

    const json = await res.json();

    console.log("json: ", json);
  };

  saveAuthTokens().catch((err) => {
    console.log(err);
  });
};

export const spotifyService = {
  storeAuthToken,
};
