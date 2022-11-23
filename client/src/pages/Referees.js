import React, { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";





const Referees = () => {

  const [ref, setRef] = useState("null");
  const baseURL = "/api/referee/20160";
  //const id = "20160";

  async function getRefereeData() {
	try {
		const response = await axios.get(`${baseURL}`);
    setRef(response.data);
		console.log(response);
	}
	catch (error) {
		console.log(error);
	}
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
        <button className="btn" onClick={() => {
          getRefereeData();
        }}>
        click to get referee</button>
        {ref}
      </div>
    </Wrapper>
  )
};

export default Referees;