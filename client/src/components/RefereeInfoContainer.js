import RefereeStatsGoalIcon from "../assets/images/referee-stats-goal-icon.svg";
import RefereeStatsYellowCardIcon from "../assets/images/referee-stats-yellow-card-icon.svg";
import RefereeStatsRedCardIcon from "../assets/images/referee-stats-red-card-icon.svg";
import RefereeStatsPenaltyIcon from "../assets/images/referee-stats-penalty-icon.svg";

import PropTypes from "prop-types";
import { getRatingColor } from "../utils/helper";

const RefereeInfoContainer = ({
  homeAvgGoal,
  awayAvgGoal,
  homeAvgYellow,
  awayAvgYellow,
  homeAvgRed,
  awayAvgRed,
  region,
  licenseNumber,
}) => {
  const fanRating = "-";
  const overallRating = "-";
  const expertRating = "-";
  const fanSentiment = "-";
  const overallSentiment = "-";
  const expertSentiment = "-";

  return (
    <div className="referee-rating-section-css">
      <div className="referee-page-card-css">
        <section className="referee-stats-section-css">
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title">
              <span>Home Avg. </span>
              <img src={RefereeStatsGoalIcon} />
            </div>
            <b className="referee-stat-value">{homeAvgGoal}</b>
          </div>
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title">
              <span>Home Avg. </span>
              <img src={RefereeStatsYellowCardIcon} />
            </div>
            <b className="referee-stat-value">{homeAvgYellow}</b>
          </div>
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title">
              <span>Home Avg. </span>
              <img src={RefereeStatsRedCardIcon} />
            </div>
            <b className="referee-stat-value">{homeAvgRed}</b>
          </div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title">
              <span>Away Avg. </span>
              <img src={RefereeStatsGoalIcon} />
            </div>
            <b className="referee-stat-value">{awayAvgGoal}</b>
          </div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title">
              <span>Away Avg. </span>
              <img src={RefereeStatsYellowCardIcon} />
            </div>
            <b className="referee-stat-value">{awayAvgYellow}</b>
          </div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title">
              <span>Away Avg. </span>
              <img src={RefereeStatsRedCardIcon} />
            </div>
            <b className="referee-stat-value">{awayAvgRed}</b>
          </div>
        </section>
      </div>
      <div className="referee-page-card-css">
        <section className="referee-info-section-css">
          <h2 className="referee-info-header">Referee info</h2>
          <div className="css-separator"></div>
          <div className="css-info-section">
            <h3 className="css-region-header">Region</h3>
            <span className="css-info-text">{region}</span>
          </div>
          <div className="css-separator"></div>
          <div className="css-info-section">
            <h3 className="css-license-number-header">TFF License Number</h3>
            <span className="css-info-text">{licenseNumber}</span>
          </div>
        </section>
      </div>
      <div className="referee-page-card-css">
        <section className="referee-stats-section-css referee-rating-card-css">
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title-rating">Overall Rating</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor: getRatingColor(overallRating),
              }}
            >
              <span>{overallRating}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title-rating">Fan Rating</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor: getRatingColor(fanRating),
              }}
            >
              <span>{fanRating}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title-rating">Expert Rating</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor: getRatingColor(expertRating),
              }}
            >
              <span>{expertRating}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title-rating">Overall Sentiment</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor: getRatingColor(overallSentiment),
              }}
            >
              <span>{overallSentiment}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title-rating">Fan Sentiment</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor: getRatingColor(fanSentiment),
              }}
            >
              <span>{fanSentiment}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title-rating">Expert Sentiment</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor: getRatingColor(expertSentiment),
              }}
            >
              <span>{expertSentiment}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

RefereeInfoContainer.propTypes = {
  homeAvgGoal: PropTypes.string,
  awayAvgGoal: PropTypes.string,
  homeAvgYellow: PropTypes.string,
  awayAvgYellow: PropTypes.string,
  homeAvgRed: PropTypes.string,
  awayAvgRed: PropTypes.string,
  region: PropTypes.string,
  licenseNumber: PropTypes.string,
};

RefereeInfoContainer.defaultProps = {
  homeAvgGoal: "-",
  awayAvgGoal: "-",
  homeAvgYellow: "-",
  awayAvgYellow: "-",
  homeAvgRed: "-",
  awayAvgRed: "-",
  region: "-",
  licenseNumber: "-",
};

export default RefereeInfoContainer;
