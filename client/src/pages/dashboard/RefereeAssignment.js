import React, {useState, useEffect} from 'react'
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios"
import { Link } from "react-router-dom";
import { referees } from "../../utils/constants";

const RefereeAssignment = () => 
{

  const [refRatings, setRefRatings] = useState([]);
  const [refData, setRefData] = useState({});
  
  const createRatings = async(id) => {
    await axios.get("/api/referees/create-refRatings/" + id);
  }

  const getRefRating = async (refId) => {
    let rating = await axios.get("/api/referees/create/" + refId);
    return rating.data;
  }

  
  //------------------------ should work not tested // gets all the ratings,reviews with referee names
  useEffect(() => {
    referees.forEach((ref) => {
      createRatings(ref.id)
    })
    referees.map((ref) => {
      let data = getRefRating(ref.id);
      setRefRatings([...refRatings, data]);
    })
  }, [])
  //------------------------

  const handleClick = (e, ref) => {
    e.preventDefault();
    const aRef = refRatings.filter((data) => {
      return (data.refereeId === ref.id);
    })
    setRefData(aRef);
    console.log("completed")
  }
    
    return (
      <Wrapper className="full-page">
      <div className="container-ref">
          {referees.map((ref) => {
            return (
              <div key={ref.id} className="form-ref">
                <h5>{ref.name} </h5>
                <button type="submit" className="btn" onClick={(e) => handleClick(e, ref)}>
              Reviews
            </button>
              </div>
            );
          })}      
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