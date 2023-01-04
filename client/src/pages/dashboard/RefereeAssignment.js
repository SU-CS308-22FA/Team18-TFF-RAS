import React, {useState, useEffect} from 'react'
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios"
import { Alert, ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';


const RefereeAssignment = () => 
{
  const [display, setDisplay] = useState({
    showRefs: false,
    showMathces: false,
    showRefReview: false,
  })    
  const [refresh, setRefresh] = useState(false);
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
  const [occupiedRefs, setOccupiedRefs] = useState([]);
  const [notification, setNotification] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNotification()
  //   }, 3000)  
  // }, [notification])
  
  
  const getOccupiedRefsToDate = async (date) => {
    const response = await axios.get("/api/assignment/get-occupied-refs-to-date/" + date);
    const data = await response.data;
    setOccupiedRefs(data);
    setAssignedRef({
      referee: "",
      refereeId: "",
      fanVote: 0,
      expertVote: 0,
      avgVote: 0,
    });
    setSelectedRef("");
  }
  
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

  useEffect(() => {
      getMatches();
  }, [refresh])
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



  const handleFanClick = () => {
    const temp = allRatings.sort((ref1, ref2) => {
      return ref2.fanRating - ref1.fanRating;
    })
    setAllRatings(temp);
    setDisplay({...display, showRefs:false});
    setDisplay({...display, showRefs:true});
  }

  const handleExpertClick = () => {
    const temp = allRatings.sort((ref1, ref2) => {
      return ref2.expertRating - ref1.expertRating;
    })
    setAllRatings(temp);
    setDisplay({...display, showRefs:false});
    setDisplay({...display, showRefs:true});
  }

  const handleAvgClick = () => {
    const temp = allRatings.sort((ref1, ref2) => {
      return ref2.avgRating - ref1.avgRating;
    })
    setAllRatings(temp);
    setDisplay({...display, showRefs:false});
    setDisplay({...display, showRefs:true});
  }

  const Sort = () => {
    return (
    <ButtonGroup fullWidth={true} disableElevation={true} variant="contained" aria-label="outlined primary button group" style={{ maxWidth: "250px", display: "flex", margin: "auto", marginTop: "1.5rem"}}>
        <Button onClick={handleFanClick}>Fan</Button>
        <Button onClick={handleExpertClick}>Expert</Button>
        <Button onClick={handleAvgClick}>Avg</Button>
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
  
  useEffect(() => {
    getOccupiedRefsToDate(assignedMatch.Time.date);
  }, [assignedMatch])
  

  const handleAssignedMatchChange = (event, match) => {
    setAssignedMatch({
      Id: match.MatchID,
      Home: match.Teams.home,
      Away: match.Teams.away,
      Time: match.Time,
    })
    setSelectedMatch(event.target.value)
  }

  const handleSubmitButton = async () => {
    if(assignedRef.referee != false && assignedMatch.Id !== 0)
    {
      let sendData = await axios.get("/api/assign-referee/" + assignedRef.referee + "&" + assignedMatch.Id)
      handleResetButton();
      setRefresh(!refresh)
      setNotification(true);
      setTimeout(() => {
        setNotification(false)
      }, 2000)
    }
    else
    {
      console.log("Provide all values!")
    }
  }
    
    return (
      <>
          {!display.showRefs? <PageSwap/> : null}
      <div>
        {display.showRefs? !display.showRefReview ?      
              <div><div> <PageSwap/> <Sort/>  </div> <div className="container-ref">{allRatings.map((ref) => {
                console.log("occupied: ", occupiedRefs);
            if (!occupiedRefs.includes(ref.referee))
            {
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
            }
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
                  <h5>Home: {game.Teams.home}</h5> 
                  <h5>Away: {game.Teams.away}</h5>
                  <h5>Date: {game.Time.date} </h5>
                  <h5>hour: {game.Time.hour} </h5>
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
            <div>
            <div style={{display:"flex"}}>
              <div className='form'>
                {assignedRef.referee != false ? 
                <div>
                  <h5>
                    Referee: 
                    <p> {assignedRef.referee}</p>
                  </h5>  
                  <h5 style={{marginTop: "3.2rem"}}>Fan Rating: {assignedRef.fanVote}</h5>
                  <h5 style={{marginTop: "3.2rem"}}>Expert Rating: {assignedRef.expertVote}</h5>
                  <h5 style={{marginTop: "3.2rem"}}>Average Rating: {assignedRef.avgVote}</h5>
                    <button type="submit" className='btn' onClick={handleResetButton} style={{display: "flex"}}> Reset </button>                
                  </div>
                  : 
                  <p style={{margin: "auto", padding: "auto", textAlign: "center"}}> Please choose a referee from Referees <br/>
                  Also please choose a match first</p> }
                  </div>
              <div className='form'>
                {assignedMatch.Id !== 0 ? 
                <>
                <h5>Home:
                <p>
                   {assignedMatch.Home}
                </p>
                </h5>
                <h5>Away:
                <p>
                  {assignedMatch.Away}
                </p>
                </h5>
                <h5>Date:
                  <p>{assignedMatch.Time.date}</p>
                </h5>
                <h5>Time:
                  <p>{assignedMatch.Time.hour}</p>
                </h5>
                {
                assignedRef.referee && assignedMatch.Id !== 0 ? 
                <button type="submit" className='btn' onClick={() => handleSubmitButton()} style={{display: "flex"}}> Submit </button>
                :
                <button type="submit" className='btn' onClick={handleResetButton} style={{display: "flex"}}> Reset </button>                
                }
                </>
                :
                <p style={{textAlign: "center"}}>
                  Please choose a match from Matches
                </p>
                }
              </div>
                </div>
                {
                notification == true ? 
              <h3 style={{textAlign: "center",backgroundColor: "lightgreen", maxWidth: "500px", margin: "auto"}}>Successful</h3>  
                :
                <></>
              }
              </div>
            }                
      </div>
    </>
    )
}


export default RefereeAssignment;