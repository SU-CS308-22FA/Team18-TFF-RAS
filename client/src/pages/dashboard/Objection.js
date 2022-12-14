import React, { useState } from "react";
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
    //new mongoose.Types.ObjectId()
  });


  const {createObjection} = useAppContext();

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

  
  // ----------------------------------------->>> for investigators


  // const [isInvestigator, setIsInvetigator] = useState(true);
  const isInvestigator = false;
if(isInvestigator)
{
  return (
    <Wrapper>
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
                <h4>Referee ID: {obj.refereeId}</h4>
                <h4>Referee ID: {obj.anObjection}</h4>
              </div>
            )
          })}</div>
          }
    </Wrapper>
  )
}
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
