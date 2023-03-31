import { PlatformBlock } from "./components";
import React from "react";
import styled from "styled-components";

const SPOTIFY_AUTH_ENPOINT = "https://accounts.spotify.com/authorize";
const STRAVA_AUTH_ENPOINT = "https://www.strava.com/oauth/authorize";

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
  // todo:: change logic to deal with refresh token
  const spotifyToken = localStorage.getItem("spotifyAccessToken");
  const stravaToken = localStorage.getItem("stravaAccessToken");

  const SPOTIFY_CLIENT_ID: string = process.env.REACT_APP_SPOTIFY_CLIENT_ID as string;
  const SPOTIFY_REDIRECT_URI: string = process.env.REACT_APP_SPOTIFY_REDIRECT_URI as string;
  const STRAVA_CLIENT_ID: string = process.env.REACT_APP_STRAVA_CLIENT_ID as string;
  const STRAVA_REDIRECT_URI: string = process.env.REACT_APP_STRAVA_REDIRECT_URI as string;
  const RESPONSE_TYPE = "code";

  return (
    <Main>
      <PlatformBlock
        variant="spotify"
        token={spotifyToken}
        authLink={`${SPOTIFY_AUTH_ENPOINT}/?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      />
      <PlatformBlock
        variant="strava"
        token={stravaToken}
        authLink={`${STRAVA_AUTH_ENPOINT}?client_id=${STRAVA_CLIENT_ID}&redirect_uri=${STRAVA_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      />
    </Main>
  );
};
