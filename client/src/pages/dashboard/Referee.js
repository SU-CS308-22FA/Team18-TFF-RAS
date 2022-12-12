import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RefereePageWrapper from "../../assets/wrappers/RefereePage";
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
        <div className="referee-page-card-css"></div>
      </article>
    </RefereePageWrapper>
  );
};

export default Referee;
