import styled, { css } from "styled-components";

export const PlatformConnectButton = styled.button`
  text-decoration: none;
  padding: 12px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ color }) =>
    css`
      background-color: ${color};
    `};
  ${({ disabled = false }) =>
    disabled &&
    css`
      pointer-events: none;
    `};
`;

export const SpotifyButton = styled.a`
  background-color: #1db954;
  text-decoration: none;
  padding: 12px 20px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;
// export const ConnectedSpotifyButton = styled.a`
//   border: 1px solid #1db954;
//   text-decoration: none;
//   padding: 12px 20px;
//   font-size: 12px;
//   color: #1db954;
//   border-radius: 4px;
//   pointer-events: none;
//   background-color: #000000;
// `;

// export const StravaButton = styled.a`
//   background-color: #fc4c02;
//   text-decoration: none;
//   padding: 12px 20px;
//   color: white;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// export const ConnectedStravaButton = styled.a`
//   border: 1px solid #fc4c02;
//   text-decoration: none;
//   padding: 12px 20px;
//   font-size: 12px;
//   color: #fc4c02;
//   border-radius: 4px;
//   pointer-events: none;
//   background-color: #000000;
// `;
