import React, {useState, useEffect} from 'react'
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios"
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
const RefereeAssignment = () => 
{
  const [display, setDisplay] = useState({
    showRefs: false,
    showMathces: false,
  }) 

  const [allRatings, setAllRatings] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  
  const getRatings = async () => {
    const response = await axios.get("/api/referees/get-refRatings/");
    const data = await response.data;
    setAllRatings(data);
  }

  const createAndUpdateRatings = async(id) => { // --> mathces the data with the recent input from database
    await axios.get("/api/referees/create-refRatings/" + id);
  }

  const getMatches = async () => {
    const response = await axios.get("/api/assignment/get-matches-with-no-ref/");
    const data = await response.data;
    setAllMatches(data);
  }

  useEffect(() => {
      getRatings();
      getMatches();
    // referees.forEach((ref) => {
    //   createAndUpdateRatings(ref.id);
    // })
  }, [])
  //------------------------

  // const handleRefClick = (num) => {
  //   if(num === 0) // refs
  //     setDisplay({ showRefs: true, showMathces: false});
  //   else if(num === 1) 
  //     setDisplay({showRefs: false, showMathces: true});
  // }

  const handleRefClick = () => {
    setDisplay({ showRefs: true, showMathces: false});
  }

  const handleMatchClick = () => {
    setDisplay({showRefs: false, showMathces: true});
  }

  const handleHomeClick = () => {
    setDisplay({showRefs: false, showMathces: false});
  }

  const PageSwap = () => {
    return (
    <ButtonGroup fullWidth={true} disableElevation={true} variant="contained" aria-label="outlined primary button group" style={{ maxWidth: '500px', marginLeft: "auto", marginRight: "auto", marginTop: "-20rem" }}>
        <Button onClick={handleHomeClick}>Home</Button>
        <Button onClick={handleRefClick}>Referees</Button>
        <Button onClick={handleMatchClick}>Matches</Button>
      </ButtonGroup>
          )
  }
    
    return (
      <Wrapper className="full-page">
          <PageSwap/> 
      <div>
        {display.showRefs? <div> <PageSwap/> <div className="container-ref">{allRatings.map((ref) => {
            return (
              <div key={ref._id} className="form-ref">
                <h5>{ref.referee} </h5>
                <button type="submit" className="btn">
              Reviews
            </button>
              </div>
            );
          })}</div></div> 
          : 
          display.showMathces? <div> <PageSwap/> <div className="container-ref"> 
            {allMatches.map((game) => {
              if(game.Teams.home != false)
              {
                return (
                  <div key={game._id} className="form-ref">
                  <h4>Home: {game.Teams.home}</h4> 
                  <h4>Away: {game.Teams.away}</h4> 
              </div>
                )
              }
              })}
            </div></div>
            :
             <h1>Assingment</h1>}                
      </div>
    </Wrapper>
    )
}


export default RefereeAssignment;