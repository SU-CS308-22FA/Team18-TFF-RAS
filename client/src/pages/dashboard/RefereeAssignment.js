import React, {useState, useEffect} from 'react'
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios"
import { Link } from "react-router-dom";
import { referees } from "../../utils/constants";

const RefereeAssignment = () => 
{

  const [rating, setRating] = useState({
    referee: "",
    refereeId: "",
    avgRating: 0,
    fanRating: 0,
    expertRating: 0,
    reviews: []
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
    
    return (
      <Wrapper className="full-page">
      <div className="container-ref">
          {allRatings.map((ref) => {
            return (
              <div key={ref._id} className="form-ref">
                <h5>{ref.referee} </h5>
                <button type="submit" className="btn">
              Reviews
            </button>
              </div>
            );
          })}      
      </div>
    </Wrapper>
    )
}

export default RefereeAssignment;