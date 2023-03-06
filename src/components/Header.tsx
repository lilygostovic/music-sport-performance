import { icon } from "../images/index";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 12px;
  margin-bottom: 64px;

  border-bottom: 1px solid lightgrey;
`;

const Title = styled.header`
  font-size: 20px;
  padding-left: 12px;
`;

export const Header = () => (
  <HeaderDiv>
    <img src={icon} alt="stick man running on musical notes" width="24" height="24" />
    <Title>Music Sports Performance Analysis</Title>
  </HeaderDiv>
);
