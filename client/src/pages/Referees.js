import React, { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const Referees = () => {

  const [ref, setRef] = useState(null);
  const baseURL = "http://localhost:3000/referee-page/api/referee/";
  const id = "20160";

  useEffect(() => {
    axios.get(`${baseURL + id}`).then((response) => {
      setRef(response.data);
    })
  }, []);

  return (
    <Wrapper className="full-page">
      <div className="form">
        {ref}
      </div>
    </Wrapper>
  )
};

export default Referees;