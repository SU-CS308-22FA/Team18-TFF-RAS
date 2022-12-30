import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/LandingPage";
import { Logo, FormRow } from "../../components";
import { useAppContext } from "../../context/appContext";

const Objection = () => {
  const [objection, setObjection] = useState({
    showError: false,
    referee: "",
    refereeId: "356",
    anObjection: "",
    isInProcess: false,
    clubId: "136",
    isResolved: false,
    //new mongoose.Types.ObjectId()
  });

  const { createObjection } = useAppContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newObjection = { ...objection, [name]: value };

    if (newObjection.referee && newObjection.anObjection) {
      newObjection.showError = false;
    }
    setObjection(newObjection);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (objection.referee && objection.anObjection) {
      createObjection(objection);
      setObjection({
        ...objection,
        referee: "",
        anObjection: "",
        showError: false,
      });
    } else {
      setObjection({ ...objection, showError: true });
    }
  };

  const drop1 = async (e) => {
    e.preventDefault();
    const div_id = e.dataTransfer.getData("div_id");
    console.log(div_id);
    const block = document.getElementById(div_id);
    console.log(block);
    let dropIndex = Array.from(e.target.children).findIndex(
      (child) => child.getBoundingClientRect().bottom > e.clientY
    );
    if (dropIndex === -1) {
      e.target.appendChild(block);
    } else {
      e.target.insertBefore(block, e.target.children[dropIndex]);
    }
    await axios.put("/api/setInvestigate/" + div_id);
  };

  const drop2 = async (e) => {
    e.preventDefault();
    const div_id = e.dataTransfer.getData("div_id");
    console.log(div_id);
    const block = document.getElementById(div_id);
    console.log(block);
    let dropIndex = Array.from(e.target.children).findIndex(
      (child) => child.getBoundingClientRect().bottom > e.clientY
    );
    if (dropIndex === -1) {
      e.target.appendChild(block);
    } else {
      e.target.insertBefore(block, e.target.children[dropIndex]);
    }
    await axios.put("/api/setInReview/" + div_id);
  };

  const drop3 = async (e) => {
    e.preventDefault();
    const div_id = e.dataTransfer.getData("div_id");
    console.log(div_id);
    const block = document.getElementById(div_id);
    console.log(block);
    let dropIndex = Array.from(e.target.children).findIndex(
      (child) => child.getBoundingClientRect().bottom > e.clientY
    );
    if (dropIndex === -1) {
      e.target.appendChild(block);
    } else {
      e.target.insertBefore(block, e.target.children[dropIndex]);
    }
    await axios.put("/api/setSolved/" + div_id);
  };

  const dragOver1 = (e) => {
    e.preventDefault();
  };

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("div_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  // ----------------------------------------->>> for investigators
  const baseURL = "/api/objection/";
  const [searchId, setSearchId] = useState("");
  const [refObjections, setRefObjections] = useState({ Object });
  console.log(JSON.stringify(refObjections));
  const [end, setEnd] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [error, setError] = useState(false);

  const handleInvestigationChange = (e) => {
    // console.log(e.target.value);
    setSearchId(e.target.value);
  };

  const handleInvestigationSubmit = () => {
    if (searchId !== "") {
      setShowInput(false);
      setIsLoading(true);
      console.log(searchId);
      getRefereeObjections(searchId);
      setSearchId("");
    }
  };

  async function getRefereeObjections(id) {
    // API
    try {
      const response = await axios.get(`${baseURL + id}`);
      const data = response.data;
      setRefObjections(data);
      console.log("refObjections: ", refObjections);
      setEnd(refObjections.End);
      console.log("end: ", end);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
    }
  }

  // ----------------------------------------->>> for investigators

  const handleView = () => {
    setIsInvestigator(!isInvestigator);
    if (isInvestigator === true) {
      setShowInput(true);
    }
  };
  // Commenting
  const [newComment, setNewComment] = useState("");
  const handleComment = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentClick = (obj) => {
    updateObjection(obj);
  };
  const handleClose = async (obj) => {
    let response = await axios.put("/api/makeSolved/" + obj._id);
    console.log(response);
  };
  const handleSave = (obj) => {
    updateObjection(obj);
  };
  const handlePost = async (obj) => {
    console.log(typeof obj._id);
    let response = await axios.put("/api/makeInReview/" + obj._id);
    console.log(response);
  };
  // Commenting

  // const [isInvestigator, setIsInvetigator] = useState(true);
  const [isInvestigator, setIsInvestigator] = useState(false);
  if (isInvestigator) {
    return (
      <Wrapper>
        <button type="submit" className="btn" onClick={handleView}>
          Change View
        </button>
        {showInput ? (
          <form className="form">
            <div style={{ textAlign: "center" }}>
              <Logo />
              <h3>See Referee Objections</h3>
            </div>
            <FormRow
              type="text"
              name="searchId"
              value={searchId}
              handleChange={handleInvestigationChange}
              labelText="Referee Id:"
            />
            <button
              type="submit"
              className="btn"
              onClick={handleInvestigationSubmit}
            >
              See Objections
            </button>
          </form>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "50px",
              }}
            >
              <h3>New Objections</h3>
              <h3>In progress</h3>
              <h3>Closed Objections</h3>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "50px",
              }}
            >
              <div
                onDrop={drop1}
                onDragOver={dragOver1}
                id="board-1"
                style={{
                  border: "1px solid #222",
                  padding: 20,
                }}
              >
                {refObjections.NoDecisions.map((obj) => {
                  return (
                    <div
                      key={obj._id}
                      className="card w-100"
                      id={obj._id}
                      draggable
                      onDragStart={dragStart}
                      onDragOver={dragOver}
                    >
                      <div className="card-body">
                        <h4 className="card-header">Objection:</h4>
                        <p className="card-text"> {obj.anObjection}</p>
                        <FormRow
                          type="text"
                          name="newComment"
                          value={obj.comment}
                          id="textfieldToClose"
                          handleChange={(e) => {
                            const temp = [...refObjections.NoDecisions];
                            const idx = refObjections.NoDecisions.findIndex(
                              (item) => item._id === obj._id
                            );
                            temp[idx] = { ...obj, comment: e.target.value };
                            setRefObjections({
                              ...refObjections,
                              NoDecisions: temp,
                            });
                          }}
                          labelText="My decision:"
                        />
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={() => handleSave(obj)}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                id="board-2"
                onDrop={drop2}
                onDragOver={dragOver1}
                style={{
                  border: "1px solid #222",
                  padding: 20,
                }}
              >
                {refObjections.InReview.map((obj) => {
                  return (
                    <div
                      key={obj._id}
                      className="card w-100"
                      id={obj._id}
                      draggable
                      onDragStart={dragStart}
                      onDragOver={dragOver}
                    >
                      <div className="card-body">
                        <h4 className="card-header">Objection:</h4>
                        <p className="card-text"> {obj.anObjection}</p>
                        <FormRow
                          type="text"
                          name="newComment"
                          value={obj.comment}
                          id="textfieldToClose"
                          handleChange={(e) => {
                            const temp = [...refObjections.InReview];
                            const idx = refObjections.InReview.findIndex(
                              (item) => item._id === obj._id
                            );
                            temp[idx] = { ...obj, comment: e.target.value };
                            setRefObjections({
                              ...refObjections,
                              InReview: temp,
                            });
                          }}
                          labelText="My decision:"
                        />
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={() => handleSave(obj)}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                id="board-3"
                onDrop={drop3}
                onDragOver={dragOver1}
                style={{
                  border: "1px solid #222",
                  padding: 20,
                }}
              >
                {refObjections.End.map((obj) => {
                  return (
                    <div
                      key={obj._id}
                      className="card w-100"
                      id={obj._id}
                      draggable
                      onDragStart={dragStart}
                      onDragOver={dragOver}
                    >
                      <div className="card-body">
                        <h4 className="card-header">Objection:</h4>
                        <p className="card-text"> {obj.anObjection}</p>
                        <FormRow
                          type="text"
                          name="newComment"
                          value={obj.comment}
                          id="textfieldToClose"
                          handleChange={(e) => {
                            const temp = [...refObjections.End];
                            const idx = refObjections.End.findIndex(
                              (item) => item._id === obj._id
                            );
                            temp[idx] = { ...obj, comment: e.target.value };
                            setRefObjections({ ...refObjections, End: temp });
                          }}
                          labelText="My decision:"
                        />
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={() => handleSave(obj)}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    );
  }
  return (
    <Wrapper className="full-page">
      <button type="submit" className="btn" onClick={handleView}>
        Change View
      </button>
      <form className="form">
        <div style={{ textAlign: "center" }}>
          <Logo />
          <h3>Objection</h3>
        </div>
        <FormRow
          type="text"
          name="referee"
          value={objection.referee}
          handleChange={handleChange}
          placeholder="Enter first letters capital and 1 whitespace between words..."
        />
        <FormRow
          type="text"
          name="anObjection"
          value={objection.anObjection}
          handleChange={handleChange}
          labelText="Objection"
          placeholder="Enter your objection here..."
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>
        {objection.showError ? (
          <h4 className="form-error">
            {objection.referee && objection.anObjection
              ? null
              : "ERROR!!! Please fill all the blanks."}
          </h4>
        ) : null}
      </form>
    </Wrapper>
  );
};

export default Objection;
