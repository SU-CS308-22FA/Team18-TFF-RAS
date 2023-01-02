import React, {useState, useEffect} from 'react'
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios"
import { Logo, FormRow } from "../../components"
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
import { useAppContext } from '../../context/appContext';
import { style } from '@mui/system';


const RefereeAssignment = () => 
{
  const [display, setDisplay] = useState({
    showRefs: false,
    showMathces: false,
    showRefReview: false,
  })    

  const [allRatings, setAllRatings] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [assignedRef, setAssignedRef] = useState({
    referee: "",
    refereeId: "",
    fanVote: 0,
    expertVote: 0,
    avgVote: 0,
  });
  const [assignedMatch, setAssignedMatch] = useState({
    Id: 0,
    Home: "",
    Away: "",
    Time: 
    {
      date: "",
      hour: "",
    },
  });
  const [selectedRef, setSelectedRef] = useState("");
  const [selectedMatch, setSelectedMatch] = useState("");

  
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
  
  const handleRefClick = () => {
    setDisplay({ showRefs: true, showMathces: false, showRefReview: false});
  }

  const handleMatchClick = () => {
    setDisplay({showRefs: false, showMathces: true, showRefReview: false});
  }

  const handleHomeClick = () => {
    setDisplay({showRefs: false, showMathces: false,  showRefReview: false});
  }

  const handleReviewClick = (ref) => {
    setReviews(ref.reviews);
    setDisplay({showRefs: true, showMathces: false, showRefReview: true})
  }

  const handleResetButton = () => {
    setAssignedMatch({
      Id: 0,
      Home: "",
      Away: "",
      Time: 
      {
        date: "",
        hour: "",
      },
    });
    setAssignedRef({
      referee: "",
      refereeId: "",
      fanVote: 0,
      expertVote: 0,
      avgVote: 0,
    });
    setSelectedMatch("");
    setSelectedRef("");
  }

  const PageSwap = () => {
    return (
    <ButtonGroup fullWidth={true} disableElevation={true} variant="contained" aria-label="outlined primary button group" style={{ maxWidth: '500px', display: "flex", margin: "auto"}}>
        <Button onClick={handleHomeClick}>Home</Button>
        <Button onClick={handleRefClick}>Referees</Button>
        <Button onClick={handleMatchClick}>Matches</Button>
      </ButtonGroup>
          )
  }

  const handleAssignedRefChange = (event, ref) => {
    setAssignedRef({
      referee: ref.referee,
      refereeId: ref.refereeId,
      fanVote: ref.fanRating,
      expertVote: ref.expertRating,
      avgVote: ref.avgRating
    })
    setSelectedRef(event.target.value)
  }

  const handleAssignedMatchChange = (event, match) => {
    setAssignedMatch({
      Id: match.MatchID,
      Home: match.Teams.home,
      Away: match.Teams.away,
      Time: match.Time,
    })
    setSelectedMatch(event.target.value)
  }
    
    return (
      <>
          {!display.showRefs? <PageSwap/> : null}
      <div>
        {display.showRefs? !display.showRefReview ?      
              <div> <PageSwap/> <div className="container-ref">{allRatings.map((ref) => {
            return ( // mapping referees
              <div key={ref._id} className="form-ref">
                <h5>{ref.referee} </h5>
                <div style={{display: "inline-block"}}>
                <button type="submit" className="btn" onClick={() => handleReviewClick(ref)}>
              Reviews
            </button>
              <label>
                <input 
                type="checkbox"
                value={ref.referee}
                checked={selectedRef === ref.referee}
                onChange={(event) => handleAssignedRefChange(event, ref)}
                style={{marginLeft: "15rem", marginRight: "0.3rem"}}
                />
                  Assign me
                </label>
                </div>
              </div>
            );
          })}</div></div>
          : 
          (reviews != false && reviews[0].review != false) ? 
          <div> <PageSwap/> <div className='container-ref'>{reviews.map((rev) => {
            if (rev.review != false)
            {
              return ( 
                <div key={rev._id} className="form-ref">
                <h5>Type: {rev.reviewType} </h5>
                <h5>Match ID: {rev.matchId} </h5>
                <h5>Review: {rev.review} </h5>
                </div>              
              )
            }
          })} </div> </div> 
          : 
          <div>
            <PageSwap/>
              <h3 style={{textAlign: "center", marginTop: "10rem"}}>No reviews entered</h3>
          </div>
          :
          display.showMathces?
          <div className="container-ref">
            {allMatches.map((game) => {
              if(game.Teams.home != false)
              {
                return ( // mapping matches
                  <div key={game._id} className="form-ref">
                  <h4>Home: {game.Teams.home}</h4> 
                  <h4>Away: {game.Teams.away}</h4>
                  <label >
                  <input 
                    type="checkbox"
                    
                    value={game._id}
                    checked={selectedMatch === game._id}
                    onChange={(event) => handleAssignedMatchChange(event, game)} 
                    style={{marginRight: "0.3rem"}}
                    />
                    Assign to me
                    </label>
              </div>
                )
              }
              })}
            </div>
            :
            <div style={{display:"flex"}}>
              <div className='form'>
                {assignedRef.referee != false ? 
                <>
                <h5>
                  Referee: 
                </h5>  
                  <p> {assignedRef.referee}</p>
                  {/* <button type="submit" className="btn" onClick={() => handleReviewClick(ref)}> */}
                  <button type="submit" className='btn' onClick={handleResetButton}> Reset </button>                
                  </>
                  : 
                  <p style={{margin: "auto", padding: "auto", textAlign: "center"}}> Please choose a referee from Referees </p> }
                  </div>
              <div className='form'>
                {assignedMatch.Id !== 0 ? 
                <>
                <h5>
                  Match:
                </h5>
                <p>
                  Home: {assignedMatch.Home}
                </p>
                <p>
                  Away: {assignedMatch.Away}
                </p>
                </>
                :
                <p style={{textAlign: "center"}}>
                  Please choose a match from Matches
                </p>
                }
              </div>
              </div>
            }                
      </div>
      {console.log("refs: ", allRatings, "matches: ", allMatches)} {/* remove later */}
    </>
    )
}


export default RefereeAssignment;