import { PlatformBlock, SpotifyButton, StravaButton } from "./components";

import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: #d3d3d3;
  width: 400px;
  font-weight: 400;
  padding: 10px 140px;
  border-radius: 12px;
  margin-bottom: 80px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const LoginBox = () => (
  <Main>
    <PlatformBlock>
      <p>Spotify</p>
      <SpotifyButton href="spotify.com">Login with Spotify</SpotifyButton>
    </PlatformBlock>
    <PlatformBlock>
      <p>Strava</p>
      <StravaButton href="strava.com">Login with Strava</StravaButton>
    </PlatformBlock>
  </Main>
);
