import React from "react";

interface TopGenreSongProps {
  rank: number;
  title: string;
  artist: string;
}

const TopGenreSong = ({ rank, title, artist }: TopGenreSongProps) => (
  <div
    style={{
      display: "flex",
      opacity: 0.75,
      backgroundColor: "white",
      borderRadius: "4px",
      padding: "10px",
      margin: "4px",
    }}>
    <text>
      {rank}) {title}, {artist}
    </text>
  </div>
);

export const Overview = () => {
  const topGenre = "euphoric deep house";

  return (
    <div
      style={{
        backgroundColor: "#fff3e0",
        borderRadius: "8px",
        margin: "0px 10vw 72px 10vw",
        padding: "0px 36px 30px 36px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <h3 style={{ fontWeight: 300 }}>Your top running genre is:</h3>
      <h1 style={{ fontWeight: 500 }}>{`${topGenre}`.toUpperCase()}</h1>
      <text style={{ lineHeight: 1.5, textAlign: "center", marginBottom: "12px" }}>
        This genre of music has a bpm of between 160-170. This album can be described as euphoric,
        meaning it evokes feelings of euphoria and happiness within. It is melodic, meaning that it
        has a clear sense of rhythm which stays consistent throughout. Some examples of your top $
        {topGenre} songs include:
      </text>
      <TopGenreSong rank={1} title={"Intro"} artist={"The XX"} />
      <TopGenreSong rank={2} title={"The Holy"} artist={"Chris Luno"} />
      <TopGenreSong rank={3} title={"Tearing me up"} artist={"Bob Moses"} />
    </div>
  );
};
