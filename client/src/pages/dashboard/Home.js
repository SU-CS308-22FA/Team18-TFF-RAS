import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/HomePage";
import { useEffect, useState } from "react";
import { getLatestMatches, getUpcomingMatches } from "../../utils/api";
import MatchItem from "../../components/MatchItem/MatchItem";
import { referees } from "../../utils/constants";

const Home = () => {
  const [latestMatches, setLatestMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [topReferees, setTopReferees] = useState([]);

  const { user, getRefereesRatings, refereesRatings } = useAppContext();

  useEffect(() => {
    getLatestMatches().then((results) => {
      setLatestMatches(results);
    });
    getUpcomingMatches().then((results) => {
      setUpcomingMatches(results);
    });
    getRefereesRatings();
  }, []);

  useEffect(() => {
    if (Object.keys(refereesRatings).length !== 0) {
      let temp = [...referees].map((referee) => ({
        ...referee,
        displayValue: Object.keys(refereesRatings).includes(referee.id)
          ? refereesRatings[referee.id].rating.rating
          : "-",
      }));
      temp.sort((a, b) => {
        let numberA = a.displayValue === "-" ? 0 : parseFloat(a.displayValue);
        let numberB = b.displayValue === "-" ? 0 : parseFloat(b.displayValue);
        if (numberA !== numberB) {
          return numberB - numberA;
        } else {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        }
      });
      setTopReferees([...temp]);
    }
  }, [refereesRatings]);

  return (
    <Wrapper>
      <div className="row">
        <div className="div">
          <div className="title-container">
            <h3>Latest matches</h3>
            <a href="/matches">See All</a>
          </div>
          <div
            className="matches-container"
            style={
              latestMatches.length > 0
                ? { height: latestMatches.length * 70 + "px" }
                : { alignItems: "center", justifyItems: "center" }
            }
          >
            {latestMatches.length > 0 ? (
              latestMatches.map((match, idx) => (
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
        <div className="div">
          <div className="title-container">
            <h3>Upcoming matches</h3>
            <a href="/matches">See All</a>
          </div>
          <div
            className="matches-container"
            style={
              upcomingMatches.length > 0
                ? { height: upcomingMatches.length * 70 + "px" }
                : { alignItems: "center", justifyItems: "center" }
            }
          >
            {upcomingMatches.length > 0 ? (
              upcomingMatches.map((match, idx) => (
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
          <div className="title-container referees-title">
            <h3>Top referees</h3>
            <a href="/referees">See All</a>
          </div>
          <div
            className="matches-container"
            style={
              topReferees.length > 0
                ? {}
                : { alignItems: "center", justifyItems: "center" }
            }
          >
            {topReferees.length > 0 ? (
              topReferees.map((referee, idx) => (
                <div key={idx} className="referee-container">
                  <div className="referee-info-container">
                    <img
                      alt=""
                      className="image referee-image"
                      width="42"
                      height="42"
                      src={referee.image}
                    />
                    <a href={"/referees/" + referee.id} className="styled-link">
                      {referee.name}
                    </a>
                  </div>
                  <span className="referee-rating-span">
                    {referee.displayValue}
                    {referee.displayValue !== "-" ? "/5.00" : ""}
                  </span>
                </div>
              ))
            ) : (
              <p className="no-matches-container">No stats</p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
