import RefereeStatsGoalIcon from "../assets/images/referee-stats-goal-icon.svg";
import RefereeStatsYellowCardIcon from "../assets/images/referee-stats-yellow-card-icon.svg";
import RefereeStatsRedCardIcon from "../assets/images/referee-stats-red-card-icon.svg";
import RefereeStatsStarIcon from "../assets/images/referee-stats-star-icon.svg";
import RefereeStatsPenaltyIcon from "../assets/images/referee-stats-penalty-icon.svg";

import Pagination from "@mui/material/Pagination";
import { getRatingColor } from "../utils/helper";

import PropTypes from "prop-types";

const RefereeMatchesContainer = ({
  matches,
  numPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="referee-matches-section-css">
      <div className="referee-page-card-css">
        <section>
          <div className="referee-table-section-css">
            <article className="referee-table-match-stats-css">
              <table className="referee-matches-table-container">
                <thead>
                  <tr className="referee-match-stats-header-css">
                    <th>
                      <h3 className="css-referee-matches-header-text">Date</h3>
                    </th>
                    <th>
                      <h3 className="css-referee-matches-header-text">Teams</h3>
                    </th>
                    <th>
                      <img src={RefereeStatsGoalIcon} />
                    </th>
                    <th>
                      <img src={RefereeStatsPenaltyIcon} />
                    </th>
                    <th>
                      <img src={RefereeStatsYellowCardIcon} />
                    </th>
                    <th>
                      <img src={RefereeStatsRedCardIcon} />
                    </th>
                    <th>
                      <img src={RefereeStatsStarIcon} />
                    </th>
                  </tr>
                </thead>
                <tbody className="css-referee-matches-table-container">
                  {matches.map((match) => (
                    <>
                      <tr className="referee-match-stats-body-css referee-match-stats-body-css-no-border">
                        <td>
                          <span className="referee-match-date">
                            {match.date}
                          </span>
                        </td>
                        <td>
                          <a className="referee-match-link">
                            <div className="referee-score-wrapper-applyMediumHover">
                              {/* <img
                            alt=""
                            className="Team-Image TeamIcon"
                            width="20"
                            height="20"
                            src="https://images.fotmob.com/image_resources/logo/teamlogo/10155_xsmall.png"
                          /> */}
                              <span>{match.home}</span>
                            </div>
                          </a>
                        </td>
                        <td>
                          <span className="center-span-in-td-css">
                            {match.matchDetail.Teams.homeScore !== ""
                              ? match.matchDetail.Teams.homeScore
                              : "-"}
                          </span>
                        </td>
                        <td>
                          <span className="center-span-in-td-css">
                            {
                              match.matchDetail.HomeGoalsDetails.filter(
                                (goal) => goal.How === "P"
                              ).length
                            }
                          </span>
                        </td>
                        <td>
                          <span className="center-span-in-td-css">
                            {
                              match.matchDetail.HomeCards.filter(
                                (card) => card.cardType === "yellow"
                              ).length
                            }
                          </span>
                        </td>
                        <td>
                          <span className="center-span-in-td-css">
                            {
                              match.matchDetail.HomeCards.filter(
                                (card) => card.cardType === "red"
                              ).length
                            }
                          </span>
                        </td>
                        <td>
                          <div
                            fontSize="14"
                            width="34"
                            height="20"
                            className="referee-table-rating-styled"
                            style={{ backgroundColor: getRatingColor("-") }}
                          >
                            <span>-</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="referee-match-stats-body-css">
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <a className="referee-match-link">
                            <div className="referee-score-wrapper-applyMediumHover">
                              {/* <img
                            alt=""
                            className="Team-Image TeamIcon"
                            width="20"
                            height="20"
                            src="https://images.fotmob.com/image_resources/logo/teamlogo/10155_xsmall.png"
                          /> */}
                              <span>{match.away}</span>
                            </div>
                          </a>
                        </td>
                        <td>
                          <span className="center-span-in-td-css">
                            {match.matchDetail.Teams.awayScore !== ""
                              ? match.matchDetail.Teams.awayScore
                              : "-"}
                          </span>
                        </td>
                        <td>
                          <span className="center-span-in-td-css">
                            {
                              match.matchDetail.AwayGoalsDetails.filter(
                                (goal) => goal.How === "P"
                              ).length
                            }
                          </span>
                        </td>
                        <td>
                          <span className="center-span-in-td-css">
                            {
                              match.matchDetail.AwayCards.filter(
                                (card) => card.cardType === "yellow"
                              ).length
                            }
                          </span>
                        </td>
                        <td>
                          <span className="center-span-in-td-css">
                            {
                              match.matchDetail.AwayCards.filter(
                                (card) => card.cardType === "red"
                              ).length
                            }
                          </span>
                        </td>
                        <td>
                          {/* <div
                        fontSize="14"
                        width="34"
                        height="20"
                        className="referee-table-rating-styled"
                      >
                        <span>8.4</span>
                      </div> */}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
              <Pagination
                className="referee-matches-pagination"
                count={numPages}
                page={currentPage}
                onChange={onPageChange}
              />
              <div className="referee-matches-table-legend-css"></div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

RefereeMatchesContainer.propTypes = {
  matches: PropTypes.array,
  numPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

RefereeMatchesContainer.defaultProps = {
  matches: [],
  numPages: 0,
  currentPage: 1,
  onPageChange: null,
};

export default RefereeMatchesContainer;
