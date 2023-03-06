import { GoButton, Header, LoginBox, Subheader } from "../components";

import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Lora", sans-serif;
  font-weight: 12;
`;

const Content = styled.div`
  margin: 0px;
  padding: 0px 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Home = () => (
  <Main>
    <Header />
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
