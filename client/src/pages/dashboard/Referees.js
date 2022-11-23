import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios";


const Referees = () => {

  const [refName, setRefName] = useState("");
  const [license, setLicense] = useState("");
  const [games, setGames] = useState([]);
  const [classification, setClassification] = useState("");
  const [region, setRegion] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const baseURL = "/api/referee/";
  const id = "20160";

  async function getRefereeData() {
	try {
    setIsLoading(true);
    setShowButton(false);
		const response = await axios.get(`${baseURL + id}`);
    const data = response.data;
    console.log("data: ", data);
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

const handleClick = () => {
  getRefereeData();;
}


const DisplayMatches = () => {
  return (
    games.map((game) => {
        return ( <div>
          <h1>home: {game["home"]}</h1> 
          <h2>away: {game["away"]}</h2>
          <h3>score: {game["score"]}</h3>
          <p>--------------------------------</p>
        </div>
        )
      }
    )
  )
}

  return (
    <Wrapper className="full-page">
      <div className="form">
        {showButton?<button className="btn" onClick={handleClick}>
        click to get referee</button>: isLoading?  "Referee information is loading...":
        <div> 
        name: {refName}
        region: {region}
        game1: {games.length > 0  ? games[0].home : "not yet"}
        </div>
        }</div>
    </Wrapper>
  )
};

export default Referees;