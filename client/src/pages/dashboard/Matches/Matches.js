import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import MatchItem from "../../../components/MatchItem/MatchItem";
import { getMatches } from "../../../utils/api";
import "./Matches.css";
import moment from "moment";

const Matches = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [matches, setMatches] = useState([]);

  const onDateSelect = (newDate) => {
    console.log(moment(newDate).format("YYYY-MM-DD"));
    setCurrentDate(newDate);
  };

  useEffect(() => {
    getMatches(moment(currentDate).format("YYYY-MM-DD")).then((data) =>
      setMatches(data)
    );
  }, [currentDate]);

  return (
    <div className="matches-page-container">
      <Calendar onChange={onDateSelect} value={currentDate} />
      <div
        className="matches-container"
        style={
          matches.length > 0
            ? { height: matches.length * 70 + "px" }
            : { alignItems: "center", justifyItems: "center" }
        }
      >
        {matches.length > 0 ? (
          matches.map((match, idx) => (
            <MatchItem
              key={idx}
              link={"/matches/" + match.fixture.id}
              homeTeam={match.teams.home.name}
              awayTeam={match.teams.away.name}
              homeTeamImg={match.teams.home.logo}
              awayTeamImg={match.teams.away.logo}
              matchTime={new Date(match.fixture.date)
                .toTimeString()
                .slice(0, 5)}
              matchScore={match.goals.home + "-" + match.goals.away}
              currentTime={73}
              status={match.fixture.status.short}
            />
          ))
        ) : (
          <p className="no-matches-container">No matches</p>
        )}
      </div>
    </div>
  );
};

export default Matches;
