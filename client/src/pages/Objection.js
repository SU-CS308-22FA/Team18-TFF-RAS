import React, { useState } from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo, FormRow } from "../components";
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
        <form className="form">
          <div style={{"textAlign": "center"}}>
            <Logo/>
            <h3>Objection</h3>
          </div>
          <FormRow
            type="text"
            name="referee"
            value={objection.referee}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="objectionText"
            value={objection.objectionText}
            handleChange={handleChange}
            labelText="Objection"
          />
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        {objection.showError ? (
          <h4 className="form-error">
            {(objection.referee &&
              objection.objectionText) ? null:
              "ERROR!!! Please fill all the blanks."}
          </h4>
        ) : null}
        </form>
    </Wrapper>
  );
};

export default Objection;
