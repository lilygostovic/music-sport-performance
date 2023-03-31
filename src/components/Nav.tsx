import { Link } from "react-router-dom";
import { icon } from "../images/index";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  display: flex;
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

const NoAuthNav = ({ marginBottom }: NavProps) => (
  <Main style={{ marginBottom, justifyContent: "center" }}>
    <img src={icon} alt="stick man running on musical notes" width="24" height="24" />
    <Title>Music Sports Analysis</Title>
  </Main>
);

const NavOption = styled(Link)`
  margin: 0px 12px;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease;
  &:hover {
    color: darkgrey;
  }
  &.icon {
    margin: 0px;
  }
  &.home {
    margin: 0px 12px 0px 0px;
  }
  &.active {
    font-weight: 400;
    color: black;
  }
`;

const AuthNav = ({ marginBottom }: NavProps) => {
  const isTopSongs = false; // todo:: get real value
  const isTopGenres = false; // todo:: get real value

  return (
    <Main style={{ marginBottom, paddingLeft: "20vw", justifyContent: "flex-start" }}>
      <NavOption className="icon" to="/">
        <img src={icon} alt="stick man running on musical notes" width="24" height="24" />
      </NavOption>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavOption to="/" className="home">
          <Title style={{ marginRight: "10px" }}>Music Sports Analysis</Title>
        </NavOption>
        <NavOption className={isTopSongs ? "active" : ""} to="/top-songs">
          Top Songs
        </NavOption>
        <NavOption className={isTopGenres ? "active" : ""} to="/top-genres">
          Top Genres
        </NavOption>
      </div>
    </Main>
  );
};

export const Nav = ({ marginBottom }: NavProps) => {
  const isAuthenticated = true; // todo:: get real auth value

  return isAuthenticated ? (
    <AuthNav marginBottom={marginBottom} />
  ) : (
    <NoAuthNav marginBottom={marginBottom} />
  );
};
