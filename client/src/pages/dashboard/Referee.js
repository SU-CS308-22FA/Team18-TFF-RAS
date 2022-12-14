import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RefereePageWrapper from "../../assets/wrappers/RefereePage";
import RefereeInfoContainer from "../../components/RefereeInfoContainer";
import RefereeMatchesContainer from "../../components/RefereeMatchesContainer";
import RefereeTitleContainer from "../../components/RefereeTitleContainer";
import { useAppContext } from "../../context/appContext";
import { referees } from "../../utils/constants";

const Referee = () => {
  const { id } = useParams();
  const refereePhoto = referees.find((ref) => ref.id === id).image;

  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (event, value) => {
    setCurrentPage(value);
  };

  const {
    referee,
    getReferee,
    handleChange,
    getRefereeRatings,
    overallRating,
    fanRating,
    expertRating,
    overallSentiment,
    fanSentiment,
    expertSentiment,
  } = useAppContext();

  let homeAvgGoal = "-";
  let awayAvgGoal = "-";
  let homeAvgYellow = "-";
  let awayAvgYellow = "-";
  let homeAvgRed = "-";
  let awayAvgRed = "-";

  if (referee !== null) {
    homeAvgGoal = 0;
    awayAvgGoal = 0;
    homeAvgYellow = 0;
    awayAvgYellow = 0;
    homeAvgRed = 0;
    awayAvgRed = 0;

    let currentMatch = null;
    let goalMatchesNumber = referee.matchesRuled.length;
    for (let i = 0; i < referee.matchesRuled.length; i++) {
      currentMatch = referee.matchesRuled[i].matchDetail;

      if (currentMatch.Teams.homeScore === "") {
        goalMatchesNumber--;
      } else {
        homeAvgGoal += parseInt(currentMatch.Teams.homeScore);
        awayAvgGoal += parseInt(currentMatch.Teams.awayScore);
      }

      homeAvgYellow += currentMatch.HomeCards.filter(
        (card) => card.cardType === "yellow"
      ).length;
      awayAvgYellow += currentMatch.AwayCards.filter(
        (card) => card.cardType === "yellow"
      ).length;

      homeAvgRed += currentMatch.HomeCards.filter(
        (card) => card.cardType === "red"
      ).length;
      awayAvgRed += currentMatch.AwayCards.filter(
        (card) => card.cardType === "red"
      ).length;
    }

    homeAvgGoal /= goalMatchesNumber;
    homeAvgGoal = homeAvgGoal.toFixed(2);
    awayAvgGoal /= goalMatchesNumber;
    awayAvgGoal = awayAvgGoal.toFixed(2);
    homeAvgYellow /= referee.matchesRuled.length;
    homeAvgYellow = homeAvgYellow.toFixed(2);
    awayAvgYellow /= referee.matchesRuled.length;
    awayAvgYellow = awayAvgYellow.toFixed(2);
    homeAvgRed /= referee.matchesRuled.length;
    homeAvgRed = homeAvgRed.toFixed(2);
    awayAvgRed /= referee.matchesRuled.length;
    awayAvgRed = awayAvgRed.toFixed(2);
  }

  useEffect(() => {
    getReferee(id);
    getRefereeRatings(id);

    return () => {
      handleChange({ name: "referee", value: null });

      handleChange({ name: "overallRating", value: "-" });
      handleChange({ name: "fanRating", value: "-" });
      handleChange({ name: "expertRating", value: "-" });
      handleChange({ name: "overallSentiment", value: "-" });
      handleChange({ name: "fanSentiment", value: "-" });
      handleChange({ name: "expertSentiment", value: "-" });
    };
  }, []);

  useEffect(() => {
    if (referee !== null) {
      setNumPages(Math.ceil(referee.matchesRuled.length / 10));
    }
  }, [referee]);

  return (
    <RefereePageWrapper>
      <article className="referee-page-content">
        <RefereeTitleContainer
          name={referee?.name}
          classification={referee?.classification}
          image={refereePhoto}
        />
        <RefereeInfoContainer
          homeAvgGoal={homeAvgGoal}
          awayAvgGoal={awayAvgGoal}
          homeAvgYellow={homeAvgYellow}
          awayAvgYellow={awayAvgYellow}
          homeAvgRed={homeAvgRed}
          awayAvgRed={awayAvgRed}
          region={referee?.region}
          licenseNumber={referee?.lisenceNumber}
          overallRating={overallRating}
          fanRating={fanRating}
          expertRating={expertRating}
          overallSentiment={overallSentiment}
          fanSentiment={fanSentiment}
          expertSentiment={expertSentiment}
        />
        <RefereeMatchesContainer
          matches={referee?.matchesRuled.slice(
            10 * (currentPage - 1),
            10 * currentPage
          )}
          numPages={numPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </article>
    </RefereePageWrapper>
  );
};

export default Referee;
