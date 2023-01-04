import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/LandingPage";
import { Logo, FormRow } from "../../components"
import { useAppContext } from "../../context/appContext";
import axios from 'axios';
import {refToId, idToref} from "./refIds";
import { referees } from "../../utils/constants";
import WrapperRef from "../../assets/wrappers/RefereesPage";

const Objection = () => {
  const [sortedReferees, setSortedReferees] = useState([]);
  const [sortingValue, setSortingValue] = useState("alphabetic");
  const [isInvestigator, setIsInvestigator] = useState(false);
  const [isClubOrExp, setIsClubOrExp] = useState(false);
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
  const { user } = useAppContext();
  useEffect(() => {
    if (user.type == "investigator") {
      setIsInvestigator(true);
      console.log(user.type);
    }
    else if ((user.type == "expert" || user.type == "club")) {
      setIsClubOrExp(true);
      console.log(user.type);
    }
  }, []);

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

  const drop1 = async(e) => {
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
    await axios.put('/api/setInvestigate/'+div_id);
  };

  const drop2 = async(e) => {
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
    await axios.put('/api/setInReview/'+div_id);
  };

  const drop3 = async(e) => {
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
    await axios.put('/api/setSolved/'+div_id);
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
  const [refObjections, setRefObjections] = useState({Object});
  console.log(JSON.stringify(refObjections))
  const [end, setEnd] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
  if (sortingValue === "alphabetic") {
    let azReferees = [...referees];
    azReferees.sort(function (a, b) {
      var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
    setSortedReferees(
      [...azReferees].map((referee) => ({ ...referee, displayValue: "" }))
    );
  }
}, [sortingValue]);

  const handleInvestigationSubmit = (id) => {
    
    console.log(id);
      setShowInput(false);
      setIsLoading(true);
      console.log(searchId);
      getRefereeObjections(id);
      setSearchId("");
  }

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 3500);
    }
  }, [isLoading])

  

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

  const handleView = () => {
    setIsInvestigator(!isInvestigator);
    if(isInvestigator === true)
    {
    setShowInput(true);
    }
  }
    const handleSave = (obj) => {
      updateObjection(obj);
    }
  // const [isInvestigator, setIsInvetigator] = useState(true);
  
