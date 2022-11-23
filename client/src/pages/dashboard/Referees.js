import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios";


const Referees = () => {

  const [refName, setRefName] = useState("");
  const [license, setLicense] = useState("");
  const [games, setGames] = useState([]);
  const [classification, setClassification] = useState("");
  const [region, setRegion] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = "/api/referee/";
  const id = "20160";

  async function getRefereeData() {
	try {
		const response = await axios.get(`${baseURL + id}`);
    const data = response.data;
    setRefName(data["name"]);
    setGames(data["matchesRuled"]);
    setClassification(data["classification"]);
    setRegion(data["region"]);
    setLicense(data["licenceNumber"])
    setIsLoading(false);
	}
	catch (error) {
		console.log(error)
    setIsLoading(false);
	}
}

useEffect(() => {
  getRefereeData();
  }, []
)



  return (
    <Wrapper className="full-page">
      <div className="form">
        {isLoading?  "Referee information is loading...":
        <div> 
        <h1>Referee Name:</h1> <p>{refName}</p>
        <h2>Region: </h2> <p>{region} </p>
        <h3>License: </h3> <p>{license}</p>
        <h4>Classification: </h4> <p>{classification}</p>
        <h1>Games: {games.map((game) => {
          return (
            <div>
              <h1>Home: {game["home"]} --- Away: {game["away"]}</h1>
              <h2>Score: {game["score"]}</h2>
              <p>----------------------------------------------</p>
            </div>
          )
        })}</h1>
        </div>
        }</div>
    </Wrapper>
  )
};

export default Referees;