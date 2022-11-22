import SubOut from "../../assets/images/player-sub-out.svg";
import SubIn from "../../assets/images/player-sub-in.svg";
import LineupCardYellow from "../../assets/images/lineup-card-yellow.svg";
import PlayerRatingStar from "../../assets/images/player-rating-star.svg";
import LineupPlayerGoal from "../../assets/images/lineup-player-goal.svg";
import LineupPlayerAssist from "../../assets/images/lineup-player-assist.svg";
import PropTypes from "prop-types";

import "../MatchGeneralInfo/MatchGeneralInfo.css";

const MatchSubsInfo = ({ data }) => {
  let homeStarting11 = {};
  let homeFormation = ["1"].concat(data.lineups[0].formation.split("-"));
  for (let i = 0; i < data.lineups[0].startXI.length; i++) {
    const { id, name, number, grid } = data.lineups[0].startXI[i].player;
    homeStarting11[grid] = { name, number };

    for (let j = 0; j < data.players[0].players.length; j++) {
      const currentPlayer = data.players[0].players[j].player;
      if (currentPlayer.id === id) {
        homeStarting11[grid].photo = currentPlayer.photo;
        const currentStats = data.players[0].players[j].statistics[0];
        homeStarting11[grid].cards = { ...currentStats.cards };
        homeStarting11[grid].goals = currentStats.goals.total
          ? currentStats.goals.total
          : 0;
        homeStarting11[grid].assists = currentStats.goals.assists
          ? currentStats.goals.assists
          : 0;
        homeStarting11[grid].rating = currentStats.games.rating;

        // check for sub and own goals
        homeStarting11[grid].subOut = null;
        homeStarting11[grid].ownGoals = 0;
        for (let k = 0; k < data.events.length; k++) {
          if (
            data.events[k].type === "subst" &&
            data.events[k].player.id === id
          ) {
            homeStarting11[grid].subOut = data.events[k].time.elapsed;
          } else if (
            data.events[k].type === "Goal" &&
            data.events[k].detail === "Own Goal" &&
            data.events[k].player.id === id
          ) {
            homeStarting11[grid].ownGoals++;
          }
        }

        break;
      }
    }
  }

  let awayStarting11 = {};
  let awayFormation = data.lineups[1].formation.split("-");
  awayFormation.reverse();
  awayFormation = awayFormation.concat("1");
  for (let i = 0; i < data.lineups[1].startXI.length; i++) {
    const { id, name, number, grid } = data.lineups[1].startXI[i].player;
    awayStarting11[grid] = { name, number };

    for (let j = 0; j < data.players[1].players.length; j++) {
      const currentPlayer = data.players[1].players[j].player;
      if (currentPlayer.id === id) {
        awayStarting11[grid].photo = currentPlayer.photo;
        const currentStats = data.players[1].players[j].statistics[0];
        awayStarting11[grid].cards = { ...currentStats.cards };
        awayStarting11[grid].goals = currentStats.goals.total
          ? currentStats.goals.total
          : 0;
        awayStarting11[grid].assists = currentStats.goals.assists
          ? currentStats.goals.assists
          : 0;
        awayStarting11[grid].rating = currentStats.games.rating;

        // check for sub and own goals
        awayStarting11[grid].subOut = null;
        awayStarting11[grid].ownGoals = 0;
        for (let k = 0; k < data.events.length; k++) {
          if (
            data.events[k].type === "subst" &&
            data.events[k].player.id === id
          ) {
            awayStarting11[grid].subOut = data.events[k].time.elapsed;
          } else if (
            data.events[k].type === "Goal" &&
            data.events[k].detail === "Own Goal" &&
            data.events[k].player.id === id
          ) {
            awayStarting11[grid].ownGoals++;
          }
        }

        break;
      }
    }
  }

  let homeSubs = [];
  for (let i = 0; i < data.lineups[0].substitutes.length; i++) {
    const { id, name, number } = data.lineups[0].substitutes[i].player;
    let subToAdd = { name, number };

    for (let j = 0; j < data.players[0].players.length; j++) {
      const currentPlayer = data.players[0].players[j].player;
      if (currentPlayer.id === id) {
        subToAdd.photo = currentPlayer.photo;
        const currentStats = data.players[0].players[j].statistics[0];
        subToAdd.cards = { ...currentStats.cards };
        subToAdd.goals = currentStats.goals.total
          ? currentStats.goals.total
          : 0;
        subToAdd.assists = currentStats.goals.assists
          ? currentStats.goals.assists
          : 0;
        subToAdd.rating = currentStats.games.rating;

        // check for sub and own goals
        subToAdd.subIn = 100;
        subToAdd.ownGoals = 0;
        for (let k = 0; k < data.events.length; k++) {
          if (
            data.events[k].type === "subst" &&
            data.events[k].assist.id === id
          ) {
            subToAdd.subIn = data.events[k].time.elapsed;
          } else if (
            data.events[k].type === "Goal" &&
            data.events[k].detail === "Own Goal" &&
            data.events[k].player.id === id
          ) {
            subToAdd.ownGoals++;
          }
        }

        break;
      }
    }

    homeSubs.push(subToAdd);
  }
  homeSubs.sort(function (x, y) {
    return x.subIn - y.subIn;
  });

  let awaySubs = [];
  for (let i = 0; i < data.lineups[1].substitutes.length; i++) {
    const { id, name, number } = data.lineups[1].substitutes[i].player;
    let subToAdd = { name, number };

    for (let j = 0; j < data.players[1].players.length; j++) {
      const currentPlayer = data.players[1].players[j].player;
      if (currentPlayer.id === id) {
        subToAdd.photo = currentPlayer.photo;
        const currentStats = data.players[1].players[j].statistics[0];
        subToAdd.cards = { ...currentStats.cards };
        subToAdd.goals = currentStats.goals.total
          ? currentStats.goals.total
          : 0;
        subToAdd.assists = currentStats.goals.assists
          ? currentStats.goals.assists
          : 0;
        subToAdd.rating = currentStats.games.rating;

        // check for sub and own goals
        subToAdd.subIn = 100;
        subToAdd.ownGoals = 0;
        for (let k = 0; k < data.events.length; k++) {
          if (
            data.events[k].type === "subst" &&
            data.events[k].assist.id === id
          ) {
            subToAdd.subIn = data.events[k].time.elapsed;
          } else if (
            data.events[k].type === "Goal" &&
            data.events[k].detail === "Own Goal" &&
            data.events[k].player.id === id
          ) {
            subToAdd.ownGoals++;
          }
        }

        break;
      }
    }

    awaySubs.push(subToAdd);
  }
  awaySubs.sort(function (x, y) {
    return x.subIn - y.subIn;
  });
  console.log(awaySubs);

  return (
    <div className="lineup card-css">
      <section className="expandable-card-container-style">
        <header className="lineup-title-container-items-container-style">
          <a className="lineup-container-item-container-style-applyMediumHover-left">
            <img
              alt=""
              className="Image-small team-icon-small"
              width="30"
              height="30"
              src={data.teams.home.logo}
            />
            <span className="lineup-text">{data.lineups[0].formation}</span>
            <h2>{data.teams.home.name}</h2>
          </a>
          <a className="lineup-container-item-container-style-applyMediumHover-right">
            <img
              alt=""
              className="Image-small team-icon-small"
              width="30"
              height="30"
              src={data.teams.away.logo}
            />
            <span className="lineup-text">{data.lineups[1].formation}</span>
            <h2>{data.teams.away.name}</h2>
          </a>
          <div className="lineup-title-container">
            <h2 className="lineup-title">Lineup</h2>
          </div>
        </header>
        <div className="separator-style"></div>
        <section className="lineup-map-container">
          <div className="lineup-goal-container-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="lineup_1_214x118"
              width="276"
              height="154"
              viewBox="0 0 316 174"
            >
              <g
                id="Group_4486"
                fill="rgba(200, 200, 200, 1)"
                data-name="Group 4486"
                transform="translate(84.168)"
              >
                <path
                  id="Path_2174"
                  d="M57 0h5.907v50.136a5.92 5.92 0 0 0 5.907 5.9H192.85a5.92 5.92 0 0 0 5.907-5.9V0h5.907v50.136a11.84 11.84 0 0 1-11.813 11.8H68.813A11.84 11.84 0 0 1 57 50.136z"
                  className="cls-1"
                  data-name="Path 2174"
                  transform="translate(-57)"
                ></path>
              </g>
              <path
                id="Path_2175"
                fill="rgba(200, 200, 200, 1)"
                d="M11.813 150.407h90.813a76.778 76.778 0 0 0 110.748 0h90.813A11.839 11.839 0 0 0 316 138.61V0h-5.906v138.61a5.92 5.92 0 0 1-5.907 5.9H11.813a5.92 5.92 0 0 1-5.907-5.9V0H0v138.61a11.84 11.84 0 0 0 11.813 11.797zm193 0a70.761 70.761 0 0 1-93.619 0z"
                className="cls-1"
                data-name="Path 2175"
              ></path>
            </svg>
          </div>
          <div className="lineup-middle-of-field"></div>
          <div className="lineup-goal-container-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="lineup_1_214x118"
              width="276"
              height="154"
              viewBox="0 0 316 174"
            >
              <g
                id="Group_4486"
                fill="rgba(200, 200, 200, 1)"
                data-name="Group 4486"
                transform="translate(84.168)"
              >
                <path
                  id="Path_2174"
                  d="M57 0h5.907v50.136a5.92 5.92 0 0 0 5.907 5.9H192.85a5.92 5.92 0 0 0 5.907-5.9V0h5.907v50.136a11.84 11.84 0 0 1-11.813 11.8H68.813A11.84 11.84 0 0 1 57 50.136z"
                  className="cls-1"
                  data-name="Path 2174"
                  transform="translate(-57)"
                ></path>
              </g>
              <path
                id="Path_2175"
                fill="rgba(200, 200, 200, 1)"
                d="M11.813 150.407h90.813a76.778 76.778 0 0 0 110.748 0h90.813A11.839 11.839 0 0 0 316 138.61V0h-5.906v138.61a5.92 5.92 0 0 1-5.907 5.9H11.813a5.92 5.92 0 0 1-5.907-5.9V0H0v138.61a11.84 11.84 0 0 0 11.813 11.797zm193 0a70.761 70.761 0 0 1-93.619 0z"
                className="cls-1"
                data-name="Path 2175"
              ></path>
            </svg>
          </div>
          <div className="lineup-team-container">
            {homeFormation.map((col, idx) => {
              let cols = [];
              for (let i = col; i >= 1; i--) {
                cols.push(i);
              }

              return (
                <div key={"row-" + idx} className="lineup-team-row-container">
                  {cols.map((pos) => {
                    const currentPlayer =
                      homeStarting11[
                        (idx + 1).toString() + ":" + pos.toString()
                      ];

                    return (
                      <a key={"cell-" + pos}>
                        <div className="lineup-player-container-applyMediumHover-left">
                          <div className="lineup-player-head-container">
                            <div
                              className="PlayerIcon  player-icon-css"
                              width="40"
                              height="40"
                            >
                              <img
                                alt=""
                                className="Image PlayerImage"
                                width="40"
                                height="40"
                                src={currentPlayer.photo}
                              />
                            </div>
                            {currentPlayer.subOut === null ? null : (
                              <div className="lineup-sub-container">
                                <span className="sub-out-text">
                                  {currentPlayer.subOut}'
                                </span>
                                <div className="player-badge-container">
                                  <img src={SubOut} />
                                </div>
                              </div>
                            )}
                            <div className="lineup-player-rating-container">
                              <div
                                className="player-rating-styled-left"
                                style={{
                                  backgroundColor:
                                    parseFloat(currentPlayer.rating) >= 6.9
                                      ? "rgb(30, 200, 83)"
                                      : parseFloat(currentPlayer.rating) >= 5.0
                                      ? "rgb(240, 128, 34)"
                                      : "rgb(229, 94, 91)",
                                }}
                              >
                                <span>{currentPlayer.rating}</span>
                              </div>
                            </div>
                            <div className="middle-lineup-badges-container">
                              {currentPlayer.cards.yellow > 0 ? (
                                <div className="lineup-card-badge-container">
                                  <div className="badge-container">
                                    <img src={LineupCardYellow} />
                                  </div>
                                </div>
                              ) : null}
                              <div className="lineup-missed-penalty-badge-container"></div>
                            </div>
                            <div className="bottom-right-lineup-badges-container">
                              {currentPlayer.goals > 0
                                ? [...Array(currentPlayer.goals)].map(
                                    (goalEvent, goalIdx) => (
                                      <div
                                        key={goalIdx}
                                        className="player-badge-container"
                                      >
                                        <img src={LineupPlayerGoal} />
                                      </div>
                                    )
                                  )
                                : null}
                            </div>
                            <div className="bottom-left-lineup-badges-container">
                              {currentPlayer.assists > 0
                                ? [...Array(currentPlayer.assists)].map(
                                    (assistEvent, assistIdx) => (
                                      <div
                                        key={assistIdx}
                                        className="player-badge-container"
                                      >
                                        <img src={LineupPlayerAssist} />
                                      </div>
                                    )
                                  )
                                : null}
                            </div>
                          </div>
                          <span className="lineup-player-text">
                            <span className="lineup-player-shirt">
                              {currentPlayer.number}
                            </span>
                            {currentPlayer.name}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="lineup-team-container">
            {awayFormation.map((col, idx) => {
              let cols = [];
              for (let i = col; i >= 1; i--) {
                cols.push(i);
              }

              return (
                <div key={"row-" + idx} className="lineup-team-row-container">
                  {cols.map((pos) => {
                    const currentPlayer =
                      awayStarting11[
                        (awayFormation.length - idx).toString() +
                          ":" +
                          pos.toString()
                      ];

                    return (
                      <a key={"cell-" + pos}>
                        <div className="lineup-player-container-applyMediumHover-left">
                          <div className="lineup-player-head-container">
                            <div
                              className="PlayerIcon  player-icon-css"
                              width="40"
                              height="40"
                            >
                              <img
                                alt=""
                                className="Image PlayerImage"
                                width="40"
                                height="40"
                                src={currentPlayer.photo}
                              />
                            </div>
                            {currentPlayer.subOut === null ? null : (
                              <div className="lineup-sub-container">
                                <span className="sub-out-text">
                                  {currentPlayer.subOut}'
                                </span>
                                <div className="player-badge-container">
                                  <img src={SubOut} />
                                </div>
                              </div>
                            )}
                            <div className="lineup-player-rating-container">
                              <div
                                className="player-rating-styled-left"
                                style={{
                                  backgroundColor:
                                    parseFloat(currentPlayer.rating) >= 6.9
                                      ? "rgb(30, 200, 83)"
                                      : parseFloat(currentPlayer.rating) >= 5.0
                                      ? "rgb(240, 128, 34)"
                                      : "rgb(229, 94, 91)",
                                }}
                              >
                                <span>{currentPlayer.rating}</span>
                              </div>
                            </div>
                            <div className="middle-lineup-badges-container">
                              {currentPlayer.cards.yellow > 0 ? (
                                <div className="lineup-card-badge-container">
                                  <div className="badge-container">
                                    <img src={LineupCardYellow} />
                                  </div>
                                </div>
                              ) : null}
                              <div className="lineup-missed-penalty-badge-container"></div>
                            </div>
                            <div className="bottom-right-lineup-badges-container">
                              {currentPlayer.goals > 0
                                ? [...Array(currentPlayer.goals)].map(
                                    (goalEvent, goalIdx) => (
                                      <div
                                        key={goalIdx}
                                        className="player-badge-container"
                                      >
                                        <img src={LineupPlayerGoal} />
                                      </div>
                                    )
                                  )
                                : null}
                            </div>
                            <div className="bottom-left-lineup-badges-container">
                              {currentPlayer.assists > 0
                                ? [...Array(currentPlayer.assists)].map(
                                    (assistEvent, assistIdx) => (
                                      <div
                                        key={assistIdx}
                                        className="player-badge-container"
                                      >
                                        <img src={LineupPlayerAssist} />
                                      </div>
                                    )
                                  )
                                : null}
                            </div>
                          </div>
                          <span className="lineup-player-text">
                            <span className="lineup-player-shirt">
                              {currentPlayer.number}
                            </span>
                            {currentPlayer.name}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
        <div className="separator-style"></div>
        <section className="coaches-container-items-container-style">
          <a className="coach-container-item-container-style-applyMediumHover-left">
            <div className="PlayerIcon  coach-icon-css" width="30" height="30">
              <img
                alt=""
                className="Image CoachImage"
                width="30"
                height="30"
                src={data.lineups[0].coach.photo}
              />
            </div>
            <span>{data.lineups[0].coach.name}</span>
          </a>
          <a className="coach-container-item-container-style-applyMediumHover-right">
            <div className="PlayerIcon  coach-icon-css" width="30" height="30">
              <img
                alt=""
                className="Image CoachImage"
                width="30"
                height="30"
                src={data.lineups[1].coach.photo}
              />
            </div>
            <span>{data.lineups[1].coach.name}</span>
          </a>
          <h2 className="coaches-container-title">Coach</h2>
        </section>
        <div className="separator-style"></div>
        <div className="expand-button-container">
          <button type="button" className="expand-button">
            Bench / Injured and suspended players
          </button>
        </div>
        <div className="expandable-subs-container">
          <div>
            <section className="benches-container">
              <ul className="bench-container">
                {homeSubs.map((sub, idx) => {
                  return (
                    <li key={idx} className="bench-item">
                      <div className="left-bench-item-outer">
                        <a>
                          <div className="left-bench-item">
                            <div
                              className="PlayerIcon sub-icon-css"
                              width="30"
                              height="30"
                            >
                              <img
                                alt=""
                                className="Image SubImage"
                                width="30"
                                height="30"
                                src={sub.photo}
                              />
                            </div>
                            {sub.rating === null ? null : (
                              <div
                                className="sub-rating-styled"
                                style={{
                                  backgroundColor:
                                    parseFloat(sub.rating) >= 6.9
                                      ? "rgb(30, 200, 83)"
                                      : parseFloat(sub.rating) >= 5.0
                                      ? "rgb(240, 128, 34)"
                                      : "rgb(229, 94, 91)",
                                }}
                              >
                                <span>{sub.rating}</span>
                              </div>
                            )}
                            <span>
                              <span className="sub-shirt">{sub.number}</span>
                              <span className="sub-name"> {sub.name}</span>
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="right-bench-item">
                        <div className="subs-badges-container">
                          {[...Array(sub.goals)].map((goalEvent, goalIdx) => (
                            <div
                              key={"goal-" + goalIdx}
                              className="player-badge-container"
                            >
                              <img src={LineupPlayerGoal} />
                            </div>
                          ))}
                          {[...Array(sub.assists)].map(
                            (assistEvent, assistIdx) => (
                              <div
                                key={"assist-" + assistIdx}
                                className="player-badge-container"
                              >
                                <img src={LineupPlayerAssist} />
                              </div>
                            )
                          )}
                          {[...Array(sub.cards.yellow)].map(
                            (cardEvent, cardIdx) => (
                              <div
                                key={"yellow-card-" + cardIdx}
                                className="player-badge-container"
                              >
                                <img src={LineupCardYellow} />
                              </div>
                            )
                          )}
                          {[...Array(sub.cards.red)].map(
                            (cardEvent, cardIdx) => (
                              <div
                                key={"red-card-" + cardIdx}
                                className="player-badge-container"
                              >
                                <img src={LineupCardYellow} />
                              </div>
                            )
                          )}
                          {[...Array(sub.ownGoals)].map(
                            (goalEvent, goalIdx) => (
                              <div
                                key={"own-goal-" + goalIdx}
                                className="player-badge-container"
                              >
                                <img src={LineupPlayerGoal} />
                              </div>
                            )
                          )}
                        </div>
                        {sub.subIn === 100 ? null : (
                          <>
                            <span className="subs-sub-time-text">
                              {sub.subIn}'
                            </span>{" "}
                            <img src={SubIn} />
                          </>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <ul className="bench-container">
                {awaySubs.map((sub, idx) => {
                  return (
                    <li key={idx} className="bench-item">
                      <div className="left-bench-item-outer">
                        <a>
                          <div className="left-bench-item">
                            <div
                              className="PlayerIcon sub-icon-css"
                              width="30"
                              height="30"
                            >
                              <img
                                alt=""
                                className="Image SubImage"
                                width="30"
                                height="30"
                                src={sub.photo}
                              />
                            </div>
                            {sub.rating === null ? null : (
                              <div
                                className="sub-rating-styled"
                                style={{
                                  backgroundColor:
                                    parseFloat(sub.rating) >= 6.9
                                      ? "rgb(30, 200, 83)"
                                      : parseFloat(sub.rating) >= 5.0
                                      ? "rgb(240, 128, 34)"
                                      : "rgb(229, 94, 91)",
                                }}
                              >
                                <span>{sub.rating}</span>
                              </div>
                            )}
                            <span>
                              <span className="sub-shirt">{sub.number}</span>
                              <span className="sub-name"> {sub.name}</span>
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="right-bench-item">
                        <div className="subs-badges-container">
                          {[...Array(sub.goals)].map((goalEvent, goalIdx) => (
                            <div
                              key={"goal-" + goalIdx}
                              className="player-badge-container"
                            >
                              <img src={LineupPlayerGoal} />
                            </div>
                          ))}
                          {[...Array(sub.assists)].map(
                            (assistEvent, assistIdx) => (
                              <div
                                key={"assist-" + assistIdx}
                                className="player-badge-container"
                              >
                                <img src={LineupPlayerAssist} />
                              </div>
                            )
                          )}
                          {[...Array(sub.cards.yellow)].map(
                            (cardEvent, cardIdx) => (
                              <div
                                key={"yellow-card-" + cardIdx}
                                className="player-badge-container"
                              >
                                <img src={LineupCardYellow} />
                              </div>
                            )
                          )}
                          {[...Array(sub.cards.red)].map(
                            (cardEvent, cardIdx) => (
                              <div
                                key={"red-card-" + cardIdx}
                                className="player-badge-container"
                              >
                                <img src={LineupCardYellow} />
                              </div>
                            )
                          )}
                          {[...Array(sub.ownGoals)].map(
                            (goalEvent, goalIdx) => (
                              <div
                                key={"own-goal-" + goalIdx}
                                className="player-badge-container"
                              >
                                <img src={LineupPlayerGoal} />
                              </div>
                            )
                          )}
                        </div>
                        {sub.subIn === 100 ? null : (
                          <>
                            <span className="subs-sub-time-text">
                              {sub.subIn}'
                            </span>{" "}
                            <img src={SubIn} />
                          </>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

MatchSubsInfo.propTypes = {
  data: PropTypes.any,
};

MatchSubsInfo.defaultProps = {
  data: {},
};

export default MatchSubsInfo;
