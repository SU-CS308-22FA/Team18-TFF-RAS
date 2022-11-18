import SubOut from "../../assets/images/player-sub-out.svg";
import SubIn from "../../assets/images/player-sub-in.svg";
import LineupCardYellow from "../../assets/images/lineup-card-yellow.svg";
import PlayerRatingStar from "../../assets/images/player-rating-star.svg";
import LineupPlayerGoal from "../../assets/images/lineup-player-goal.svg";
import LineupPlayerAssist from "../../assets/images/lineup-player-assist.svg";
import "../MatchGeneralInfo/MatchGeneralInfo.css";

const MatchSubsInfo = () => {
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
              src="https://images.fotmob.com/image_resources/logo/teamlogo/9742.png"
            />
            <span className="lineup-text">4-3-3</span>
            <h2>Ankaragücü</h2>
          </a>
          <a className="lineup-container-item-container-style-applyMediumHover-right">
            <img
              alt=""
              className="Image-small team-icon-small"
              width="30"
              height="30"
              src="https://images.fotmob.com/image_resources/logo/teamlogo/9752.png"
            />
            <span className="lineup-text">4-2-3-1</span>
            <h2>Trabzonspor</h2>
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
                fill="rgba(52, 52, 52, 1)"
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
                fill="rgba(52, 52, 52, 1)"
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
                fill="rgba(52, 52, 52, 1)"
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
                fill="rgba(52, 52, 52, 1)"
                d="M11.813 150.407h90.813a76.778 76.778 0 0 0 110.748 0h90.813A11.839 11.839 0 0 0 316 138.61V0h-5.906v138.61a5.92 5.92 0 0 1-5.907 5.9H11.813a5.92 5.92 0 0 1-5.907-5.9V0H0v138.61a11.84 11.84 0 0 0 11.813 11.797zm193 0a70.761 70.761 0 0 1-93.619 0z"
                className="cls-1"
                data-name="Path 2175"
              ></path>
            </svg>
          </div>
          <div className="lineup-team-container">
            <div className="lineup-team-row-container">
              <a>
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
                        src="https://images.fotmob.com/image_resources/playerimages/712040.png"
                      />
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <span>6.4</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container"></div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">99</span>
                    Güngördü
                  </span>
                </div>
              </a>
            </div>
            <div className="lineup-team-row-container">
              <a>
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
                        src="https://images.fotmob.com/image_resources/playerimages/813915.png"
                      />
                    </div>
                    <div className="lineup-sub-container">
                      <span className="sub-out-text">78'</span>
                      <div className="player-badge-container">
                        <img src={SubOut} />
                      </div>
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <span>6.5</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-card-badge-container">
                        <div className="badge-container">
                          <img src={LineupCardYellow} />
                        </div>
                      </div>
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container"></div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">17</span>
                    Güreler
                  </span>
                </div>
              </a>
            </div>
            <div className="lineup-team-row-container">
              <a>
                <div className="lineup-player-container-applyMediumHover-left">
                  <div className="lineup-player-head-container">
                    <div
                      className="PlayerIcon player-icon-css"
                      width="40"
                      height="40"
                    >
                      <img
                        alt=""
                        className="Image PlayerImage"
                        width="40"
                        height="40"
                        src="https://images.fotmob.com/image_resources/playerimages/387439.png"
                      />
                    </div>
                    <div className="lineup-sub-container">
                      <span className="sub-out-text">78'</span>
                      <div className="player-badge-container">
                        <img src={SubOut} />
                      </div>
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <span>6.5</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container"></div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">8</span>
                    Pedrinho
                  </span>
                </div>
              </a>
              <a>
                <div className="lineup-player-container-applyMediumHover-left">
                  <div className="lineup-player-head-container">
                    <div
                      className="PlayerIcon player-icon-css"
                      width="40"
                      height="40"
                    >
                      <img
                        alt=""
                        className="Image PlayerImage"
                        width="40"
                        height="40"
                        src="https://images.fotmob.com/image_resources/playerimages/212881.png"
                      />
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <img src={PlayerRatingStar} />
                        <span>8.0</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container">
                      <div className="player-badge-container">
                        <img src={LineupPlayerGoal} />
                      </div>
                    </div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">30</span>
                    Cigerci
                  </span>
                </div>
              </a>
            </div>
            <div className="lineup-team-row-container">
              <a>
                <div className="lineup-player-container-applyMediumHover-left">
                  <div className="lineup-player-head-container">
                    <div
                      className="PlayerIcon player-icon-css"
                      width="40"
                      height="40"
                    >
                      <img
                        alt=""
                        className="Image PlayerImage"
                        width="40"
                        height="40"
                        src="https://images.fotmob.com/image_resources/playerimages/387439.png"
                      />
                    </div>
                    <div className="lineup-sub-container">
                      <span className="sub-out-text">78'</span>
                      <div className="player-badge-container">
                        <img src={SubOut} />
                      </div>
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <span>6.5</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container"></div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">8</span>
                    Pedrinho
                  </span>
                </div>
              </a>
              <a>
                <div className="lineup-player-container-applyMediumHover-left">
                  <div className="lineup-player-head-container">
                    <div
                      className="PlayerIcon player-icon-css"
                      width="40"
                      height="40"
                    >
                      <img
                        alt=""
                        className="Image PlayerImage"
                        width="40"
                        height="40"
                        src="https://images.fotmob.com/image_resources/playerimages/212881.png"
                      />
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <img src={PlayerRatingStar} />
                        <span>8.0</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container">
                      <div className="player-badge-container">
                        <img src={LineupPlayerGoal} />
                      </div>
                    </div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">30</span>
                    Cigerci
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="lineup-team-container">
            <div className="lineup-team-row-container">
              <a>
                <div className="lineup-player-container-applyMediumHover-left">
                  <div className="lineup-player-head-container">
                    <div
                      className="PlayerIcon player-icon-css"
                      width="40"
                      height="40"
                    >
                      <img
                        alt=""
                        className="Image PlayerImage"
                        width="40"
                        height="40"
                        src="https://images.fotmob.com/image_resources/playerimages/687700.png"
                      />
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <span>7.5</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container"></div>
                    <div className="bottom-left-lineup-badges-container">
                      <div className="player-badge-container">
                        <img src={LineupPlayerAssist} />
                      </div>
                    </div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">30</span>
                    Gomez
                  </span>
                </div>
              </a>
              <a>
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
                        src="https://images.fotmob.com/image_resources/playerimages/712040.png"
                      />
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <span>6.4</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container"></div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">99</span>
                    Güngördü
                  </span>
                </div>
              </a>
            </div>
            <div className="lineup-team-row-container">
              <a>
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
                        src="https://images.fotmob.com/image_resources/playerimages/813915.png"
                      />
                    </div>
                    <div className="lineup-sub-container">
                      <span className="sub-out-text">78'</span>
                      <div className="player-badge-container">
                        <img src={SubOut} />
                      </div>
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <span>6.5</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-card-badge-container">
                        <div className="badge-container">
                          <img src={LineupCardYellow} />
                        </div>
                      </div>
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container"></div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">17</span>
                    Güreler
                  </span>
                </div>
              </a>
            </div>
            <div className="lineup-team-row-container">
              <a>
                <div className="lineup-player-container-applyMediumHover-left">
                  <div className="lineup-player-head-container">
                    <div
                      className="PlayerIcon player-icon-css"
                      width="40"
                      height="40"
                    >
                      <img
                        alt=""
                        className="Image PlayerImage"
                        width="40"
                        height="40"
                        src="https://images.fotmob.com/image_resources/playerimages/387439.png"
                      />
                    </div>
                    <div className="lineup-sub-container">
                      <span className="sub-out-text">78'</span>
                      <div className="player-badge-container">
                        <img src={SubOut} />
                      </div>
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <span>6.5</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container"></div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">8</span>
                    Pedrinho
                  </span>
                </div>
              </a>
              <a>
                <div className="lineup-player-container-applyMediumHover-left">
                  <div className="lineup-player-head-container">
                    <div
                      className="PlayerIcon player-icon-css"
                      width="40"
                      height="40"
                    >
                      <img
                        alt=""
                        className="Image PlayerImage"
                        width="40"
                        height="40"
                        src="https://images.fotmob.com/image_resources/playerimages/212881.png"
                      />
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <img src={PlayerRatingStar} />
                        <span>8.0</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container">
                      <div className="player-badge-container">
                        <img src={LineupPlayerGoal} />
                      </div>
                    </div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">30</span>
                    Cigerci
                  </span>
                </div>
              </a>
            </div>
            <div className="lineup-team-row-container">
              <a>
                <div className="lineup-player-container-applyMediumHover-left">
                  <div className="lineup-player-head-container">
                    <div
                      className="PlayerIcon player-icon-css"
                      width="40"
                      height="40"
                    >
                      <img
                        alt=""
                        className="Image PlayerImage"
                        width="40"
                        height="40"
                        src="https://images.fotmob.com/image_resources/playerimages/387439.png"
                      />
                    </div>
                    <div className="lineup-sub-container">
                      <span className="sub-out-text">78'</span>
                      <div className="player-badge-container">
                        <img src={SubOut} />
                      </div>
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <span>6.5</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container"></div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">8</span>
                    Pedrinho
                  </span>
                </div>
              </a>
              <a>
                <div className="lineup-player-container-applyMediumHover-left">
                  <div className="lineup-player-head-container">
                    <div
                      className="PlayerIcon player-icon-css"
                      width="40"
                      height="40"
                    >
                      <img
                        alt=""
                        className="Image PlayerImage"
                        width="40"
                        height="40"
                        src="https://images.fotmob.com/image_resources/playerimages/212881.png"
                      />
                    </div>
                    <div className="lineup-player-rating-container">
                      <div className="player-rating-styled-left">
                        <img src={PlayerRatingStar} />
                        <span>8.0</span>
                      </div>
                    </div>
                    <div className="middle-lineup-badges-container">
                      <div className="lineup-missed-penalty-badge-container"></div>
                    </div>
                    <div className="bottom-right-lineup-badges-container">
                      <div className="player-badge-container">
                        <img src={LineupPlayerGoal} />
                      </div>
                    </div>
                    <div className="bottom-left-lineup-badges-container"></div>
                  </div>
                  <span className="lineup-player-text">
                    <span className="lineup-player-shirt">30</span>
                    Cigerci
                  </span>
                </div>
              </a>
            </div>
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
                src="https://images.fotmob.com/image_resources/playerimages/1183784.png"
              />
            </div>
            <span>Ömer Erdogan</span>
          </a>
          <a className="coach-container-item-container-style-applyMediumHover-right">
            <div className="PlayerIcon  coach-icon-css" width="30" height="30">
              <img
                alt=""
                className="Image CoachImage"
                width="30"
                height="30"
                src="https://images.fotmob.com/image_resources/playerimages/154760.png"
              />
            </div>
            <span>Abdullah Avci</span>
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
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/281085.png"
                          />
                        </div>
                        <div className="sub-rating-styled">
                          <span>6.9</span>
                        </div>
                        <span>
                          <span className="sub-shirt">10</span>
                          <span className="sub-name"> Jesé</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                    <span className="subs-sub-time-text">67'</span>{" "}
                    <img src={SubIn} />
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/848349.png"
                          />
                        </div>
                        <span>
                          <span className="sub-shirt">88</span>
                          <span className="sub-name">Firatcan Üzüm</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/281085.png"
                          />
                        </div>
                        <div className="sub-rating-styled">
                          <span>6.9</span>
                        </div>
                        <span>
                          <span className="sub-shirt">10</span>
                          <span className="sub-name"> Jesé</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                    <span className="subs-sub-time-text">67'</span>{" "}
                    <img src={SubIn} />
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/848349.png"
                          />
                        </div>
                        <span>
                          <span className="sub-shirt">88</span>
                          <span className="sub-name">Firatcan Üzüm</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/281085.png"
                          />
                        </div>
                        <div className="sub-rating-styled">
                          <span>6.9</span>
                        </div>
                        <span>
                          <span className="sub-shirt">10</span>
                          <span className="sub-name"> Jesé</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                    <span className="subs-sub-time-text">67'</span>{" "}
                    <img src={SubIn} />
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/848349.png"
                          />
                        </div>
                        <span>
                          <span className="sub-shirt">88</span>
                          <span className="sub-name">Firatcan Üzüm</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/281085.png"
                          />
                        </div>
                        <div className="sub-rating-styled">
                          <span>6.9</span>
                        </div>
                        <span>
                          <span className="sub-shirt">10</span>
                          <span className="sub-name"> Jesé</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                    <span className="subs-sub-time-text">67'</span>{" "}
                    <img src={SubIn} />
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/848349.png"
                          />
                        </div>
                        <span>
                          <span className="sub-shirt">88</span>
                          <span className="sub-name">Firatcan Üzüm</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                  </div>
                </li>
              </ul>
              <ul className="bench-container">
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/281085.png"
                          />
                        </div>
                        <div className="sub-rating-styled">
                          <span>6.9</span>
                        </div>
                        <span>
                          <span className="sub-shirt">10</span>
                          <span className="sub-name"> Jesé</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                    <span className="subs-sub-time-text">67'</span>{" "}
                    <img src={SubIn} />
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/848349.png"
                          />
                        </div>
                        <span>
                          <span className="sub-shirt">88</span>
                          <span className="sub-name">Firatcan Üzüm</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/281085.png"
                          />
                        </div>
                        <div className="sub-rating-styled">
                          <span>6.9</span>
                        </div>
                        <span>
                          <span className="sub-shirt">10</span>
                          <span className="sub-name"> Jesé</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                    <span className="subs-sub-time-text">67'</span>{" "}
                    <img src={SubIn} />
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/848349.png"
                          />
                        </div>
                        <span>
                          <span className="sub-shirt">88</span>
                          <span className="sub-name">Firatcan Üzüm</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/281085.png"
                          />
                        </div>
                        <div className="sub-rating-styled">
                          <span>6.9</span>
                        </div>
                        <span>
                          <span className="sub-shirt">10</span>
                          <span className="sub-name"> Jesé</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                    <span className="subs-sub-time-text">67'</span>{" "}
                    <img src={SubIn} />
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/848349.png"
                          />
                        </div>
                        <span>
                          <span className="sub-shirt">88</span>
                          <span className="sub-name">Firatcan Üzüm</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/281085.png"
                          />
                        </div>
                        <div className="sub-rating-styled">
                          <span>6.9</span>
                        </div>
                        <span>
                          <span className="sub-shirt">10</span>
                          <span className="sub-name"> Jesé</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                    <span className="subs-sub-time-text">67'</span>{" "}
                    <img src={SubIn} />
                  </div>
                </li>
                <li className="bench-item">
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
                            src="https://images.fotmob.com/image_resources/playerimages/848349.png"
                          />
                        </div>
                        <span>
                          <span className="sub-shirt">88</span>
                          <span className="sub-name">Firatcan Üzüm</span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="right-bench-item">
                    <div className="subs-badges-container"></div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MatchSubsInfo;
