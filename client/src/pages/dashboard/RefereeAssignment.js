import React, {useState, useEffect} from 'react'
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios"
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
const RefereeAssignment = () => 
{
  const [display, setDisplay] = useState({
    showOptions: true,
    showRefs: false,
    showMathces: false,
  }) 

  const [allRatings, setAllRatings] = useState([]);
  
  const getRatings = async () => {
    const response = await axios.get("/api/referees/get-refRatings/");
    const data = await response.data;
    setAllRatings(data);
  }

  const createAndUpdateRatings = async(id) => { // --> mathces the data with the recent input from database
    await axios.get("/api/referees/create-refRatings/" + id);
  }

  useEffect(() => {
      getRatings();
    // referees.forEach((ref) => {
    //   createAndUpdateRatings(ref.id);
    // })
  }, [])
  //------------------------

  const handleRefClick = (num) => {
    if(num === 0) // refs
      setDisplay({showOptions: false, showRefs: true, showMathces: false});
    else if(num === 1) 
      setDisplay({showOptions: false, showRefs: false, showMathces: true});

  }
    
    return (
      <Wrapper className="full-page">
          <ButtonGroup fullWidth={true} disableElevation={true} variant="contained" aria-label="outlined primary button group" style={{ maxWidth: '500px' }}>
            <Button onClick={() => handleRefClick(0)}>Referees</Button>
            <Button onClick={() => handleRefClick(1)}>Matches</Button>
          </ButtonGroup>
      <div className="container-ref">
        {/* <div> */}
        {/* </div> */}
        {display.showOptions? <h1>True</h1>: <h1>False</h1>}
          {/* {allRatings.map((ref) => {
            return (
              <div key={ref._id} className="form-ref">
                <h5>{ref.referee} </h5>
                <button type="submit" className="btn">
              Reviews
            </button>
              </div>
            );
          })}       */}
      </div>
    </Wrapper>
    )
}

export default RefereeAssignment;