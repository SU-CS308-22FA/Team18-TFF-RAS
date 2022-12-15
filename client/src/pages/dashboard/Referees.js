import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios";
import { referees } from "../../utils/constants";
import { Link } from "react-router-dom";

 export const refs = [{
  name: "Zorbay Küçük",
  Id: "1385054"
},
{
  name: "Yaşar Kemal Uğurlu",
  Id: 20554
},
{
  name: "Yasin Kol",
  Id: "1144469"
},
{
  name: "Volkan Bayarslan",
  Id: "20204"
},
{
  name: "Ümit Öztürk",
  Id: "1091989"
},
{
  name: "Tugay Kaan Numanoğlu",
  Id: "1091799"
},
{
  name: "Suat Arslanboğa",
  Id: "19445"
},
{
  name: "Sarper Barış Saka",
  Id: "1092081"
},
{
  name: "Mustafa Kürşad Filiz",
  Id: "1091628"
},
{
  name: "Mete Kalkavan",
  Id: "18972"
},
{
  name: "Mert Güzenge",
  Id: "1140611"
},
{
  name: "Kadir Sağlam",
  Id: "20668"
},
{
  name: "hüseyin Göçek",
  Id: "19493"
},
{
  name: "Halil Umut Meler",
  Id: "21156"
},
{
  name: "Erkan Özdamar",
  Id: "1144690"
},
{
  name: "Çağdaş Altay",
  Id: "21019"
},
{
  name: "Burak Şeker",
  Id: "1090884"
},
{
  name: "Bahattin Şimşek",
  Id: "1140355"
},
{
  name: "Atilla Karaoğlan",
  Id: "1064324"
},
{
  name: "Arda Kardeşler",
  Id: "1152086"
},
{
  name: "Ali Şansalan",
  Id: "1141865"
},
{
  name: "Ali Palabıyık",
  Id: "20160"
},
{
  name: "Abdulkadir Bitigen",
  Id: "20372"
},
]
const Referees = () => {
  const [refName, setRefName] = useState("");
  const [license, setLicense] = useState("");
  const [games, setGames] = useState([]);
  const [classification, setClassification] = useState("");
  const [region, setRegion] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const baseURL = "/api/referee/";

  async function getRefereeData(id) {
    try {
      const response = await axios.get(`${baseURL + id}`);
      const data = response.data;
      setRefName(data["name"]);
      setGames(data["matchesRuled"]);
      setClassification(data["classification"]);
      setRegion(data["region"]);
      setLicense(data["lisenceNumber"]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  const handleClick = (refId) => {
    setShowAll(false);
    setIsLoading(true);
    getRefereeData(refId);
  };

  const handleGoBack = () => {
    setShowAll(true);
    setIsLoading(false);
  };

  return (
    <Wrapper className="full-page">
      <div className="container-ref">
        {showAll ? (
          refs.map((ref) => {
            return (
              <div key={ref.Id} className="form-ref">
                <h5>Name: {ref.name} </h5>
                <Link className="btn" to={"/referees/" + ref.id}>
                  Click to see more
                </Link>
              </div>
            );
          })
        ) : isLoading ? (
          <div className="form">
            <h4>Referee Information Is Loading...</h4>
          </div>
        ) : (
          <div className="form">
            <button className="btn" onClick={handleGoBack}>
              Go Back
            </button>
            <h5>Name: {refName} </h5>
            <h5>License: {license} </h5>
            <h5>Classification: {classification} </h5>
            <h5>Region: {region} </h5>
            <h5>
              games:{" "}
              {games.map((game, idx) => {
                return (
                  <div key={game.id} className="form">
                    <h5>Home: {game.home}  </h5> <h5>  Away: {game.away}  </h5> <h5>  Score: {game.score}</h5>
                    <h5>Date: {game.date} </h5>
                    <h5>League: {game.organisation}</h5>
                  </div>
                );
              })}{" "}
            </h5>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Referees;

// <div>
//         <h1>Referee Name:</h1> <p>{refName}</p>
//         <h2>Region: </h2> <p>{region} </p>
//         <h3>License: </h3> <p>{license}</p>
//         <h4>Classification: </h4> <p>{classification}</p>
//         <h1>Games: {games.map((game) => {
//           return (
//             <div>
//               <h1>Home: {game["home"]} --- Away: {game["away"]}</h1>
//               <h2>Score: {game["score"]}</h2>
//               <p>----------------------------------------------</p>
//             </div>
//           )
//         })}</h1>
//         </div>
