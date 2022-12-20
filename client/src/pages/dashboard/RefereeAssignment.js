import React, {useState, useEffect} from 'react'
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios"
import { Link } from "react-router-dom";
import { referees } from "../../utils/constants";


const RefereeAssignment = () => 
{

  const [refRatings, setRefRatings] = useState([]);

  const getRefRating = async (refId) => {
    let rating = await axios.get("/api/referee-ratings/" + refId);
    return rating.data;
  }

  //------------------------ should work not tested // gets all the ratings,reviews with referee names
  useEffect(() => {
    referees.map((ref) => {
      let data = getRefRating(ref.id);
      setRefRatings([...refRatings, data]);
    })
  }, [])
  //------------------------

    
    return (
      <Wrapper className="full-page">
      <div className="container-ref">
        
          {referees.map((ref) => {
            return (
              <div key={ref.id} className="form-ref">
                <h5>{ref.name} </h5>
                <button type="submit" className="btn">
              Reviews
            </button>
              </div>
            );
          }) }
        
      </div>
    </Wrapper>
        // <div><h4>Ratings:</h4> {refRatings.map(vote => {
        //     return (
        //         <div key={vote._id}><p>{vote.review}</p></div>                
        //     )
        // })}</div>
    )
}

export default RefereeAssignment;