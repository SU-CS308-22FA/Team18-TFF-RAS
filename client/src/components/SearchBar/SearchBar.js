import axios from "axios";
import { useEffect, useState } from "react";
import './SearchBarStyles.css';


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
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [input]);

  
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setIsTyping(true);
  }
  // const handleChange = async (e) => {
  //   setInput(e.target.value);
  //   e.preventDefault();
  //   if (e.target.value != "" && !isTyping) {
  //     let data = await axios.get("/api/v1/matchBySubstr/"+e.target.value);
  //     let data2 = await axios.get("/api/v1/refereeBySubstr/"+e.target.value);
  //     setReferees(data2.data, () => {
  //       console.log('Referees has been updated');
  //     });
  //     setMatches(data.data, () => {
  //       console.log('Matches has been updated');
  //     });
  //     setIsVisible(true);
  //   }
  //   else {setMatches([]); setReferees([]); setIsVisible(false);}    
  // }
  
  // let timeoutToken = 0;
  // $(".text-field").on("keypress", async(e) => {
    //   e.preventDefault();
  //   if (timeoutToken !== 0) clearTimeout(timeoutToken)
  //     if (e.target.value != "") {
  //       timeoutToken = setTimeout(async() => {
  //         await handleChange(e);
  //       }, 200);
  //     }
  // });
  
  return (


      <div id="myDropdown" className="dropdown-content">
        <input className="text-field" onChange = {handleChange} value = {input} type="text" placeholder="Search.."/>
        <div className={"search-results-container " +(isVisible ? "var " : "yok ") }>
        {matches.length && Array.isArray(matches)? <div>
          {matches.slice(0, 5).map((match) => (
            <a style={{backgroundColor: "red", padding: 10}}
            // onClick={handleMatchSearch(match)}
            href = {"/matches/"+fixtureID}
            >{match.Teams.home + " " +  match.Teams.homeScore.toString() + "-" + match.Teams.awayScore + " " +match.Teams.away}</a>
          ))}
          </div> : <p>No Result for Matches</p>}
          {referees.length && Array.isArray(referees) ? <div>
          {referees.slice(0, 5).map((referee) => (
            <a style={{backgroundColor: "red", padding: 10}} href = {"/referees/"+referee.refID}>{referee.name}</a>
          ))}
          </div> : <p style={{color: "black"}}>No Result for Referees</p>}
          
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