import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Close";

import MatchPageWrapper from "../../../assets/wrappers/MatchPage";
import MatchGeneralInfo from "../../../components/MatchGeneralInfo/MatchGeneralInfo";
import MatchEventsInfo from "../../../components/MatchEventsInfo/MatchEventsInfo";
import MatchSubsInfo from "../../../components/MatchSubsInfo/MatchSubsInfo";
import MatchStatsInfo from "../../../components/MatchStatsInfo/MatchStatsInfo";

import "../../../components/MatchGeneralInfo/MatchGeneralInfo.css";
import { getMatch } from "../../../utils/api";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { referees } from "../../../utils/constants";

const Match = () => {
  const { id } = useParams();

  const [isHeaderShown, setIsHeaderShown] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [rating, setRating] = useState(0);
  const [isChoosingEvent, setIsChoosingEvent] = useState(false);
  const [reviewEvents, setReviewEvents] = useState([]);

  console.log(isChoosingEvent);

  const addEventToReview = (idx) => {
    setReviewEvents([...reviewEvents, idx]);
    setIsChoosingEvent(false);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 135) {
      setIsHeaderShown(true);
    } else {
      setIsHeaderShown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getMatch(id).then((data) => {
      setMatchData(data);
    });
  }, []);

  if (matchData == null) {
    return null;
  }

  return (
    <MatchPageWrapper>
      <div
        className="overlay"
        style={{ display: isChoosingEvent ? "block" : "none" }}
      />
      <main id="match-facts-wrapper">
        <div className="full-screen-match-content">
          <div className="match-page">
            <MatchGeneralInfo showHeader={isHeaderShown} data={matchData} />
            <MatchEventsInfo
              data={matchData}
              isChoosingEvent={isChoosingEvent}
              chosenEvents={reviewEvents}
              addEventToReview={addEventToReview}
            />
            <MatchSubsInfo data={matchData} />
            <MatchStatsInfo data={matchData.statistics} />
          </div>
          <div className="RightColumn">
            <div className="rating-container card-css">
              <section className="rating-section">
                <header className="rating-title-container">
                  <h2 className="rating-title">Rate referee performance</h2>
                </header>
                <div className="rating-body-container">
                  <div className="rating-body-referee-container">
                    <img
                      alt=""
                      className="Image team-icon referee-image"
                      width="30"
                      height="30"
                      src={referees[referees.length - 1].image}
                    />
                    <span>{referees[referees.length - 1].apiName}</span>
                  </div>
                  <div className="rating-body-rating-container">
                    <Rating allowHover={false} onClick={setRating} />
                    <TextField
                      className="referee-comment"
                      label="Review"
                      multiline
                      rows={4}
                      defaultValue=""
                      placeholder="Describe the referee's performance"
                      variant="filled"
                      color="primary"
                    />
                    <Button
                      onClick={() => setIsChoosingEvent(!isChoosingEvent)}
                      className="add-event-review-button"
                      variant={isChoosingEvent ? "contained" : "outlined"}
                      startIcon={isChoosingEvent ? <CancelIcon /> : <AddIcon />}
                    >
                      {isChoosingEvent ? "Cancel" : "Add Event Review"}
                    </Button>
                    <Button
                      className="add-review-button"
                      variant="contained"
                      disabled={rating === 0 ? true : false}
                    >
                      Add Review
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </MatchPageWrapper>
  );
};

export default Match;
