import React, { useState } from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const Objection = () => {
  const [objection, setObjection] = useState({
    showError: false,
    referee: "",
    objectionText: "",
    ID: "",
    //new mongoose.Types.ObjectId()
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newObjection = { ...objection, [name]: value };

    if (newObjection.referee &&
        newObjection.objectionText) {
           newObjection.showError = false;
        }
    setObjection(newObjection);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (objection.referee && objection.objectionText) {
      setObjection({ referee: "", objectionText: "", showError:false });
    } else {
      setObjection({ ...objection, showError: true });
    }
  };
  return (
    <Wrapper className="full-page">
      <article className="form">
        <form>
          <Logo/>
          <div className="form-control">
            <label htmlFor="email">Referee name: </label>
            <input
              type="text"
              id="referee"
              name="referee"
              value={objection.referee}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Objection: </label>
            <input
              type="text"
              id="objectionText"
              name="objectionText"
              value={objection.objectionText}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {objection.showError ? (
          <h4 className="form-error">
            {(objection.referee &&
              objection.objectionText) ? null:
              "ERROR!!! Please fill all the blanks."}
          </h4>
        ) : null}
      </article>
    </Wrapper>
  );
};

export default Objection;
