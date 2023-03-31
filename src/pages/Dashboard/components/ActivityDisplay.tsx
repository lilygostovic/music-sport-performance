import styled from "styled-components";

const Main = styled.div`
  width: 400px;
  border: 0.5px solid lightgray;

  padding: 0px 14px;
`;

interface ActivityRowProps {
  title: string;
  date: Date;
  distance: number;
  hr: number;
  effort: number;
}

const ActivityRow = ({ title, date, distance, hr, effort }: ActivityRowProps) => (
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
    <text style={{ fontSize: 20, marginBottom: "12px" }}>{title}</text>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <text>{date.toDateString()}</text>
      <text>{distance.toPrecision(3)} km</text>
      <text>{hr} bpm</text>
      <text>{effort}%</text>
    </div>
  </div>
);

export const ActivityDisplay = () => {
  const date = new Date();
  const activities = [
    {
      id: 1,
      title: "Morning Run",
      date,
      distance: 4.4,
      hr: 172,
      effort: 78,
    },
    {
      id: 2,
      title: "Evening Run",
      date,
      distance: 5.2,
      hr: 175,
      effort: 80,
    },
    {
      id: 3,
      title: "Morning Run",
      date,
      distance: 6.5,
      hr: 176,
      effort: 83,
    },
    {
      id: 4,
      title: "Afternoon Run",
      date,
      distance: 6.46,
      hr: 180,
      effort: 84,
    },
    {
      id: 5,
      title: "Afternoon Run",
      date,
      distance: 5.7,
      hr: 177,
      effort: 84,
    },
    {
      id: 6,
      title: "Morning Run",
      date,
      distance: 7.5,
      hr: 179,
      effort: 88,
    },
  ];

  return (
    <Main>
      <h1 style={{ fontWeight: "20" }}>Activities</h1>
      {activities.map((activity) => (
        <ActivityRow
          key={activity.id}
          title={activity.title}
          date={activity.date}
          distance={activity.distance}
          hr={activity.hr}
          effort={activity.effort}
        />
      ))}
    </Main>
  );
};
