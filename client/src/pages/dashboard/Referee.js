import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RefereePageWrapper from "../../assets/wrappers/RefereePage";
import RefereeInfoContainer from "../../components/RefereeInfoContainer";
import RefereeMatchesContainer from "../../components/RefereeMatchesContainer";
import RefereeTitleContainer from "../../components/RefereeTitleContainer";
import { useAppContext } from "../../context/appContext";

const Referee = () => {
  const { id } = useParams();

  const { referee, getReferee } = useAppContext();
  console.log("REFEREE: " + JSON.stringify(referee));

  useEffect(() => {
    getReferee(id);
  }, []);

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
        <RefereeMatchesContainer matches={referee?.matchesRuled} />
      </article>
    </RefereePageWrapper>
  );
};

export default Referee;