if(isInvestigator)
{
  return (
    <WrapperRef>
          <div className="card-css">
          <section>
            <div className="data-view-controls-container-css">
              <span className="css-league-span">Referees</span>
              <div>
                <div>
                  <select
                    className="select-applyMediumHover"
                    width="115.2109375"
                  >
                    <option value="2022/2023">2022/2023</option>
                    <span className="hidden-span">2022/2023</span>
                  </select>
                </div>
              </div>
            </div>
            <section className="league-season-stats-css">
              <div className="mui-paper-root">
                <div className="jss1">
                  <div className="jss2">
                    <div>
                      <table className="mui-table-root jss3">
                        <colgroup>
                          <col className="col1" />
                          <col className="col2" />
                          <col className="col3" />
                          <col className="col4" />
                        </colgroup>
                        <tbody className="mui-table-body-root">
                          {sortedReferees.map((referee, index) => (
                            <tr key={index} className="mui-table-row-root">
                              <td
                                className="mui-table-cell-root mui-table-cell-body jss7 jss11 css-table-cell"
                                colSpan="1"
                              >
                                {index + 1}
                              </td>
                              <td
                                className="mui-table-cell-root mui-table-cell-body jss7 jss10 jss11 css-table-cell"
                                colSpan="1"
                              >
                                <div className="referee-icon-container">
                                  <div
                                    className="referee-icon  referee-icon-css"
                                    width="42"
                                    height="42"
                                  >
                                    <img
                                      alt=""
                                      className="image referee-image"
                                      width="42"
                                      height="42"
                                      src={referee.image}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td
                                className="mui-table-cell-root mui-table-cell-body jss7 jss11 css-table-cell"
                                colSpan="1"
                              >
                                <a
                                  className="styled-link"
                                  onClick={()=>{handleInvestigationSubmit(referee.id)}}
                                >
                                  {referee.name}
                                </a>
                              </td>
                              <td
                                className="mui-table-cell-root mui-table-cell-body jss7 jss9 jss11 css-table-cell"
                                colSpan="1"
                              >
                                {referee.displayValue}
                                
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
          {isLoading ? <div>Loading...</div> :
          <div>  
            <div style={{display: "flex", justifyContent: "space-between", padding: "50px"}}>
              <h3>New Objections</h3>
              <h3>In progress</h3>
              <h3>Closed Objections</h3>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",padding: "50px",}}>
            <div onDrop={drop1} onDragOver={dragOver1} id="board-1" style={{border: "1px solid #222",padding: 20}}>
              {Array.isArray(refObjections.NoDecisions) && refObjections.NoDecisions.map((obj) => {
              return (
                <div key={obj._id} className="card w-100" id={obj._id} draggable onDragStart={dragStart} onDragOver={dragOver}>
                  <div className="card-body">
                    <h4 className="card-header">Objection:</h4>
                    <p className="card-text"> {obj.anObjection}</p>
                    <FormRow type="text" name="newComment" value={obj.comment} id="textfieldToClose" handleChange={(e) => {const temp = [...refObjections.NoDecisions];const idx = refObjections.NoDecisions.findIndex((item) => item._id === obj._id);temp[idx] = {...obj, comment: e.target.value};setRefObjections({...refObjections, NoDecisions: temp});}} labelText="My decision:"/>
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => handleSave(obj)}>Save</button>
                  </div>
                </div>
              )})}
            </div>
            <div id="board-2" onDrop={drop2} onDragOver={dragOver1} style={{border: "1px solid #222", padding: 20}}>
              {Array.isArray(refObjections.InReview) && refObjections.InReview.map((obj) => {
              return (
                <div key={obj._id} className="card w-100" id={obj._id} draggable onDragStart={dragStart} onDragOver={dragOver}>
                  <div className="card-body">
                    <h4 className="card-header">Objection:</h4>
                    <p className="card-text"> {obj.anObjection}</p>
                    <FormRow type="text" name="newComment" value={obj.comment} id="textfieldToClose" handleChange={(e) => {const temp = [...refObjections.InReview];const idx = refObjections.InReview.findIndex((item) => item._id === obj._id);temp[idx] = {...obj, comment: e.target.value};setRefObjections({...refObjections, InReview: temp});}} labelText="My decision:"/>
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => handleSave(obj)}>Save</button>
                  </div>
                </div>
              )})}
            </div>
            <div id="board-3" onDrop={drop3} onDragOver={dragOver1} style={{border: "1px solid #222",padding: 20}}>
              {Array.isArray(refObjections.End) && refObjections.End.map((obj) => {
              return (
                <div key={obj._id} className="card w-100" id={obj._id} draggable onDragStart={dragStart} onDragOver={dragOver}>
                  <div className="card-body">
                    <h4 className="card-header">Objection:</h4>
                    <p className="card-text"> {obj.anObjection}</p>
                    <FormRow type="text" name="newComment" value={obj.comment} id="textfieldToClose" handleChange={(e) => {const temp = [...refObjections.End];const idx = refObjections.End.findIndex((item) => item._id === obj._id);temp[idx] = {...obj, comment: e.target.value};setRefObjections({...refObjections, End: temp});}} labelText="My decision:"/>
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => handleSave(obj)}>Save</button>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>}
    </WrapperRef>
  )  
}
else if(isClubOrExp){
  return (
      <Wrapper className="full-page">
          <form className="form">
            <div style={{"textAlign": "center"}}>
              <Logo/>
              <h3>Objection</h3>
            </div>
            <FormRow type="text" name="referee" value={objection.referee} handleChange={handleChange} placeholder="Enter first letters capital and 1 whitespace between words..."/>
            <FormRow type="text" name="anObjection" value={objection.anObjection} handleChange={handleChange} labelText="Objection" placeholder="Enter your objection here..."/>
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
  }
else{
    return(
  <Wrapper className="full-page">
    <div>You are not authorized to enter this page.</div>
  </Wrapper>
    );
  }
};

export default Objection;