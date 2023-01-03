import React from "react";
import moment from "moment";
import Wrapper from "../assets/wrappers/Report";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import ReportInfo from "./ReportInfo";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Report = ({
  _id,
  referee,
  matchMonth,
  matchyear,
  matchDay,
  matchHour,
  matchMinute,
  hometeam,
  awayteam,
  homescore,
  awayscore,
  final_grade,
  fairness,
  strictness,
  accuracy,
  comments,
}) => {
  const { setEditReport } = useAppContext();
  let date = moment([matchyear, matchMonth, matchDay, matchHour, matchMinute]);
  let day = date.format("MMM Do, YYYY");
  let time = date.format("HH:mm");
  console.log(date);
  return (
    <Wrapper>
      <header>
        <h5>{hometeam}</h5> <p>{homescore}</p>
        <h5>{awayteam}</h5> <p>{awayscore}</p>
      </header>
      <div className="content">
        <div className="content-center">
          <ReportInfo icon={<BsFillPersonFill />} text={referee} />
          <ReportInfo icon={<FaCalendarAlt />} text={day} />
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/edit-report"
              className="btn edit-btn"
              onClick={() => setEditReport(_id)}
            >
              Edit
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Report;
