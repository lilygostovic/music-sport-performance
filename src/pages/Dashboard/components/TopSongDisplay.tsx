import styled from "styled-components";

const Main = styled.div`
  width: 400px;
  border: 0.5px solid lightgray;

  padding: 0px 14px;
`;

interface TopSongDisplayProps {
  rank: number;
  title: string;
  artist: string;
}

const SongRow = ({ rank, title, artist }: TopSongDisplayProps) => (
  <div
    style={{
      backgroundColor: "#e9e8e8",
      borderRadius: "4px",

      display: "flex",
      flexDirection: "column",

      margin: "10px 0px",
      padding: "18px",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
    }}>
    <text style={{ fontSize: 18 }}>
      {rank}) {title}, {artist}
    </text>
  </div>
);

export const TopSongDisplay = () => {
  const songs = [
    {
      id: 1,
      title: "Intro",
      artist: "The xx",
    },
    {
      id: 2,
      title: "Wildcard",
      artist: "Miley Cyrus",
    },
    {
      id: 3,
      title: "Feel It Too",
      artist: "RONA.",
    },
    {
      id: 4,
      title: "Pegasus",
      artist: "MEDUZA",
    },
    {
      id: 5,
      title: "The Bad Touch",
      artist: "Bloodhound Gang",
    },
    {
      id: 6,
      title: "Blackwater",
      artist: "Octave One",
    },
    {
      id: 7,
      title: "On Fire",
      artist: "Set Mo",
    },
    {
      id: 8,
      title: "Pegasus",
      artist: "Eli & Fur",
    },
    {
      id: 9,
      title: "Samara",
      artist: "Blanco White",
    },
    {
      id: 10,
      title: "New Gold",
      artist: "Gorillaz",
    },
  ];

  return (
    <Main>
      <h1 style={{ fontWeight: "20" }}>Top Running Songs</h1>
      {songs.map((song) => (
        <SongRow key={song.id} rank={song.id} title={song.title} artist={song.artist} />
      ))}
    </Main>
  );
};
