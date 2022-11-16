import GoalEventIcon from "../../assets/images/goal-event-icon.svg";
import CardYellow from "../../assets/images/card-yellow.svg";
import CardRed from "../../assets/images/card-red.svg";
import CardDoubleYellow from "../../assets/images/card-double-yellow.svg";
import HalfTimeCircle from "../../assets/images/half-time-circle.svg";
import FullTimeCircle from "../../assets/images/full-time-circle.svg";
import SubstitutionEventIcon from "../../assets/images/substitution-event-icon.svg";
import "../MatchGeneralInfo/MatchGeneralInfo.css";

const MatchEventsInfo = () => {
  return (
    <div className="events card-css">
      <section className="events-container">
        <ul className="event-list">
          <li className="event-item-container">
            <div className="event-meat-applyHover-right">
              <img src={CardYellow} />
              <a>Erdogan Yesilyurt</a>
            </div>
            <span className="events-event-time">19</span>
          </li>
          <li className="event-item-container">
            <div className="event-meat-applyHover-left">
              <a>Miguel Crespo</a>
              <img src={CardRed} />
            </div>
            <span className="events-event-time">25</span>
          </li>
          <li className="event-item-container">
            <div className="pause-container">
              <img src={HalfTimeCircle} />
              <span>HT</span>
            </div>
          </li>
          <li className="event-item-container">
            <div className="event-meat-applyHover-left">
              <a>Michy Batshuayi</a>
              <img src={CardDoubleYellow} />
            </div>
            <span className="events-event-time">48</span>
          </li>
          <li className="event-item-container">
            <div className="event-meat-applyHover-left">
              <div className="goal-container-player-layout-common">
                <span>
                  <a>Enner Valencia</a>
                  <span className="goal-str">
                    (<span className="event-score__highlighted">1</span> -{" "}
                    <span>0</span>)
                  </span>
                </span>
                <div>
                  <span className="penalty">Penalty</span>
                </div>
              </div>
              <img src={GoalEventIcon} />
            </div>
            <span className="events-event-time">55</span>
          </li>
          <li className="event-item-container">
            <div className="event-meat-applyHover-right">
              <img src={GoalEventIcon} />
              <div className="goal-container-player-layout-common">
                <div className="scorer">
                  <a>Enis Bardhi</a>
                  <span className="goal-str">
                    (<span>0</span> -{" "}
                    <span className="event-score__highlighted">1</span>)
                  </span>
                </div>
                <div className="goal-description-and-assist">
                  <div className="assist">
                    <a>assist by Maximiliano Gomez</a>
                  </div>
                </div>
              </div>
            </div>
            <span className="events-event-time">70</span>
          </li>
          <li className="event-item-container">
            <div className="event-meat-applyHover-left">
              <div className="goal-container-player-layout-common">
                <div className="scorer">
                  <a>Enis Bardhi</a>
                  <span className="goal-str">
                    (<span className="event-score__highlighted">1</span> -{" "}
                    <span>0</span>)
                  </span>
                </div>
                <div className="goal-description-and-assist">
                  <div className="assist">
                    <a>assist by Maximiliano Gomez</a>
                  </div>
                </div>
              </div>
              <img src={GoalEventIcon} />
            </div>
            <span className="events-event-time">70</span>
          </li>
          <li className="event-item-container">
            <div className="event-meat-applyHover-right">
              <img src={SubstitutionEventIcon} />
              <div className="substitution-container-player-layout-common-right">
                <a>Hakan Arslan</a>
                <div>
                  <a>Erdogan Yesilyurt</a>
                </div>
              </div>
            </div>
            <span className="events-event-time">60</span>
          </li>
          <li className="event-item-container">
            <div className="event-meat-applyHover-left">
              <div className="substitution-container-player-layout-common-left">
                <a>Joao Pedro</a>
                <div>
                  <a>Enner Valencia</a>
                </div>
              </div>
              <img src={SubstitutionEventIcon} />
            </div>
            <span className="events-event-time">88</span>
          </li>
          <li className="event-item-container">
            <div className="pause-container">
              <img src={FullTimeCircle} />
              <span>FT</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MatchEventsInfo;
