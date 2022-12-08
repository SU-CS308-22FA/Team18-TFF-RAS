/* eslint-disable react/prop-types */
import GoalEventIcon from "../../assets/images/goal-event-icon.svg";
import OwnGoalEventIcon from "../../assets/images/own-goal-event-icon.svg";
import CardYellow from "../../assets/images/card-yellow.svg";
import CardRed from "../../assets/images/card-red.svg";
import CardDoubleYellow from "../../assets/images/card-double-yellow.svg";
import VarIcon from "../../assets/images/var-icon.svg";

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

import { Rating } from "react-simple-star-rating";
import { referees } from "../../utils/constants";
import { getReviewEventTimeString } from "../../utils/helper";

const MatchRefRatingColumn = ({
  setRating,
  rating,
  reviewEvents,
  setReviewEvents,
  matchData,
  newData,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  isChoosingEvent,
  setIsChoosingEvent,
  generalReview,
  setGeneralReview,
  reviewEventsComments,
  setReviewEventsComments,
  onReviewSubmit,
  eventToBeDeleted,
  setEventToBeDeleted,
}) => {
  console.log(reviewEvents);
  return (
    <div className="RightColumn">
      <Dialog
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <DialogTitle>{"Delete this event review?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You won't be able to retrieve your review for this event after
            deleting it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              setReviewEvents(
                reviewEvents.filter((rE) => rE != eventToBeDeleted)
              );
              setReviewEventsComments({
                ...reviewEventsComments,
                [eventToBeDeleted.toString()]: "",
              });
              setIsDeleteModalOpen(false);
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
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
                value={generalReview}
                onChange={(event) => setGeneralReview(event.target.value)}
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
                        player.player.id === newData[reviewEventIdx].player.id
                    ).player;
                  return (
                    <div key={idx} className="event-review-container">
                      <div className="event-review-details-container">
                        <div className="event-review-time">
                          <span>
                            {getReviewEventTimeString(newData[reviewEventIdx])}{" "}
                            {newData[reviewEventIdx].type === "Goal"
                              ? "Goal"
                              : newData[reviewEventIdx].detail}
                          </span>
                        </div>
                        {/* <h5 className="event-review-title">Goal!</h5> */}
                      </div>
                      <a>
                        <div className="event-review-player-card-container">
                          <div className="event-review-delete-overlay">
                            <div className="event-review-delete-overlay-empty" />
                            <div
                              className="event-review-delete-content"
                              onClick={() => {
                                setEventToBeDeleted(reviewEventIdx);
                                setIsDeleteModalOpen(true);
                              }}
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
                                    ) < matchData.players[0].players.length
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
                                ? newData[reviewEventIdx].detail === "Own Goal"
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
                        value={reviewEventsComments[reviewEventIdx.toString()]}
                        onChange={(event) => {
                          setReviewEventsComments({
                            ...reviewEventsComments,
                            [reviewEventIdx.toString()]: event.target.value,
                          });
                        }}
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
                onClick={onReviewSubmit}
              >
                Add Review
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MatchRefRatingColumn;
