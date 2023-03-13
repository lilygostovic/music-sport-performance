import { GoButton, LoginBox, Main, Nav, Subheader } from "../components";

import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin: 0px;
  padding: 0px 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Home = () => (
  <Main>
    <Nav marginBottom="64px" />
    <Content>
      <Subheader>
        Log in to your Strava and Spotify profiled and click the button below to see what music
        helps you perform your best.
      </Subheader>
      <LoginBox />
      <GoButton>PERFORM ANALYSIS</GoButton>
    </Content>
  </Main>
);
