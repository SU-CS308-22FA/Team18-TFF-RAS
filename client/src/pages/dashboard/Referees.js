/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/RefereesPage";
import { referees } from "../../utils/constants";
import { useAppContext } from "../../context/appContext";

const Referees = () => {
  const { getRefereesRatings, refereesRatings } = useAppContext();

  const [sortedReferees, setSortedReferees] = useState([]);
  const [sortingValue, setSortingValue] = useState("alphabetic");

  console.log(JSON.stringify(refereesRatings));

  useEffect(() => {
    getRefereesRatings();
  }, []);

  useEffect(() => {
    if (sortingValue === "alphabetic") {
      let azReferees = [...referees];
      azReferees.sort(function (a, b) {
        var nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
      setSortedReferees(
        [...azReferees].map((referee) => ({ ...referee, displayValue: "" }))
      );
    } else if (sortingValue === "overall_rating") {
      let temp = [...referees].map((referee) => ({
        ...referee,
        displayValue: Object.keys(refereesRatings).includes(referee.id)
          ? refereesRatings[referee.id].rating.rating
          : "-",
      }));
      temp.sort((a, b) => {
        let numberA = a.displayValue === "-" ? 0 : parseFloat(a.displayValue);
        let numberB = b.displayValue === "-" ? 0 : parseFloat(b.displayValue);
        if (numberA !== numberB) {
          return numberB - numberA;
        } else {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        }
      });
      setSortedReferees([...temp]);
    } else if (sortingValue === "fan_rating") {
      let temp = [...referees].map((referee) => ({
        ...referee,
        displayValue:
          Object.keys(refereesRatings).includes(referee.id) &&
          refereesRatings[referee.id].fanRating.count !== 0
            ? refereesRatings[referee.id].fanRating.rating
            : "-",
      }));
      temp.sort((a, b) => {
        let numberA = a.displayValue === "-" ? 0 : parseFloat(a.displayValue);
        let numberB = b.displayValue === "-" ? 0 : parseFloat(b.displayValue);
        if (numberA !== numberB) {
          return numberB - numberA;
        } else {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        }
      });
      setSortedReferees([...temp]);
    } else if (sortingValue === "expert_rating") {
      let temp = [...referees].map((referee) => ({
        ...referee,
        displayValue:
          Object.keys(refereesRatings).includes(referee.id) &&
          refereesRatings[referee.id].expertRating.count !== 0
            ? refereesRatings[referee.id].expertRating.rating
            : "-",
      }));
      temp.sort((a, b) => {
        let numberA = a.displayValue === "-" ? 0 : parseFloat(a.displayValue);
        let numberB = b.displayValue === "-" ? 0 : parseFloat(b.displayValue);
        if (numberA !== numberB) {
          return numberB - numberA;
        } else {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        }
      });
      setSortedReferees([...temp]);
    } else if (sortingValue === "overall_sentiment") {
      let temp = [...referees].map((referee) => ({
        ...referee,
        displayValue: Object.keys(refereesRatings).includes(referee.id)
          ? refereesRatings[referee.id].sentiment.score
          : "-",
      }));
      temp.sort((a, b) => {
        let numberA = a.displayValue === "-" ? 0 : parseFloat(a.displayValue);
        let numberB = b.displayValue === "-" ? 0 : parseFloat(b.displayValue);
        if (numberA !== numberB) {
          return numberB - numberA;
        } else {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        }
      });
      setSortedReferees([...temp]);
    }
  }, [sortingValue]);

  return (
    <Wrapper className="full-page">
      <div className="stats-container">
        <div className="card-css">
          <section>
            <div className="data-view-controls-container-css">
              <span className="css-league-span">Referees</span>
              <div>
                <div>
                  <select
                    className="select-applyMediumHover"
                    width="115.2109375"
                  >
                    <option value="2022/2023">2022/2023</option>
                    <span className="hidden-span">2022/2023</span>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <select
                    className="select-applyMediumHover-right"
                    width="109.09375"
                    value={sortingValue}
                    onChange={(e) => setSortingValue(e.target.value)}
                  >
                    <option value="alphabetic">A-Z</option>
                    <option value="overall_rating">Overall rating</option>
                    <option value="fan_rating">Fan rating</option>
                    <option value="expert_rating">Expert rating</option>
                    <option value="overall_sentiment">Overall sentiment</option>
                    {/* <option value="fan_sentiment">Fan sentiment</option>
                    <option value="expert_sentiment">Expert sentiment</option> */}
                  </select>
                  <span className="hidden-span">Top scorer</span>
                </div>
              </div>
            </div>
            <section className="league-season-stats-css">
              <div className="mui-paper-root">
                <div className="jss1">
                  <div className="jss2">
                    <div>
                      <table className="mui-table-root jss3">
                        <colgroup>
                          <col className="col1" />
                          <col className="col2" />
                          <col className="col3" />
                          <col className="col4" />
                        </colgroup>
                        <tbody className="mui-table-body-root">
                          {sortedReferees.map((referee, index) => (
                            <tr key={index} className="mui-table-row-root">
                              <td
                                className="mui-table-cell-root mui-table-cell-body jss7 jss11 css-table-cell"
                                colSpan="1"
                              >
                                {index + 1}
                              </td>
                              <td
                                className="mui-table-cell-root mui-table-cell-body jss7 jss10 jss11 css-table-cell"
                                colSpan="1"
                              >
                                <div className="referee-icon-container">
                                  <div
                                    className="referee-icon  referee-icon-css"
                                    width="42"
                                    height="42"
                                  >
                                    <img
                                      alt=""
                                      className="image referee-image"
                                      width="42"
                                      height="42"
                                      src={referee.image}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td
                                className="mui-table-cell-root mui-table-cell-body jss7 jss11 css-table-cell"
                                colSpan="1"
                              >
                                <a
                                  href={"/referees/" + referee.id}
                                  className="styled-link"
                                >
                                  {referee.name}
                                </a>
                              </td>
                              <td
                                className="mui-table-cell-root mui-table-cell-body jss7 jss9 jss11 css-table-cell"
                                colSpan="1"
                              >
                                {referee.displayValue}
                                {sortingValue !== "alphabetic" &&
                                referee.displayValue !== "-"
                                  ? "/5.00"
                                  : ""}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default Referees;
