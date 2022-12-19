import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/LandingPage";
import { Logo, FormRow } from "../../components"
import { useAppContext } from "../../context/appContext";
import axios from 'axios';
import {refToId, idToref} from "./refIds";

const Objection = () => {
  const [objection, setObjection] = useState({
    showError: false,
    referee: "",
    refereeId: "",
    anObjection: "",
    isInProcess: false,
    clubId: "123",
    isResolved: false,
    comment: "",
    //new mongoose.Types.ObjectId()
  });


  const {createObjection, deleteObjection ,updateObjection, alertText} = useAppContext();

  useEffect(() => {
    if (alertText === "Updated") {
      alert("Comment added")
    }
  }, [alertText])
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newObjection = { ...objection, [name]: value, refereeId: refToId[objection.referee]};
    
    if (newObjection.referee &&
        newObjection.anObjection) {
           newObjection.showError = false;
        }
    setObjection(newObjection);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (objection.referee && objection.anObjection) {
      createObjection(objection);
      setObjection({ ...objection, referee: "", anObjection: "", showError:false });
    } else {
      setObjection({ ...objection, showError: true });
    }
  };

  // ----------------------------------------->>> for investigators
  const baseURL = "/api/objection/";
  const [searchId, setSearchId] = useState("");
  const [refObjections, setRefObjections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [error, setError] = useState(false);


const handleInvestigationChange = (e) => {
    // console.log(e.target.value);
    setSearchId(e.target.value);
  }


  const handleInvestigationSubmit = () => {
    if(searchId !== "")
    {
      setShowInput(false);
      setIsLoading(true);
      console.log(searchId);
      getRefereeObjections(searchId);
      setSearchId("");
    }
  }

    async function getRefereeObjections(id) { // API
      try {
        const response = await axios.get(`${baseURL + id}`);
        const data = response.data;
        setRefObjections(data);
        setIsLoading(false);
      }
      catch (error) {
        console.log(error)
        setIsLoading(false);
        setError(true);
      }
    }

    const handleClose = async (obj) => {
      deleteObjection(obj)
      setRefObjections(refObjections.filter((o) => o._id !== obj._id))
    }
  
  // ----------------------------------------->>> for investigators

  const handleView = () => {
    setIsInvestigator(!isInvestigator);
    if(isInvestigator === true)
    {
    setShowInput(true);
    }
  }
// Commenting
const [newComment, setNewComment] = useState("");
  const handleComment = (e) => {
    setNewComment(e.target.value);
    }

    const handleCommentClick = (obj) => {
      updateObjection(obj);
    }
    const handleSave = (obj) => {
      updateObjection(obj);
    }
    const handlePost = async (obj) => {
      console.log("f id: ", obj._id);
      let response = await axios.put('http://localhost:4000/api/v1/makeInReview/'+ obj._id);
      console.log(response);
    }
// Commenting

  // const [isInvestigator, setIsInvetigator] = useState(true);
  const [isInvestigator, setIsInvestigator] = useState(false);
if(isInvestigator)
{
  return (
    <Wrapper>
      <button type="submit" className="btn" onClick={handleView}>
            Change View
            </button>
            {showInput? 
          <form className="form">
            <div style={{"textAlign": "center"}}>
              <Logo/>
              <h3>See Referee Objections</h3>
            </div>
            <FormRow
              type="text"
              name="searchId"
              value={searchId}
              handleChange={handleInvestigationChange}
              labelText="Referee Id:"
              />
            <button type="submit" className="btn" onClick={handleInvestigationSubmit}>
              See Objections
            </button>
          </form>
            : 
          isLoading? <div>Loading...</div> : <div> <h1>Objections: </h1> {refObjections.map((obj) => {
            return (
              <div key={obj._id} className="form">
                <h4>Referee ID:</h4> <h5>{obj.refereeId}</h5>
                <h4>Objection:</h4> <h5> {obj.anObjection}</h5>
            <FormRow
              type="text"
              name="newComment"
              value={obj.comment}
              id="textfieldToClose"
              handleChange={(e) => {
                const temp = [...refObjections];
                const idx = refObjections.findIndex((item) => item._id === obj._id);
                temp[idx] = {...obj, comment: e.target.value};
                setRefObjections(temp);
              }}
              labelText="My decision:"
              />
            <div>
            <button type="submit"
              className="btn"
              onClick={() => handlePost(obj)}>
              Post Decision
            </button>
            <button type="submit" className="btn" onClick={() => handleClose(obj)}>
              Close Objection
            </button>
            <button type="submit" className="btn" onClick={() => handleSave(obj)}>
              Save
            </button>
            </div>
              </div>
            )
          })}</div>
          }
    </Wrapper>
  )
}
  return (
      <Wrapper className="full-page">
        <button type="submit" className="btn" onClick={handleView}>
            Change View
            </button>
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
              {(objection.referee &&
                objection.anObjection) ? null:
                "ERROR!!! Please fill all the blanks."}
            </h4>
          ) : null}
          </form>
      </Wrapper>
    );  
};

export default Objection;
