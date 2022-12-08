import React, { useState, useEffect } from "react";

import GoalEventIcon from "../../../assets/images/goal-event-icon.svg";
import OwnGoalEventIcon from "../../../assets/images/own-goal-event-icon.svg";
import CardYellow from "../../../assets/images/card-yellow.svg";
import CardRed from "../../../assets/images/card-red.svg";
import CardDoubleYellow from "../../../assets/images/card-double-yellow.svg";
import VarIcon from "../../../assets/images/var-icon.svg";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

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
import { getReviewEventTimeString } from "../../../utils/helper";

const Match = () => {
  const { id } = useParams();

  const [isHeaderShown, setIsHeaderShown] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [rating, setRating] = useState(0);
  const [isChoosingEvent, setIsChoosingEvent] = useState(false);
  const [reviewEvents, setReviewEvents] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // sort and filter events
  const newData = [];
  if (matchData != null) {
    const currentEvents = [...matchData.events]
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
  }

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
              newData={newData}
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
                      disabled={rating === 0}
                    />
                    {reviewEvents.length > 0 ? (
                      <div className="reviews-divider" />
                    ) : null}
                    <div className="events-reviews-container">
                      {reviewEvents.map((reviewEventIdx, idx) => {
                        const currentPlayer = matchData.players[0].players
                          .concat(matchData.players[1].players)
                          .find(
                            (player) =>
                              player.player.id ===
                              newData[reviewEventIdx].player.id
                          ).player;
                        return (
                          <div key={idx} className="event-review-container">
                            <div className="event-review-details-container">
                              <div className="event-review-time">
                                <span>
                                  {getReviewEventTimeString(
                                    newData[reviewEventIdx]
                                  )}{" "}
                                  {newData[reviewEventIdx].type === "Goal"
                                    ? "Goal"
                                    : newData[reviewEventIdx].detail}
                                </span>
                              </div>
                              {/* <h5 className="event-review-title">Goal!</h5> */}
                            </div>
                            <a>
                              <Dialog
                                open={isDeleteModalOpen}
                                onClose={() => setIsDeleteModalOpen(false)}
                              >
                                <DialogTitle>
                                  {"Delete this event review?"}
                                </DialogTitle>
                                <DialogContent>
                                  <DialogContentText>
                                    You won't be able to retrieve your review
                                    for this event after deleting it.
                                  </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                  <Button
                                    onClick={() => setIsDeleteModalOpen(false)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => {
                                      setReviewEvents(
                                        reviewEvents.filter(
                                          (rE) => rE != reviewEventIdx
                                        )
                                      );
                                      setIsDeleteModalOpen(false);
                                    }}
                                    autoFocus
                                  >
                                    Delete
                                  </Button>
                                </DialogActions>
                              </Dialog>
                              <div className="event-review-player-card-container">
                                <div className="event-review-delete-overlay">
                                  <div className="event-review-delete-overlay-empty" />
                                  <div
                                    className="event-review-delete-content"
                                    onClick={() => setIsDeleteModalOpen(true)}
                                  >
                                    <DeleteIcon className="delete-icon" />
                                    <span>Delete event review</span>
                                  </div>
                                </div>
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
                                      src={currentPlayer.photo}
                                    />
                                    <img
                                      alt=""
                                      className="Image review-team-icon"
                                      width="16"
                                      height="16"
                                      src={
                                        matchData.players[0].players
                                          .concat(matchData.players[1].players)
                                          .findIndex(
                                            (player) =>
                                              player.player.id ===
                                              newData[reviewEventIdx].player.id
                                          ) <
                                        matchData.players[0].players.length
                                          ? matchData.teams.home.logo
                                          : matchData.teams.away.logo
                                      }
                                    />
                                  </div>
                                  <div className="event-review-player-name-container">
                                    <span className="event-review-player-first-name">
                                      {currentPlayer.name.slice(
                                        0,
                                        currentPlayer.name.indexOf(" ")
                                      )}
                                    </span>
                                    <span className="event-review-player-last-name">
                                      {currentPlayer.name.slice(
                                        currentPlayer.name.indexOf(" ") + 1,
                                        currentPlayer.name.length
                                      )}
                                    </span>
                                  </div>
                                </div>
                                <img
                                  src={
                                    newData[reviewEventIdx].type === "Goal"
                                      ? newData[reviewEventIdx].detail ===
                                        "Own Goal"
                                        ? OwnGoalEventIcon
                                        : GoalEventIcon
                                      : newData[reviewEventIdx].type === "Card"
                                      ? newData[reviewEventIdx].detail ===
                                        "Yellow Card"
                                        ? CardYellow
                                        : CardRed
                                      : VarIcon
                                  }
                                />
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
                        );
                      })}
                    </div>
                    <Button
                      onClick={() => setIsChoosingEvent(!isChoosingEvent)}
                      className="add-event-review-button"
                      variant={isChoosingEvent ? "contained" : "outlined"}
                      startIcon={isChoosingEvent ? <CancelIcon /> : <AddIcon />}
                      disabled={rating === 0 ? true : false}
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
