import { useAppContext } from "../context/appContext";
import Alert from "./Alert";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/ReportFormPage";
import RadioRow from "./RadioRow";
import Logo from "./Logo";
const ReportForm = () => {
  const {
    isEditingReport,
    isLoadingReport,
    displayAlert,
    showAlert,
    editReportId,
    handleChange,
    final_grade,
    strictness,
    accuracy,
    fairness,
    comments,
    editReport,
  } = useAppContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!final_grade || !strictness || !accuracy || !fairness || !comments) {
      displayAlert();
      return;
    }

    editReport();
  };
  useEffect(() => {
    if (!isEditingReport) {
      setTimeout(() => {
        navigate("/reports");
      }, 3000);
    }
  }, [isEditingReport, navigate]);
  /*const handleSave = (e) => {
    e.preventDefault();

    console.log("save report");
  };*/

  const handleInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Edit Report</h3>

        {showAlert && <Alert />}
        <div className="form-center">
          <RadioRow
            name="accuracy"
            handleChange={handleInput}
            labelText="Accuracy"
          />

          <RadioRow
            name="fairness"
            handleChange={handleInput}
            labelText="Fairness"
          />
        </div>
        <br></br>
        <div className="form-center">
          <RadioRow
            name="strictness"
            handleChange={handleInput}
            labelText="Strictness"
          />

          <RadioRow
            name="final_grade"
            handleChange={handleInput}
            labelText="Final Grade"
          />
        </div>
        <div className="div-2">
          <label htmlFor="comments"> Comments: </label>
          <br></br>
          <textarea
            id="comments"
            name="comments"
            rows="10"
            cols="130"
            value={comments}
            onChange={handleInput}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-block"
          disabled={isLoadingReport}
        >
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default ReportForm;
