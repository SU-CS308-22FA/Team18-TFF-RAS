import React, { useState, useEffect } from "react";

import MatchPageWrapper from "../../../assets/wrappers/MatchPage";
import MatchGeneralInfo from "../../../components/MatchGeneralInfo/MatchGeneralInfo";
import MatchEventsInfo from "../../../components/MatchEventsInfo/MatchEventsInfo";
import MatchSubsInfo from "../../../components/MatchSubsInfo/MatchSubsInfo";
import MatchStatsInfo from "../../../components/MatchStatsInfo/MatchStatsInfo";

import DefaultReferee from "../../../assets/images/default_referee.jpeg";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "../../../components/MatchGeneralInfo/MatchGeneralInfo.css";
import { getMatch } from "../../../utils/api";
import { useParams } from "react-router-dom";
import MatchRefRatingColumn from "../../../components/MatchRefRatingColumn/MatchRefRatingColumn";
import { referees } from "../../../utils/constants";
import { useAppContext } from "../../../context/appContext";

const Match = () => {
  const { id } = useParams();

  const {
    getRating,
    createRating,
    clearModal,
    showModal,
    modalType,
    modalText,
    ratingGiven,
    rating: storedRating,
    review: storedReview,
    eventReviews: storedEventReviews,
    loading,
    user,
  } = useAppContext();
  console.log(storedRating);
  console.log(storedReview);
  console.log(storedEventReviews);
  console.log("ENDD");

  const [isHeaderShown, setIsHeaderShown] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [rating, setRating] = useState(0);
  const [generalReview, setGeneralReview] = useState("");
  const [isChoosingEvent, setIsChoosingEvent] = useState(false);
  const [reviewEvents, setReviewEvents] = useState([]);
  const [reviewEventsComments, setReviewEventsComments] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [eventToBeDeleted, setEventToBeDeleted] = useState(-1);
  const [refID, setRefID] = useState(null);
  const [showError, setShowError] = useState(false);
  const [refereeName, setRefereeName] = useState("");
  const [refereeImage, setRefereeImage] = useState(DefaultReferee);
  const [currentTime, setCurrentTime] = useState("");
  const [intervalID, setIntervalID] = useState(null);

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
    if (["FT", "PEN", "AET"].includes(matchData.fixture.status.short)) {
      newData.push({ type: "full-time" });
    }
  }

  const addEventToReview = (idx) => {
    setReviewEvents([...reviewEvents, idx]);
    setReviewEventsComments({ ...reviewEventsComments, [idx.toString()]: "" });
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

  const onReviewSubmit = () => {
    for (let i = 0; i < reviewEvents.length; i++) {
      if (reviewEventsComments[reviewEvents[i].toString()] === "") {
        setShowError(true);
        return;
      }
    }
    setShowError(false);

    let submitObject = {
      rating,
      match: matchData.fixture.id,
      referee: refID,
      ratingType: user.type,
    };

    // check for review
    if (generalReview !== "") {
      submitObject.review = generalReview;
    }

    // check for eventReviews
    if (Object.keys(reviewEventsComments).length !== 0) {
      submitObject.eventReviews = reviewEventsComments;
    }

    // console.log(submitObject);
    createRating(submitObject);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const matchIntervalID = setInterval(
      getMatch(id).then((data) => {
        setMatchData(data);

        // set referee
        if (data?.fixture?.referee !== null) {
          const currentReferee = referees.find((refereeObject) =>
            refereeObject?.apiName.includes(
              data.fixture.referee.indexOf(",") === -1
                ? data.fixture.referee
                : data.fixture.referee.slice(
                    0,
                    data.fixture.referee.indexOf(",")
                  )
            )
          );
          // getReferee(currentReferee.id);
          setRefID(currentReferee.id);
          setRefereeName(currentReferee.name);
          if (currentReferee?.image) {
            setRefereeImage(currentReferee?.image);
          }
        }

        // get rating
        getRating(data.fixture.id);

        // handle current time
        if (["1H", "2H", "ET"].includes(data.fixture.status.short)) {
          setIntervalID(
            setInterval(() => {
              const { timestamp } = data.fixture;
              let seconds = new Date().getTime() - timestamp;
              seconds = Math.floor(seconds / 1000);
              let minutes = Math.floor(seconds / 60);
              seconds %= 60;
              setCurrentTime(`${minutes}:${seconds}`);
            }, 1000)
          );
        } else if (intervalID !== null) {
          clearInterval(intervalID);
          setIntervalID(null);
        }
      }),
      30000
    );

    return () => clearInterval(matchIntervalID);
  }, []);

  if (matchData == null) {
    return null;
  }

  return (
    <MatchPageWrapper>
      <Dialog open={showModal} onClose={clearModal}>
        {/* <DialogTitle>{"Delete this event review?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText>{modalText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              clearModal();
            }}
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
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
            <MatchGeneralInfo
              showHeader={isHeaderShown}
              data={matchData}
              currentTime={currentTime}
            />
            {matchData?.events.length > 0 ? (
              <MatchEventsInfo
                data={matchData}
                newData={newData}
                isChoosingEvent={isChoosingEvent}
                chosenEvents={reviewEvents}
                addEventToReview={addEventToReview}
              />
            ) : null}
            {matchData?.lineups.length > 0 &&
            matchData.lineups[0]?.formation !== null ? (
              <MatchSubsInfo data={matchData} />
            ) : null}
            {matchData?.statistics.length > 0 ? (
              <MatchStatsInfo data={matchData.statistics} />
            ) : null}
          </div>
          {["fan", "expert"].includes(user?.type) &&
          ["FT", "PEN", "AET"].includes(matchData?.fixture?.status) ? (
            <MatchRefRatingColumn
              setRating={setRating}
              rating={rating}
              reviewEvents={reviewEvents}
              setReviewEvents={setReviewEvents}
              matchData={matchData}
              newData={newData}
              isDeleteModalOpen={isDeleteModalOpen}
              setIsDeleteModalOpen={setIsDeleteModalOpen}
              isChoosingEvent={isChoosingEvent}
              setIsChoosingEvent={setIsChoosingEvent}
              generalReview={generalReview}
              setGeneralReview={setGeneralReview}
              reviewEventsComments={reviewEventsComments}
              setReviewEventsComments={setReviewEventsComments}
              onReviewSubmit={onReviewSubmit}
              eventToBeDeleted={eventToBeDeleted}
              setEventToBeDeleted={setEventToBeDeleted}
              showError={showError}
              ratingGiven={ratingGiven}
              storedRating={storedRating}
              storedReview={storedReview}
              storedEventReviews={storedEventReviews}
              refereeName={refereeName}
              refereeImage={refereeImage}
              loading={loading}
              refID={refID}
            />
          ) : (
            <div className="not-a-fan-container">
              {!["fan", "expert"].includes(user?.type)
                ? "Only fans and experts can rate and leave reviews on referees' performances."
                : `Rating and review for ${
                    matchData?.fixture?.referee !== null
                      ? matchData.fixture.referee
                      : "the referee"
                  }'s performance in this match will be opened once match is finished.`}
            </div>
          )}
        </div>
      </main>
    </MatchPageWrapper>
  );
};

export default Match;
