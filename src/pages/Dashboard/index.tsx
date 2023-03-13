import { ActivityDisplay, Overview, TopSongDisplay } from "./components";
import { Main, Nav } from "../../components";

import React from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 80vw;

  display: flex;
  justify-content: space-between;
`;

export const Dashboard = () => (
  <Main>
    <Nav marginBottom="64px" />
    <Overview />
    <Content>
      <ActivityDisplay />
      <TopSongDisplay />
    </Content>
  </Main>
);
