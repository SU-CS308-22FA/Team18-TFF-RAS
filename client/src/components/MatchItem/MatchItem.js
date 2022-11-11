/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./MatchItem.css";

const MatchItem = ({
  link,
  homeTeam,
  awayTeam,
  homeTeamImg,
  awayTeamImg,
  isUpcoming,
  matchTime,
  matchScore,
  isOver,
  currentTime,
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
        {isUpcoming ? (
          <span className="match-item-time">{matchTime}</span>
        ) : (
          <>
            <span className="match-item-score">{matchScore}</span>
            <span className={isOver ? "match-item-ft" : "match-item-live"}>
              {isOver ? "FT" : currentTime + "'"}
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
