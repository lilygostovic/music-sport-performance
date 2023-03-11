import React, { useEffect, useState } from "react";

import { PlatformBlock } from "./components";
import styled from "styled-components";

const SPOTIFY_CLIENT_ID = "be8e28dfcbf94c2f82164ff01422efa3";
const SPOTIFY_REDIRECT_URI = "https://localhost:3000";
const SPOTIFY_AUTH_ENPOINT = "https://accounts.spotify.com/authorize";

const STRAVA_CLIENT_ID = "103468";
const STRAVA_REDIRECT_URI =
  "https://localhost:3000/exchange_token&approval_prompt=force&scope=read"; // doesnt have 3000 in docs
const STRAVA_AUTH_ENPOINT = "https://www.strava.com/oauth/authorize";

const RESPONSE_TYPE = "code";

const Main = styled.div`
  background-color: #d3d3d3;
  width: 400px;
  font-weight: 400;
  padding: 10px 140px;
  border-radius: 12px;
  margin-bottom: 80px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const LoginBox = () => {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [stravaToken, setStravaToken] = useState("");

  useEffect(() => {
    // const { search } = window.location;
    // let authCode = window.localStorage.getItem("token");

    setSpotifyToken("");
    setStravaToken("");
  }, []);

  return (
    <Main>
      <PlatformBlock
        variant="spotify"
        token={spotifyToken}
        authLink={`${SPOTIFY_AUTH_ENPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      />
      <PlatformBlock
        variant="strava"
        token={stravaToken}
        authLink={`${STRAVA_AUTH_ENPOINT}?client_id=${STRAVA_CLIENT_ID}&redirect_uri=${STRAVA_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      />
      {/* <PlatformBlock>
        <p>Spotify</p>
        {spotifyToken === "" ? (
          <SpotifyButton
            href={`${SPOTIFY_AUTH_ENPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login with Spotify
          </SpotifyButton>
        ) : (
          <ConnectedSpotifyButton>
            <strong>Connected</strong>
          </ConnectedSpotifyButton>
        )}
      </PlatformBlock> */}
      {/* <PlatformBlock>
        <p>Strava</p>
        {stravaToken === "" ? (
          <StravaButton
            href={`${STRAVA_AUTH_ENPOINT}?client_id=${STRAVA_CLIENT_ID}&redirect_uri=${STRAVA_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login with Strava
          </StravaButton>
        ) : (
          <ConnectedStravaButton href="strava.com">
            <strong>Connected</strong>
          </ConnectedStravaButton>
        )}
      </PlatformBlock> */}
    </Main>
  );
};
