import "../MatchGeneralInfo/MatchGeneralInfo.css";

const MatchStatsInfo = () => {
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
                  src="https://images.fotmob.com/image_resources/logo/teamlogo/9742.png"
                />
                <svg width="200px" height="200px" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeDasharray="52 48"
                    strokeWidth="2"
                    stroke="#881020"
                    pathLength="100"
                  ></path>
                  <path
                    strokeDasharray="0 52.5 47 0.25"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeWidth="2"
                    stroke="#333333"
                    pathLength="100"
                  ></path>
                </svg>
                <img
                  alt=""
                  className="Image stats-team-icon"
                  width="35"
                  height="35"
                  src="https://images.fotmob.com/image_resources/logo/teamlogo/9752.png"
                />
              </div>
              <div>
                <span color="#fff" className="stats-percentage-value">
                  48%
                </span>
                <span color="#fff" className="stats-percentage-value">
                  52%
                </span>
              </div>
            </div>
            <ul className="stat-group-container">
              <li className="stat">
                <span className="stat-value-won">1.76</span>
                <span className="stat-default-title stat-value-title">
                  Expected goals (xG)
                </span>
                <span className="stat-value-won">0.76</span>
              </li>
              <li className="stat">
                <span className="stat-value-won">10</span>
                <span className="stat-default-title stat-value-title">
                  Total shots
                </span>
                <span className="stat-value-lost">9</span>
              </li>
              <li className="stat">
                <span className="stat-value-won">2</span>
                <span className="stat-default-title stat-value-title">
                  Big chances
                </span>
                <span className="stat-value-lost">1</span>
              </li>
              <li className="stat">
                <span className="stat-value-lost">1</span>
                <span className="stat-default-title stat-value-title">
                  Big chances missed
                </span>
                <div></div>
              </li>
              <li className="stat">
                <span className="stat-value-lost">325 (79%)</span>
                <span className="stat-default-title stat-value-title">
                  Accurate passes
                </span>
                <span className="stat-value-won">349 (78%)</span>
              </li>
              <li className="stat">
                <span className="stat-value-lost">11</span>
                <span className="stat-default-title stat-value-title">
                  Fouls committed
                </span>
                <span className="stat-value-won">7</span>
              </li>
              <li className="stat">
                <span className="stat-value-lost">2</span>
                <span className="stat-default-title stat-value-title">
                  Offsides
                </span>
                <span className="stat-value-won">1</span>
              </li>
              <li className="stat">
                <span className="stat-value-won">5</span>
                <span className="stat-default-title stat-value-title">
                  Corners
                </span>
                <span className="stat-value-lost">4</span>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MatchStatsInfo;
