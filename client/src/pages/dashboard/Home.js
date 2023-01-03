import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/HomePage";
import { useEffect, useState } from "react";
import {
  getLatestMatches,
  getStandings,
  getUpcomingMatches,
} from "../../utils/api";
import MatchItem from "../../components/MatchItem/MatchItem";
import Button from "@mui/material/Button";
import { referees } from "../../utils/constants";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const [latestMatches, setLatestMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [topReferees, setTopReferees] = useState([]);
  const [standings, setStandings] = useState(null);

  const { user, getRefereesRatings, refereesRatings } = useAppContext();

  useEffect(() => {
    getLatestMatches(user?.type === "fan" ? 7 : 5).then((results) => {
      setLatestMatches(results);
    });
    getUpcomingMatches().then((results) => {
      setUpcomingMatches(results);
    });
    getRefereesRatings();
    getStandings().then((results) => {
      setStandings(results);
    });
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
          {["expert", "club", "investigator"].includes(user?.type) ? (
            <div className="objections-div">
              <p className="objections-helper-text">
                {user?.type === "investigator"
                  ? "Investigate and resolve expert and club objections."
                  : "Have an objection about a referee's performance in a certain match? Make it here."}
              </p>
              <Button onClick={() => navigate("/objection")} variant="outlined">
                {user?.type === "investigator"
                  ? "Check Objections"
                  : "Make An Objection"}
              </Button>
            </div>
          ) : null}
          {["observer"].includes(user?.type) ? (
            <div className="objections-div">
              <p className="objections-helper-text">
                Have un-added observer reports? Manage and add your reports
                here.
              </p>
              <Button onClick={() => navigate("/reports")} variant="outlined">
                Manage Reports
              </Button>
            </div>
          ) : null}
          {["assigner"].includes(user?.type) ? (
            <div className="objections-div">
              <p className="objections-helper-text">
                Assign referees to unassigned matches here.
              </p>
              <Button onClick={() => navigate("/")} variant="outlined">
                Assign Referees
              </Button>
            </div>
          ) : null}
          {user?.type === "fan" ? (
            <>
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
                  topReferees.slice(0, 3).map((referee, idx) => (
                    <div key={idx} className="referee-container">
                      <div className="referee-info-container">
                        <img
                          alt=""
                          className="image referee-image"
                          width="42"
                          height="42"
                          src={referee.image}
                        />
                        <a
                          href={"/referees/" + referee.id}
                          className="styled-link"
                        >
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
            </>
          ) : null}
        </div>
      </div>
      {user?.type === "fan" ? null : (
        <>
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
              topReferees.slice(0, 3).map((referee, idx) => (
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
        </>
      )}
      <section className="css-league-table-section">
        <div className="card-css">
          <div>
            <h3 className="league-table-header">Super Lig 2022/2023</h3>
            <section className="league-overview-table-css">
              <div className="card-css">
                <article className="league-table-container">
                  <table className="css-league-table">
                    <thead>
                      <tr className="css-table-header-row">
                        <th scope="col" className="css-header-item-1">
                          #
                        </th>
                        <th scope="col" className="css-header-item-2">
                          Team
                        </th>
                        <th scope="col" className="css-header-item-3">
                          PL
                        </th>
                        <th scope="col" className="css-header-item-3">
                          W
                        </th>
                        <th scope="col" className="css-header-item-3">
                          D
                        </th>
                        <th scope="col" className="css-header-item-3">
                          L
                        </th>
                        <th scope="col" className="css-header-item-3">
                          +/-
                        </th>
                        <th scope="col" className="css-header-item-3">
                          GD
                        </th>
                        <th scope="col" className="css-header-item-3">
                          PTS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings !== null
                        ? standings.league.standings[0].map((team, index) => (
                            <tr
                              key={index}
                              className={
                                "table-team-row" +
                                (team.description ===
                                "Promotion - Champions League (Qualification)"
                                  ? " table-team-row-clq"
                                  : team.description ===
                                    "Promotion - Europa Conference League (Qualification)"
                                  ? " table-team-row-elq"
                                  : team?.description?.includes("Relegation")
                                  ? " table-team-row-relegation"
                                  : "")
                              }
                            >
                              <td className="css-cell">{team.rank}</td>
                              <td className="css-cell-2">
                                <div className="team-cell-content-css">
                                  <a className="team-cell-content-link">
                                    <img
                                      alt=""
                                      className="image team-icon"
                                      width="22"
                                      height="22"
                                      src={team.team.logo}
                                    />
                                    <span className="css-team-name">
                                      {team.team.name}
                                    </span>
                                  </a>
                                </div>
                              </td>
                              <td className="css-cell">{team.all.played}</td>
                              <td className="css-cell">{team.all.win}</td>
                              <td className="css-cell">{team.all.draw}</td>
                              <td className="css-cell">{team.all.lose}</td>
                              <td className="css-cell">
                                {team.all.goals.for}-{team.all.goals.against}
                              </td>
                              <td className="css-cell">{team.goalsDiff}</td>
                              <td className="css-cell">{team.points}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                  <div className="css-legend-wrapper">
                    <ul className="css-qual-block">
                      <li>
                        <i className="css-qual-icon-1"></i>Champions League
                        qualification
                      </li>
                      <li>
                        <i className="css-qual-icon-2"></i>Europa Conference
                        League Qualification
                      </li>
                      <li>
                        <i className="css-qual-icon-3"></i>Relegation
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
