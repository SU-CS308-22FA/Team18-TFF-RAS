import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/HomePage";
import { useEffect, useState } from "react";
import { getLatestMatches } from "../../utils/api";
import MatchItem from "../../components/MatchItem/MatchItem";

const Home = () => {
  const [matches, setMatches] = useState([]);

  const { user } = useAppContext();

  useEffect(() => {
    getLatestMatches().then((latestMatches) => {
      setMatches(latestMatches);
    });
  }, []);

  return (
    <Wrapper>
      <div className="row">
        <div className="div">
          <h3>Latest matches</h3>
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
        <div className="div" />
      </div>
    </Wrapper>
  );
};

export default Home;
