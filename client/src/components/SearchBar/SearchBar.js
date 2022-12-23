import axios from "axios";
import { useEffect, useState } from "react";
import './SearchBarStyles.css';


const SearchBar = (refOrMatch) => {
  let [dropDownCont, setDropDownCont] = useState([[],[]]);
  let [input, setInput] = useState("");
  let [fixtureID, setFixtureID] = useState("");

  const handleChange = async (e) => {
    setInput(e.target.value);
    e.preventDefault();
     let data = await axios.create({
      baseURL: "/api/v1",
      
    }).get("/matchBySubstr/"+e.target.value);
      // console.log(JSON.stringify(data));

      console.log(data.data);

      let data2 = await axios.create({
        baseURL: "/api/v1",
        
      }).get("/refereeBySubstr/"+e.target.value);
        console.log(JSON.stringify(data2.data));
        setDropDownCont([data.data, data2.data]);
        console.log(dropDownCont);
  };
  function dateFormat(date) {
    let d = date.split(".");
    return d[2]+"-"+d[1]+"-"+d[0];
  }
  const handleMatchSearch = async (match) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures', //change url
      params: {date: dateFormat(match.time.date)},
      headers: {
        'X-RapidAPI-Key': 'd4a5c68739msh65e78c9a8744b0bp1ba67ejsn6f8e6d93c5c8', //change keys
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };

      let response = axios.request(options).catch(function (error) {
        console.error(error);
      });
      for (let index = 0; index < response.response.length; index++) {
        const element = reponse[index];
        if (element.teams.home.name == match.Teams.home && element.teams.away.name == match.Teams.away) {
          setFixtureID(element.fixture.id);
        }
      }
  };

  useEffect(() => {
    console.log(dropDownCont[0])
  }, [dropDownCont])

  return (


      <div id="myDropdown" className="dropdown-content">
        <input onChange = {handleChange} value = {input} type="text" placeholder="Search.."/>
        <div className="search-results-container">
          <div>
          {dropDownCont[0].slice(0, 5).map((match) => (
            <a style={{backgroundColor: "red", padding: 10}}
            onClick={handleMatchSearch(match)}
            href = {"/matches/"+fixtureID}
            >{match.Teams.home + " " +  match.Teams.homeScore.toString() + "-" + match.Teams.awayScore + " " +match.Teams.away}</div>
          ))}
          </div>
          <div>
          {dropDownCont[1].slice(0, 5).map((referee) => (
            <a style={{backgroundColor: "red", padding: 10}} href = {"http://localhost:4000/api/referee/"+referee.refID}>{referee.name}</a>
          ))}
          </div>
        </div>
      </div>

  );
};

{/* <div>
      <div class="topnav">
        <input onChange={handleChange} value={input} type="text" placeholder="Search.."/>
      </div>
        <div>
          <div>
          {dropDownCont[0].map((match) => (
            <div>{match.Teams.home + " " +  match.Teams.homeScore.toString() + "-" + match.Teams.awayScore + " " +match.Teams.away}</div>
          ))}
          </div>
          <div>
          {dropDownCont[1].map((referee) => (
            <div>{referee.name}</div>
          ))}
          </div>
        </div>

    </div> */}


export default SearchBar;