import "./MatchGeneralInfo.css";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";

const MatchGeneralInfo = ({ showHeader, data }) => {
  console.log(data);

  return (
    <div className="container card-css">
      <section
        className={
          showHeader ? "intersection-wrapper1" : "intersection-wrapper"
        }
      >
        <h1 style={{ position: "absolute", left: "-9999px" }}>
          Fenerbahçe vs Sivasspor, Nov 7, 2022
        </h1>
        <div className="intersection-element"></div>
        <div className="full-screen-css">
          <div className="grid-container">
            <div className="left-grid-item">
              <Link to="/matches" className="back-button-apply-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.002"
                  height="19.002"
                  viewBox="0 0 19.002 19.002"
                >
                  <path
                    name="Path 4504"
                    d="M4919.5 17007a9.5 9.5 0 1 1 9.5-9.5 9.511 9.511 0 0 1-9.5 9.5zm1.079-13.1a.991.991 0 0 0-.7.293l-2.586 2.592a.993.993 0 0 0 0 1.412l2.586 2.586a1 1 0 0 0 1.711-.7v-5.178a1.012 1.012 0 0 0-1.01-1.005z"
                    transform="translate(-4910 -16987.998)"
                    fill="rgba(51, 51, 51, 1)"
                  ></path>
                  <path
                    name="Rectangle 6987"
                    transform="translate(0 .002)"
                    fill="none"
                    d="M0 0h19v19H0z"
                  ></path>
                </svg>
                <span>matches</span>
              </Link>
            </div>
            <div className="middle-grid-item">
              <a className="header-league-css">
                <div className="league-icon league-icon-container">
                  <img
                    alt=""
                    width="20"
                    height="20"
                    src="https://images.fotmob.com/image_resources/logo/leaguelogo/dark/71.png"
                    className="Image"
                  />
                </div>
                <span className="league-name">{data.league.name}</span>
                <span>{data.league.round}</span>
              </a>
            </div>
            <div className="right-grid-item"></div>
          </div>
          <section className="drop-down-header">
            <section className="header-full-screen-section">
              <header className="header-full-screen-header">
                <a>
                  <div className="team-markup-apply-hover">
                    <span className="teamName">
                      <span>{data.teams.home.name}</span>
                    </span>
                    <img
                      alt=""
                      className="Image team-icon"
                      width="50"
                      height="50"
                      src={data.teams.home.logo}
                    />
                  </div>
                </a>
                <div className="css-match-info-wrapper">
                  <span className="css-match-info-topRow">
                    {data.goals.home} - {data.goals.away}
                  </span>
                  <span className="css-match-info-bottomRow">
                    {data.fixture.status.long}
                  </span>
                </div>
                <a>
                  <div className="team-markup-apply-hover1">
                    <img
                      alt=""
                      className="Image team-icon"
                      width="50"
                      height="50"
                      src={data.teams.away.logo}
                    />
                    <span className="teamName">
                      <span>{data.teams.away.name}</span>
                    </span>
                  </div>
                </a>
              </header>
            </section>
          </section>
          <section className="header-full-screen-section">
            <header className="header-full-screen-header">
              <a>
                <div className="team-markup-apply-hover">
                  <span className="teamName">
                    <span>{data.teams.home.name}</span>
                  </span>
                  <img
                    alt=""
                    className="Image team-icon"
                    width="50"
                    height="50"
                    src={data.teams.home.logo}
                  />
                </div>
              </a>
              <div className="css-match-info-wrapper">
                <span className="css-match-info-topRow">
                  {data.goals.home} - {data.goals.away}
                </span>
                <span className="css-match-info-bottomRow">
                  {data.fixture.status.long}
                </span>
              </div>
              <a>
                <div className="team-markup-apply-hover1">
                  <img
                    alt=""
                    className="Image team-icon"
                    width="50"
                    height="50"
                    src={data.teams.away.logo}
                  />
                  <span className="teamName">
                    <span>{data.teams.away.name}</span>
                  </span>
                </div>
              </a>
            </header>
          </section>
          <div className="goal-container-apply-hover">
            <ul>
              {data.events
                .filter(
                  (matchEvent) =>
                    matchEvent.team.id === data.teams.home.id &&
                    matchEvent.type === "Goal"
                )
                .map((matchEvent, idx) => {
                  return (
                    <li key={idx}>
                      <a>
                        <span>
                          {idx == 0 ? null : ", "}
                          {matchEvent.player.name}
                        </span>
                        <span className="event-time">
                          {matchEvent.time.elapsed}'
                          {matchEvent.detail == "Penalty" ? " (Pen)" : ""}
                        </span>
                      </a>
                    </li>
                  );
                })}
            </ul>
            <ul>
              {data.events
                .filter(
                  (matchEvent) =>
                    matchEvent.team.id === data.teams.away.id &&
                    matchEvent.type === "Goal"
                )
                .map((matchEvent, idx, arr) => {
                  return (
                    <li key={idx}>
                      <a>
                        <span>
                          {idx == 0 ? null : ", "}
                          {matchEvent.player.name}
                        </span>
                        <span className="event-time">
                          {matchEvent.time.elapsed}'
                          {matchEvent.detail == "Penalty" ? " (Pen)" : ""}
                        </span>
                      </a>
                    </li>
                  );
                })}
            </ul>
            <svg
              width="13px"
              height="12px"
              viewBox="0 0 13 12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="group-7548" fill="black" fillRule="nonzero">
                  <path
                    d="M5.626,0 L6.376,0 C6.40552627,0.00839994525 6.43559797,0.014748416 6.466,0.019 C7.38628604,0.0800102699 8.27823106,0.362345175 9.066,0.842 C10.5785278,1.72761944 11.6210494,3.2377561 11.913,4.966 C11.954,5.184 11.975,5.405 12.005,5.625 L12.005,6.375 C11.9965643,6.40485607 11.9902156,6.4352628 11.986,6.466 C11.9143578,7.48399561 11.5745138,8.46488534 11.001,9.309 C10.1013506,10.6886225 8.66737647,11.6308345 7.044,11.909 C6.823,11.95 6.597,11.972 6.374,12.002 L5.624,12.002 C5.59852286,11.993925 5.57243929,11.9879057 5.546,11.984 C4.52846394,11.9161882 3.54695405,11.5805084 2.701,11.011 C1.31669631,10.111854 0.371171834,8.67507734 0.093,7.048 C0.052,6.826 0.03,6.601 0,6.378 L0,5.628 C0.017,5.486 0.032,5.343 0.052,5.201 C0.406968,2.60773495 2.39922581,0.542274001 4.978,0.094 C5.193,0.053 5.41,0.03 5.626,0 L5.626,0 Z M8.878,8.652 L8.878,8.672 L9.522,8.672 C9.57659281,8.66892223 9.62754501,8.64362681 9.663,8.602 C10.1962134,7.8620027 10.4891036,6.97600124 10.502,6.064 C10.5075297,5.99808243 10.4738632,5.93505553 10.416,5.903 C10.088,5.677 9.764,5.446 9.438,5.217 C9.32885651,5.16723745 9.24531718,5.07433535 9.20738486,4.96053838 C9.16945254,4.84674141 9.18054274,4.72229613 9.238,4.617 C9.369,4.237 9.501,3.858 9.626,3.477 C9.63973503,3.42435564 9.6314301,3.3683876 9.603,3.322 C9.06224838,2.587148 8.31006414,2.03487172 7.447,1.739 C7.39009663,1.71388699 7.32379611,1.72402708 7.277,1.765 C6.954,2.011 6.629,2.254 6.304,2.498 C6.22368795,2.58148214 6.11284167,2.62865783 5.997,2.62865783 C5.88115833,2.62865783 5.77031205,2.58148214 5.69,2.498 C5.368,2.257 5.046,2.017 4.726,1.773 C4.6777614,1.72817388 4.60778163,1.71566353 4.547,1.741 C3.683918,2.0363171 2.93167082,2.58829067 2.391,3.323 C2.3625699,3.3693876 2.35426497,3.42535564 2.368,3.478 C2.493,3.859 2.626,4.238 2.756,4.618 C2.81284647,4.72341148 2.82360722,4.84762812 2.78573493,4.96124498 C2.74786265,5.07486184 2.66472406,5.1677787 2.556,5.218 C2.233,5.445 1.913,5.673 1.588,5.896 C1.52340272,5.93181534 1.48611824,6.00245961 1.493,6.076 C1.51064624,6.97977129 1.79946822,7.85738596 2.322,8.595 C2.35667055,8.6515865 2.4210997,8.68282487 2.487,8.675 C2.887,8.665 3.287,8.66 3.682,8.654 C3.79722474,8.63566529 3.91499088,8.66427766 4.00895802,8.73343748 C4.10292516,8.80259729 4.16525269,8.90653386 4.182,9.022 C4.3,9.406 4.419,9.789 4.534,10.174 C4.54734003,10.2344488 4.59455117,10.28166 4.655,10.295 C5.52190519,10.5665089 6.45109481,10.5665089 7.318,10.295 C7.38568847,10.2792888 7.43779637,10.225222 7.451,10.157 C7.565,9.772 7.685,9.389 7.803,9.005 C7.84139059,8.77212823 8.0595692,8.61316953 8.293,8.648 C8.495,8.654 8.686,8.652 8.878,8.652 L8.878,8.652 Z"
                    id="Path_4408"
                    fill="rgba(159, 159, 159, 1)"
                  ></path>
                  <path
                    d="M6.002,7.875 C5.772,7.875 5.541,7.87 5.311,7.875 C5.11189042,7.89145718 4.92841557,7.76636069 4.871,7.575 L4.36,6.306 C4.292,6.136 4.222,5.966 4.16,5.793 C4.07432579,5.61229677 4.13962495,5.39607436 4.311,5.293 C4.78633333,4.93166667 5.264,4.57333333 5.744,4.218 C5.88880091,4.0890945 6.10719909,4.0890945 6.252,4.218 C6.73533333,4.57533333 7.216,4.936 7.694,5.3 C7.86647228,5.40251509 7.92952648,5.62145327 7.838,5.8 C7.601,6.41 7.357,7.018 7.11,7.624 C7.04860909,7.7918262 6.88195555,7.89731871 6.704,7.881 C6.471,7.872 6.236,7.876 6.002,7.875 L6.002,7.875 Z"
                    id="Path_4409"
                    fill="rgba(159, 159, 159, 1)"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="header-info-box-css">
            <section className="info-box-wrapper-applyHover">
              <ul className="info-box-data">
                <li className="info-box-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                  >
                    <path fill="none" d="M0 0h25v25H0z"></path>
                    <path
                      fill="rgba(159, 159, 159, 1)"
                      d="M16.542 13.458h-3.125a1.045 1.045 0 0 0-1.042 1.042v3.125a1.045 1.045 0 0 0 1.042 1.042h3.125a1.045 1.045 0 0 0 1.042-1.042V14.5a1.045 1.045 0 0 0-1.042-1.042zm0-10.417v1.042H8.208V3.042a1.042 1.042 0 1 0-2.083 0v1.041H5.083A2.074 2.074 0 0 0 3.01 6.167L3 20.75a2.083 2.083 0 0 0 2.083 2.083h14.584a2.089 2.089 0 0 0 2.083-2.083V6.167a2.089 2.089 0 0 0-2.083-2.083h-1.042V3.042a1.042 1.042 0 0 0-2.083 0zm2.083 17.709h-12.5a1.045 1.045 0 0 1-1.042-1.042V9.292h14.584v10.416a1.045 1.045 0 0 1-1.042 1.042z"
                      transform="translate(.125 .083)"
                    ></path>
                  </svg>
                  <time dateTime={data.fixture.date}>
                    <span>
                      {moment(data.fixture.date).format("ddd, MMM D YYYY")}
                    </span>
                    ,
                  </time>
                  &nbsp;
                  <time dateTime={moment(data.fixture.date).format("kk:mm")}>
                    <span> {moment(data.fixture.date).format("kk:mm")}</span>
                  </time>
                </li>
                <li className="info-box-item">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className="venue-css"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                    >
                      <g id="ic_venue_24px" transform="translate(-168 -1536)">
                        <path
                          id="Rectangle_2928"
                          fill="none"
                          d="M0 0H25V25H0z"
                          transform="translate(168 1536)"
                        ></path>
                        <g
                          fill="rgba(159, 159, 159, 1)"
                          id="Group_2069"
                          transform="translate(169.501 1538.187)"
                        >
                          <path
                            id="Path_806"
                            d="M10.907 9.2c-.5 0-1.007.3-1.007.7s.5.7 1.007.7 1.007-.3 1.007-.7-.504-.7-1.007-.7z"
                            className="cls-2"
                            transform="translate(.068 .063)"
                          ></path>
                          <g id="Group_2068">
                            <path
                              id="Path_807"
                              d="M13.762 8.936h3.423l-1.308-3.524-.2-.4A2.6 2.6 0 0 0 13.561 3.7H8.426A2.586 2.586 0 0 0 6.11 5.311L4.7 8.936h3.524a2.967 2.967 0 0 1 2.819-1.712 2.923 2.923 0 0 1 2.719 1.712z"
                              className="cls-2"
                              transform="translate(.032 .026)"
                            ></path>
                            <path
                              id="Path_808"
                              d="M21.447 8.156l-2.819-6.142-.3-.5A3.588 3.588 0 0 0 15.3 0H6.646a3.725 3.725 0 0 0-3.223 1.913L.7 7.753a6.346 6.346 0 0 0-.7 3.021v4.833a4.834 4.834 0 0 0 4.833 4.833h12.385a4.834 4.834 0 0 0 4.833-4.833v-4.733a6.307 6.307 0 0 0-.604-2.718zm-1.41 3.121v.4A2.739 2.739 0 0 1 17.52 14.4a4.517 4.517 0 0 0 .5-1.913v-.6a2.788 2.788 0 0 0-.1-.906H13.9a2.967 2.967 0 0 1-2.819 1.712 3.072 3.072 0 0 1-2.819-1.712H4.128c0 .3-.1.6-.1.906v.6a4.165 4.165 0 0 0 .5 1.913 2.739 2.739 0 0 1-2.514-2.72v-.906a5.892 5.892 0 0 1 .5-2.215l2.722-5.74a1.607 1.607 0 0 1 1.41-.806H15.3a2 2 0 0 1 1.309.6l3.021 6.444a3.949 3.949 0 0 1 .4 1.812z"
                              className="cls-2"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>
                      {data.fixture.venue.name}, {data.fixture.venue.city}
                    </span>
                  </a>
                </li>
                <li className="info-box-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                  >
                    <g id="ic-referee-24px">
                      <g id="Group_6810">
                        <path
                          fill="none"
                          id="Rectangle_5981"
                          d="M0 0H25V25H0z"
                          className="cls-1"
                        ></path>
                        <path
                          fill="none"
                          id="Rectangle_5982"
                          d="M0 0H25V25H0z"
                          className="cls-1"
                        ></path>
                      </g>
                      <g id="Group_6890" transform="translate(0 4.114)">
                        <path
                          fill="rgba(159, 159, 159, 1)"
                          id="Path_4330"
                          d="M107.8 258.077h3.985a1.152 1.152 0 0 0 .816-.313c.266-.245.538-.491.8-.73l.58-.526a.959.959 0 0 0 .3-1.258l-.754-1.894c-.79-1.987-1.607-4.042-2.428-6.057l-.185-.458a22.079 22.079 0 0 0-1.282-2.8 5.523 5.523 0 0 0-5.093-2.942h-9.38a4.417 4.417 0 0 0-3.537 1.723 7.31 7.31 0 0 0-1.64 4.035 9.11 9.11 0 0 0 1.588 6.41 5.35 5.35 0 0 0 4.718 2.478c.614-.021 1.241-.016 1.847-.012.368 0 .748.005 1.123 0 .136 0 .181.028.227.149.135.351.282.7.424 1.044l.176.423a.993.993 0 0 0 1.076.72h6.639zm4.069-3.433h-2.229c-2.033 0-4.136 0-6.2.007-.181 0-.251-.049-.324-.229l-.639-1.589c-1.017-2.529-2.068-5.145-3.131-7.705a10.687 10.687 0 0 0-.755-1.4c-.12-.2-.243-.4-.358-.606a1.251 1.251 0 0 0-.07-.109H104.989a3.189 3.189 0 0 1 2.364 1.091 6.4 6.4 0 0 1 1.286 2.1c.859 2.115 1.727 4.268 2.566 6.351l.787 1.952c.016.04.03.081.046.131-.062.002-.115.006-.167.006z"
                          className="cls-2"
                          transform="translate(-89.93 -241.106)"
                        ></path>
                        <path
                          fill="rgba(159, 159, 159, 1)"
                          id="Path_4331"
                          d="M320.33 382.914h-4.63a.683.683 0 0 1-.633-.423l-.6-1.459a.685.685 0 0 1 .633-.947h4.628a.683.683 0 0 1 .633.423l.6 1.459a.685.685 0 0 1-.633.947z"
                          className="cls-2"
                          transform="translate(-301.7 -372.214)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span id="referee-name-match-info">
                    {data.fixture.referee.indexOf(",") === -1
                      ? data.fixture.referee
                      : data.fixture.referee.slice(
                          0,
                          data.fixture.referee.indexOf(",")
                        )}
                  </span>
                </li>
                <li className="info-box-item"></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

MatchGeneralInfo.propTypes = {
  showHeader: PropTypes.bool,
  data: PropTypes.object,
};

MatchGeneralInfo.defaultProps = {
  showHeader: false,
  data: {},
};

export default MatchGeneralInfo;
