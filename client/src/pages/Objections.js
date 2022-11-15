import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const GetObjection = () => {
  const [objection, setObjection] = useState({
    isGetting: true,
    teamName: "",
    referee: "",
    objectionText: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjection({ ...objection, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (objection.teamName && objection.referee && objection.objectionText) {
      setObjection({ teamName: "", referee: "", objectionText: "" });
    } else {
      setObjection({ ...objection, isGetting: false });
    }
  };
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="teamName">Team name: </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={objection.teamName}
              onChange={handleChange}
            />
          </div>
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
        {!objection.isGetting ? (
          <h4 className="form-error">
            {(objection.teamName &&
              objection.referee &&
              objection.objectionText) ||
              "ERROR!!! Please fill all the blanks."}
          </h4>
        ) : null}
      </article>
    </>
  );
};

export default GetObjection;
