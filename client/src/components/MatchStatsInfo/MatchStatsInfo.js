import "../MatchGeneralInfo/MatchGeneralInfo.css";
import PropTypes from "prop-types";

const MatchStatsInfo = ({ data }) => {
  let homeStatistics = data[0].statistics;
  let awayStatistics = data[1].statistics;

  let homePossession = null;
  let awayPossession = null;

  for (let i = 0; i < homeStatistics.length; i++) {
    if (homeStatistics[i].type === "Ball Possession") {
      homePossession = parseInt(homeStatistics[i].value.slice(0, 2));
      break;
    }
  }

  for (let i = 0; i < awayStatistics.length; i++) {
    if (awayStatistics[i].type === "Ball Possession") {
      awayPossession = parseInt(awayStatistics[i].value.slice(0, 2));
      break;
    }
  }

  return (
    <div className="mf-stats card-css">
      <section className="stat-wrapper">
        <header className="stats-title-container">
          <h2 className="stats-title">Top Stats</h2>
        </header>
        <section className="stats-expandable-card-container-style">
          <div className="top-stats-container-common-title-css">
            <div className="stats-possession-wheel">
              <span>Ball possession</span>
              <div>
                <img
                  alt=""
                  className="Image stats-team-icon"
                  width="35"
                  height="35"
                  src={data[0].team.logo}
                />
                <svg width="200px" height="200px" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeDasharray={`${awayPossession} ${homePossession}`}
                    strokeWidth="2"
                    stroke={
                      awayPossession >= homePossession ? "#921e1e" : "#DC143C"
                    }
                    pathLength="100"
                  ></path>
                  <path
                    strokeDasharray={`0 ${awayPossession} ${homePossession} 0`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeWidth="2"
                    stroke={
                      awayPossession >= homePossession ? "#DC143C" : "#921e1e"
                    }
                    pathLength="100"
                  ></path>
                </svg>
                <img
                  alt=""
                  className="Image stats-team-icon"
                  width="35"
                  height="35"
                  src={data[1].team.logo}
                />
              </div>
              <div>
                <span color="#fff" className="stats-percentage-value">
                  {homePossession}%
                </span>
                <span color="#fff" className="stats-percentage-value">
                  {awayPossession}%
                </span>
              </div>
            </div>
            <ul className="stat-group-container">
              <li className="stat">
                <span
                  className={
                    homeStatistics[2].value > awayStatistics[2].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {homeStatistics[2].value}
                </span>
                <span className="stat-default-title stat-value-title">
                  Total shots
                </span>
                <span
                  className={
                    homeStatistics[2].value < awayStatistics[2].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {awayStatistics[2].value}
                </span>
              </li>
              <li className="stat">
                <span
                  className={
                    homeStatistics[14].value > awayStatistics[14].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {homeStatistics[14].value} ({homeStatistics[15].value})
                </span>
                <span className="stat-default-title stat-value-title">
                  Accurate passes
                </span>
                <span
                  className={
                    homeStatistics[14].value < awayStatistics[14].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {awayStatistics[14].value} ({awayStatistics[15].value})
                </span>
              </li>
              <li className="stat">
                <span
                  className={
                    homeStatistics[6].value < awayStatistics[6].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {homeStatistics[6].value}
                </span>
                <span className="stat-default-title stat-value-title">
                  Fouls committed
                </span>
                <span
                  className={
                    homeStatistics[6].value > awayStatistics[6].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {awayStatistics[6].value}
                </span>
              </li>
              <li className="stat">
                <span
                  className={
                    homeStatistics[8].value < awayStatistics[8].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {homeStatistics[8].value}
                </span>
                <span className="stat-default-title stat-value-title">
                  Offsides
                </span>
                <span
                  className={
                    homeStatistics[8].value > awayStatistics[8].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {awayStatistics[8].value}
                </span>
              </li>
              <li className="stat">
                <span
                  className={
                    homeStatistics[7].value > awayStatistics[7].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {homeStatistics[7].value}
                </span>
                <span className="stat-default-title stat-value-title">
                  Corners
                </span>
                <span
                  className={
                    homeStatistics[7].value < awayStatistics[7].value
                      ? "stat-value-won"
                      : "stat-value-lost"
                  }
                >
                  {awayStatistics[7].value}
                </span>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

MatchStatsInfo.propTypes = {
  data: PropTypes.any,
};

MatchStatsInfo.defaultProps = {
  data: [],
};

export default MatchStatsInfo;
