import { PlatformConnectButton } from "./PlatformConnectButton";
import styled from "styled-components";

const PlatformDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 52px 0px;
  padding: 28px 40px;

  border-radius: 8px;
  background-color: #f3f1f1;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

interface PlatformBlockProps {
  variant: "spotify" | "strava";
  token: string;
  authLink: string;
}

export const PlatformBlock = ({ variant, token, authLink }: PlatformBlockProps) => {
  const color = variant === "spotify" ? "#1db954" : "#fc4c02";
  const platform = variant === "spotify" ? "Spotify" : "Strava";
  const text = `Login with ${platform}`;

  const isConnected = token !== ""; // todo:: why is this not updating

  // useEffect(() => {
  //   isConnected = token !== "";
  // }, [token]);

  return (
    <PlatformDiv>
      <p>{platform}</p>
      <PlatformConnectButton
        onClick={() => {
          window.open(authLink);
        }}
        color={color}
        disabled={isConnected}>
        {isConnected ? "Connected" : text}
      </PlatformConnectButton>
    </PlatformDiv>
  );
};
