import MatchGeneralInfo from "../../../components/MatchGeneralInfo/MatchGeneralInfo";
import MatchEventsInfo from "../../../components/MatchEventsInfo/MatchEventsInfo";
import MatchSubsInfo from "../../../components/MatchSubsInfo/MatchSubsInfo";
import MatchStatsInfo from "../../../components/MatchStatsInfo/MatchStatsInfo";

const Match = () => {
  return (
    <>
      <MatchGeneralInfo />
      <MatchEventsInfo />
      <MatchSubsInfo />
      <MatchStatsInfo />
    </>
  );
};

export default Match;
