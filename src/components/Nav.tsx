import { icon } from "../images/index";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 12px;

  border-bottom: 1px solid lightgrey;
`;

const Title = styled.header`
  font-size: 20px;
  padding-left: 12px;
`;

interface NavProps {
  marginBottom?: string;
}

export const Nav = ({ marginBottom }: NavProps) => (
  <Main style={{ marginBottom }}>
    <img src={icon} alt="stick man running on musical notes" width="24" height="24" />
    <Title>Music Sports Performance Analysis</Title>
  </Main>
);
