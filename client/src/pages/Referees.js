import React, { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";





const Referees = () => {

  const [ref, setRef] = useState({});
  const [matches, setMatches] = useState([]);
  const [home, setHome] = useState("");
  const [showButton, setShowButton] = useState(true);

  const baseURL = "/api/referee/20160";
  //const id = "20160";

  async function getRefereeData() {
	try {
		const response = await axios.get(`${baseURL}`);
    setRef(response.data);
	}
	catch (error) {
		console.log(error);
	}
}

const handleClick = () => {
  getRefereeData();
  setShowButton(false)
}

  // useEffect(() => {
  //   getRefereeData();
  // },[])


  // useEffect(() => {
  //   axios.get(`${baseURL}`).then((response) => {
  //     setRef(response.data);
  //   }).catch(function(error) {
  //     console.log("There is an error")
  //   })
  // }, []);

  return (
    <Wrapper className="full-page">
      <div className="form">
        {showButton?<button className="btn" onClick={handleClick}>
        click to get referee</button>: ref["name"]}</div>
    </Wrapper>
  )
};

export default Referees;