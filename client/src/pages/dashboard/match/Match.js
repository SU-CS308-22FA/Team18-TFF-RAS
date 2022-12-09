import React, { useState, useEffect } from "react";

import MatchPageWrapper from "../../../assets/wrappers/MatchPage";
import MatchGeneralInfo from "../../../components/MatchGeneralInfo/MatchGeneralInfo";
import MatchEventsInfo from "../../../components/MatchEventsInfo/MatchEventsInfo";
import MatchSubsInfo from "../../../components/MatchSubsInfo/MatchSubsInfo";
import MatchStatsInfo from "../../../components/MatchStatsInfo/MatchStatsInfo";

import "../../../components/MatchGeneralInfo/MatchGeneralInfo.css";
import { getMatch } from "../../../utils/api";
import { useParams } from "react-router-dom";
import MatchRefRatingColumn from "../../../components/MatchRefRatingColumn/MatchRefRatingColumn";
import { referees } from "../../../utils/constants";
import { useAppContext } from "../../../context/appContext";

const Match = () => {
  const { id } = useParams();

  const { referees: storedReferees, getReferee } = useAppContext();
  console.log(JSON.stringify(storedReferees));

  const [isHeaderShown, setIsHeaderShown] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [rating, setRating] = useState(0);
  const [generalReview, setGeneralReview] = useState("");
  const [isChoosingEvent, setIsChoosingEvent] = useState(false);
  const [reviewEvents, setReviewEvents] = useState([]);
  const [reviewEventsComments, setReviewEventsComments] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [eventToBeDeleted, setEventToBeDeleted] = useState(-1);
  const [referee, setReferee] = useState(null);

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
    console.log(
      JSON.stringify({
        rating,
        review: generalReview,
        eventReviews: reviewEventsComments,
      })
    );
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
      const currentReferee = referees.find(
        (refereeObject) =>
          refereeObject?.apiName ===
          data.fixture.referee.slice(0, data.fixture.referee.indexOf(","))
      );
      getReferee(currentReferee.id);
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
          />
        </div>
      </main>
    </MatchPageWrapper>
  );
};

export default Match;
