import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RefereePageWrapper from "../../assets/wrappers/RefereePage";
import RefereeInfoContainer from "../../components/RefereeInfoContainer";
import RefereeMatchesContainer from "../../components/RefereeMatchesContainer";
import RefereeTitleContainer from "../../components/RefereeTitleContainer";
import { useAppContext } from "../../context/appContext";

const Referee = () => {
  const { id } = useParams();

  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (event, value) => {
    setCurrentPage(value);
  };

  const { referee, getReferee } = useAppContext();
  console.log("REFEREE: " + JSON.stringify(referee));

  useEffect(() => {
    getReferee(id);
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
        />
        <RefereeInfoContainer
          region={referee?.region}
          licenseNumber={referee?.lisenceNumber}
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
