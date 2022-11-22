import GoalEventIcon from "../../assets/images/goal-event-icon.svg";
import OwnGoalEventIcon from "../../assets/images/own-goal-event-icon.svg";
import CardYellow from "../../assets/images/card-yellow.svg";
import CardRed from "../../assets/images/card-red.svg";
import CardDoubleYellow from "../../assets/images/card-double-yellow.svg";
import HalfTimeCircle from "../../assets/images/half-time-circle.svg";
import FullTimeCircle from "../../assets/images/full-time-circle.svg";
import SubstitutionEventIcon from "../../assets/images/substitution-event-icon.svg";
import VarIcon from "../../assets/images/var-icon.svg";
import MissedPenaltyIcon from "../../assets/images/penalty-missed.svg";
import PropTypes from "prop-types";

import "../MatchGeneralInfo/MatchGeneralInfo.css";
import { getEventTimeString } from "../../utils/helper";

const HalfTime = () => (
  <li className="event-item-container">
    <div className="pause-container">
      <img src={HalfTimeCircle} />
      <span>HT</span>
    </div>
  </li>
);

const FullTime = () => (
  <li className="event-item-container">
    <div className="pause-container">
      <img src={FullTimeCircle} />
      <span>FT</span>
    </div>
  </li>
);

const MatchEventsInfo = ({ data }) => {
  let home = 0;
  let away = 0;

  let homeCards = [];
  let awayCards = [];

  const currentEvents = [...data.events]
    .filter((e) => e.time.elapsed >= 0)
    .map((e) => {
      if (e.time.extra === null) {
        e.time.extra = 0;
      }
      return e;
    });
  currentEvents.sort(function (x, y) {
    return x.time.elapsed - y.time.elapsed || x.time.extra - y.time.extra;
  });

  const newData = [];
  for (let i = 0; i < currentEvents.length; i++) {
    const currentEvent = currentEvents[i];
    if (
      currentEvent.time.elapsed > 45 &&
      (i === 0 || currentEvents[i - 1].time.elapsed <= 45)
    ) {
      newData.push({ type: "half-time" });
    }
    newData.push(currentEvent);
  }
  newData.push({ type: "full-time" });

  return (
    <div className="events card-css">
      <section className="events-container">
        <ul className="event-list">
          {newData.map((event, idx, arr) => {
            console.log(event.detail + " " + event.type);
            if (event.type === "half-time") {
              return <HalfTime key={idx} />;
            }
            if (event.type === "full-time") {
              return <FullTime key={idx} />;
            }

            if (event.team.name === data.teams.home.name) {
              if (event.type === "Goal") {
                home++;
                if (event.detail === "Normal Goal") {
                  if (event?.assist?.name) {
                    // if home goal with assist
                    return (
                      <li key={idx} className="event-item-container">
                        <div className="event-meat-applyHover-left">
                          <div className="goal-container-player-layout-common">
                            <div className="scorer">
                              <a>{event.player.name}</a>
                              <span className="goal-str">
                                (
                                <span className="event-score__highlighted">
                                  {home}
                                </span>{" "}
                                - <span>{away}</span>)
                              </span>
                            </div>
                            <div className="goal-description-and-assist">
                              <div className="assist">
                                <a>assist by {event.assist.name}</a>
                              </div>
                            </div>
                          </div>
                          <img src={GoalEventIcon} />
                        </div>
                        <span className="events-event-time">
                          {getEventTimeString(event)}
                        </span>
                      </li>
                    );
                  } else {
                    // if home goal without assist
                    return (
                      <li key={idx} className="event-item-container">
                        <div className="event-meat-applyHover-left">
                          <div className="goal-container-player-layout-common">
                            <span>
                              <a>{event.player.name}</a>
                              <span className="goal-str">
                                (
                                <span className="event-score__highlighted">
                                  {home}
                                </span>{" "}
                                - <span>{away}</span>)
                              </span>
                            </span>
                          </div>
                          <img src={GoalEventIcon} />
                        </div>
                        <span className="events-event-time">
                          {getEventTimeString(event)}
                        </span>
                      </li>
                    );
                  }
                } else if (event.detail === "Penalty") {
                  // if home penalty goal
                  return (
                    <li key={idx} className="event-item-container">
                      <div className="event-meat-applyHover-left">
                        <div className="goal-container-player-layout-common">
                          <div className="scorer">
                            <a>{event.player.name}</a>
                            <span className="goal-str">
                              (
                              <span className="event-score__highlighted">
                                {home}
                              </span>{" "}
                              - <span>{away}</span>)
                            </span>
                          </div>
                          <div className="goal-description-and-assist">
                            <span className="penalty">Penalty</span>
                          </div>
                        </div>
                        <img src={GoalEventIcon} />
                      </div>
                      <span className="events-event-time">
                        {getEventTimeString(event)}
                      </span>
                    </li>
                  );
                } else if (event.detail === "Own Goal") {
                  // if away own goal
                  return (
                    <li key={idx} className="event-item-container">
                      <div className="event-meat-applyHover-left">
                        <div className="goal-container-player-layout-common">
                          <div className="scorer">
                            <a>{event.player.name}</a>
                            <span className="goal-str">
                              (
                              <span className="event-score__highlighted">
                                {home}
                              </span>{" "}
                              - <span>{away}</span>)
                            </span>
                          </div>
                          <div className="goal-description-and-assist">
                            <span className="penalty">Own goal</span>
                          </div>
                        </div>
                        <img src={OwnGoalEventIcon} />
                      </div>
                      <span className="events-event-time">
                        {getEventTimeString(event)}
                      </span>
                    </li>
                  );
                }
              } else if (event.type === "Card") {
                if (event.detail === "Yellow Card") {
                  homeCards.push(event.player.name);
                  // if home player got yellow card
                  return (
                    <li key={idx} className="event-item-container">
                      <div className="event-meat-applyHover-left">
                        <a>{event.player.name}</a>
                        <img src={CardYellow} />
                      </div>
                      <span className="events-event-time">
                        {getEventTimeString(event)}
                      </span>
                    </li>
                  );
                } else {
                  // if home player got red card
                  return (
                    <li key={idx} className="event-item-container">
                      <div className="event-meat-applyHover-left">
                        <a>{event.player.name}</a>
                        <img
                          src={
                            homeCards.includes(event.player.name)
                              ? CardDoubleYellow
                              : CardRed
                          }
                        />
                      </div>
                      <span className="events-event-time">
                        {getEventTimeString(event)}
                      </span>
                    </li>
                  );
                }
              } else if (event.type === "subst") {
                // if home sub
                return (
                  <li key={idx} className="event-item-container">
                    <div className="event-meat-applyHover-left">
                      <div className="substitution-container-player-layout-common-left">
                        <a>{event.assist.name}</a>
                        <div>
                          <a>{event.player.name}</a>
                        </div>
                      </div>
                      <img src={SubstitutionEventIcon} />
                    </div>
                    <span className="events-event-time">
                      {getEventTimeString(event)}
                    </span>
                  </li>
                );
              } else if (event.type === "Var") {
                // if home var
                return (
                  <li key={idx} className="event-item-container">
                    <div className="event-meat-applyHover-left">
                      <div className="goal-container-player-layout-common">
                        <div className="scorer">
                          <span>{event.detail}</span>
                        </div>
                        <div className="goal-description-and-assist">
                          <a className="penalty">{event.player.name}</a>
                        </div>
                      </div>
                      <img src={VarIcon} />
                    </div>
                    <span className="events-event-time">
                      {getEventTimeString(event)}
                    </span>
                  </li>
                );
              }
            } else {
              if (event.type === "Goal") {
                away++;
                if (event.detail === "Normal Goal") {
                  if (event?.assist?.name) {
                    // if away goal with assist
                    return (
                      <li key={idx} className="event-item-container">
                        <div className="event-meat-applyHover-right">
                          <img src={GoalEventIcon} />
                          <div className="goal-container-player-layout-common">
                            <div className="scorer">
                              <a>{event.player.name}</a>
                              <span className="goal-str">
                                (<span>{home}</span> -{" "}
                                <span className="event-score__highlighted">
                                  {away}
                                </span>
                                )
                              </span>
                            </div>
                            <div className="goal-description-and-assist">
                              <div className="assist">
                                <a>assist by {event.assist.name}</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="events-event-time">
                          {getEventTimeString(event)}
                        </span>
                      </li>
                    );
                  } else {
                    // if away goal without assist
                    return (
                      <li key={idx} className="event-item-container">
                        <div className="event-meat-applyHover-right">
                          <img src={GoalEventIcon} />
                          <div className="goal-container-player-layout-common">
                            <span>
                              <a>{event.player.name}</a>
                              <span className="goal-str">
                                (<span>{home}</span> -{" "}
                                <span className="event-score__highlighted">
                                  {away}
                                </span>
                                )
                              </span>
                            </span>
                          </div>
                        </div>
                        <span className="events-event-time">
                          {getEventTimeString(event)}
                        </span>
                      </li>
                    );
                  }
                } else if (event.detail === "Penalty") {
                  // if away penalty goal
                  return (
                    <li key={idx} className="event-item-container">
                      <div className="event-meat-applyHover-right">
                        <img src={GoalEventIcon} />
                        <div className="goal-container-player-layout-common">
                          <div className="scorer">
                            <a>{event.player.name}</a>
                            <span className="goal-str">
                              (<span>{home}</span> -{" "}
                              <span className="event-score__highlighted">
                                {away}
                              </span>
                              )
                            </span>
                          </div>
                          <div className="goal-description-and-assist">
                            <span className="penalty">Penalty</span>
                          </div>
                        </div>
                      </div>
                      <span className="events-event-time">
                        {getEventTimeString(event)}
                      </span>
                    </li>
                  );
                } else if (event.detail === "Own Goal") {
                  // if home own goal
                  return (
                    <li key={idx} className="event-item-container">
                      <div className="event-meat-applyHover-right">
                        <img src={OwnGoalEventIcon} />
                        <div className="goal-container-player-layout-common">
                          <div className="scorer">
                            <a>{event.player.name}</a>
                            <span className="goal-str">
                              (<span>{home}</span> -{" "}
                              <span className="event-score__highlighted">
                                {away}
                              </span>
                              )
                            </span>
                          </div>
                          <div className="goal-description-and-assist">
                            <span className="penalty">Own goal</span>
                          </div>
                        </div>
                      </div>
                      <span className="events-event-time">
                        {getEventTimeString(event)}
                      </span>
                    </li>
                  );
                }
              } else if (event.type === "Card") {
                if (event.detail === "Yellow Card") {
                  awayCards.push(event.player.name);
                  // if away player got yellow card
                  return (
                    <li key={idx} className="event-item-container">
                      <div className="event-meat-applyHover-right">
                        <img src={CardYellow} />
                        <a>{event.player.name}</a>
                      </div>
                      <span className="events-event-time">
                        {getEventTimeString(event)}
                      </span>
                    </li>
                  );
                } else {
                  // if away player got red card
                  return (
                    <li key={idx} className="event-item-container">
                      <div className="event-meat-applyHover-right">
                        <img
                          src={
                            awayCards.includes(event.player.name)
                              ? CardDoubleYellow
                              : CardRed
                          }
                        />
                        <a>{event.player.name}</a>
                      </div>
                      <span className="events-event-time">
                        {getEventTimeString(event)}
                      </span>
                    </li>
                  );
                }
              } else if (event.type === "subst") {
                // if away sub
                return (
                  <li key={idx} className="event-item-container">
                    <div className="event-meat-applyHover-right">
                      <img src={SubstitutionEventIcon} />
                      <div className="substitution-container-player-layout-common-right">
                        <a>{event.assist.name}</a>
                        <div>
                          <a>{event.player.name}</a>
                        </div>
                      </div>
                    </div>
                    <span className="events-event-time">
                      {getEventTimeString(event)}
                    </span>
                  </li>
                );
              } else if (event.type === "Var") {
                // if away var
                return (
                  <li key={idx} className="event-item-container">
                    <div className="event-meat-applyHover-right">
                      <img src={VarIcon} />
                      <div className="goal-container-player-layout-common">
                        <div className="scorer">
                          <span>{event.detail}</span>
                        </div>
                        <div className="goal-description-and-assist">
                          <a className="penalty">{event.player.name}</a>
                        </div>
                      </div>
                    </div>
                    <span className="events-event-time">
                      {getEventTimeString(event)}
                    </span>
                  </li>
                );
              }
            }
          })}
        </ul>
      </section>
    </div>
  );
};

MatchEventsInfo.propTypes = {
  data: PropTypes.any,
};

MatchEventsInfo.defaultProps = {
  data: {},
};

export default MatchEventsInfo;
