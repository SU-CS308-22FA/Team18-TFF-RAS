import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import MatchItem from "../../../components/MatchItem/MatchItem";
import { getMatches } from "../../../utils/api";
import "./Matches.css";

const Matches = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const onDateSelect = (newDate) => {
    console.log(newDate);
    setCurrentDate(newDate);
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div>
      <h1>Matches Page</h1>
      <Calendar onChange={onDateSelect} value={currentDate} />
      <MatchItem
        link="/"
        homeTeam="Fenerbahce"
        awayTeam="Galatasaray"
        homeTeamImg="https://media.api-sports.io/football/teams/1002.png"
        awayTeamImg="https://media.api-sports.io/football/teams/3577.png"
        isUpcoming={false}
        matchTime="23:00"
        matchScore="1-2"
        isOver={false}
        currentTime={73}
      />
    </div>
  );
};

export default Matches;
