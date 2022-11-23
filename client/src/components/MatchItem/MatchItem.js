/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./MatchItem.css";

const MatchItem = ({
  link,
  homeTeam,
  awayTeam,
  homeTeamImg,
  awayTeamImg,
  matchTime,
  matchScore,
  currentTime,
  status,
}) => {
  return (
    <Link to={link} className="match-item">
      <span className="match-item-team-name">{homeTeam}</span>
      <img
        className="match-item-team-img"
        width={25}
        height={25}
        src={homeTeamImg}
      />
      <div className="match-item-details-container">
        {["TBD"].includes(status) ? (
          <span className="match-item-score">TBD</span>
        ) : ["NS", "PST", "CANC", "ABD", "AWD", "WO"].includes(status) ? (
          <>
            <span
              className="match-item-time"
              style={status != "NS" ? { textDecoration: "line-through" } : {}}
            >
              {matchTime}
            </span>
            {status === "NS" ? null : (
              <span className="match-item-ft">{status}</span>
            )}
          </>
        ) : (
          <>
            <span className="match-item-score">{matchScore}</span>
            <span
              className={
                ["HT", "BT", "P", "SUSP", "INT", "FT", "AET", "PEN"].includes(
                  status
                )
                  ? "match-item-ft"
                  : "match-item-live"
              }
            >
              {["HT", "BT", "P", "SUSP", "INT", "FT", "AET", "PEN"].includes(
                status
              )
                ? status
                : currentTime + "'"}
            </span>
          </>
        )}
      </div>
      <img
        className="match-item-team-img"
        width={25}
        height={25}
        src={awayTeamImg}
      />
      <span className="match-item-team-name">{awayTeam}</span>
    </Link>
  );
};

export default MatchItem;
