import React, { useState, useEffect } from "react";

import GoalEventIcon from "../../../assets/images/goal-event-icon.svg";

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
      {/* <div style={{ width: "100%", height: 100, position: "relative" }}>
        <iframe
          src="https://www.scorebat.com/embed/v/63900a02a0901/?utm_source=api&utm_medium=video&utm_campaign=dflt"
          frameBorder="0"
          width="100%"
          height="100%"
          allowfullscreen
          allow="autoplay; fullscreen"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
          }}
        ></iframe>
      </div> */}
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
                    {reviewEvents.length > 0 ? (
                      <div className="reviews-divider" />
                    ) : null}
                    <div className="events-reviews-container">
                      {reviewEvents.map((reviewEvent, idx) => (
                        <div key={idx} className="event-review-container">
                          <div className="event-review-details-container">
                            <div className="event-review-time">
                              <span>88’ Goal!</span>
                            </div>
                            {/* <h5 className="event-review-title">Goal!</h5> */}
                          </div>
                          <a>
                            <div className="event-review-player-card-container">
                              <div className="event-review-player-title-details">
                                <div
                                  className="player-icon-css"
                                  width="40"
                                  height="40"
                                >
                                  <img
                                    alt=""
                                    className="Image PlayerImage"
                                    width="40"
                                    height="40"
                                    src="https://images.fotmob.com/image_resources/playerimages/291399.png"
                                  />
                                  <img
                                    alt=""
                                    className="Image review-team-icon"
                                    width="16"
                                    height="16"
                                    src="https://images.fotmob.com/image_resources/logo/teamlogo/8637_xsmall.png"
                                  />
                                </div>
                                <div className="event-review-player-name-container">
                                  <span className="event-review-player-first-name">
                                    Abdülkerim
                                  </span>
                                  <span className="event-review-player-last-name">
                                    Bardakci
                                  </span>
                                </div>
                              </div>
                              <img src={GoalEventIcon} />
                            </div>
                          </a>
                          <TextField
                            className="review-event-comment"
                            label="Event Review"
                            multiline
                            rows={3}
                            defaultValue=""
                            placeholder="Describe the referee's performance in this event"
                            variant="filled"
                            color="secondary"
                          />
                        </div>
                      ))}
                    </div>
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
