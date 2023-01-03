import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Wrapper from "../assets/wrappers/ReportContainer";
import Report from "./Report";

const ReportContainer = () => {
  const {
    getDueReports,
    dueReports,
    isLoading,
    numDueReports,
    numofDueReportPages,
  } = useAppContext();
  useEffect(() => {
    getDueReports();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (numDueReports === 0) {
    return (
      <Wrapper>
        <h2>All reports have been submitted</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {numDueReports} Due Report{dueReports.length > 1 && "s"} found
      </h5>
      <div className="reports">
        {dueReports.map((report) => {
          return <Report key={report._id} {...report} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ReportContainer;
