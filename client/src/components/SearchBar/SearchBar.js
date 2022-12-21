import axios from "axios";
import { useEffect, useState } from "react";
import './SearchBarStyles.css';


const SearchBar = (refOrMatch) => {
  let [dropDownCont, setDropDownCont] = useState([[],[]]);
  let [input, setInput] = useState("");

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

  useEffect(() => {
    console.log(dropDownCont[0])
  }, [dropDownCont])

  return (


      <div id="myDropdown" className="dropdown-content">
        <input onChange = {handleChange} value = {input} type="text" placeholder="Search.."/>
        <div className="search-results-container">
          <div>
          {dropDownCont[0].slice(0, 5).map((match) => (
            <div style={{backgroundColor: "red", padding: 10}}>{match.Teams.home + " " +  match.Teams.homeScore.toString() + "-" + match.Teams.awayScore + " " +match.Teams.away}</div>
          ))}
          </div>
          <div>
          {dropDownCont[1].slice(0, 5).map((referee) => (
            <a style={{backgroundColor: "red", padding: 10}} href = {"/referees/"+referee.refID}>{referee.name}</a>
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