import axios from "axios";
import { useEffect, useState } from "react";
import { getMatches } from "../../utils/api";

import './SearchBarStyles.css';

function Tr2En(text){
  var Maps = {
      "İ":"I","Ş":"S","Ç":"C","Ğ":"G","Ü":"U","Ö":"O",
      "ı":"i","ş":"s","ç":"c","ğ":"g","ü":"u","ö":"o"
  };
  Object.keys(Maps).forEach(function(Old){
      text    = text.replace(Old,Maps[Old]);
  });
  return text;
}

function isSame(webPage, bein) {
  webPage = Tr2En(webPage).toLowerCase();
  bein = Tr2En(bein).toLowerCase();
  if (bein.indexOf(webPage)!==-1) {
    return true;
  }
  return false;
}


const SearchBar = () => {
  let [matches, setMatches] = useState([]);
  let [referees, setReferees] = useState([]);
  let [input, setInput] = useState("");
  let [fixtureID, setFixtureID] = useState("");
  let [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTyping(false);
      if (input != "" && isTyping) {
        axios.get("/api/v1/matchBySubstr/"+input).then(result => {
          setMatches(result.data);
        });

        axios.get("/api/v1/refereeBySubstr/"+input).then(result => {
          setReferees(result.data);
        });
        setIsVisible(true);
      }
      else {setMatches([]); setReferees([]); setIsVisible(false);}  
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [input]);

  document.addEventListener("click", function() {
    setInput("")
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setIsTyping(true);
  }
  function convertDate(dateString) {
    // Split the date string into its component parts
    const parts = dateString.split(".");
    // Extract the day, month, and year from the parts array
    const day = parts[0].toString().padStart(2, "0");
    const month = parts[1].toString().padStart(2, "0");
    const year = parts[2];
    // Return the date in the "yyyy-mm-dd" format
    return `${year}-${month}-${day}`;
  }
  const handleMatchSearch = (match) => {
    const currentDate = convertDate(match.Time.date);
    getMatches(currentDate).then((data) => {
      if (isSame(data[i].teams.home.name, match.Teams.home) && isSame(data[i].teams.away.name, match.Teams.away)) {
        setFixtureID(data[i].fixture.id);
      }
    });
    window.location.href = "/matches/" + fixtureID;
  }
  
  return (


      <div id="myDropdown" className="dropdown-content">
        <input className="text-field" onChange = {handleChange} value = {input} type="text" placeholder="Search.."/>
        <div className={"search-results-container " +(isVisible ? "var " : "yok ") }>
        <h4 className="search-for">Matches</h4>
        {matches.length && Array.isArray(matches)? <div>
          {matches.slice(0, 5).map((match) => (
            <p
            onClick={() => {handleMatchSearch(match)}}
            >{match.Teams.home + " " +  match.Teams.homeScore.toString() + "-" + match.Teams.awayScore + " " +match.Teams.away}</p>
          ))}
          </div> : <p>No Result for Matches</p>}
          <h4 className="search-for">Referees</h4>
          {referees.length && Array.isArray(referees) ? <div>
          {referees.slice(0, 5).map((referee) => (
            <a href = {"/referees/"+referee.refID}>{referee.name}</a>
          ))}
          </div> : <p>No Result for Referees</p>}
          
        </div>
      </div>

  );
};



export default SearchBar;