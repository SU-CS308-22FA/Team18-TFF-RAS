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
  
  const getRatings = async (refId) => {
    let aRating = await axios.get("/api/referees/get-refRatings/" + refId)
    let value = aRating.data;
    // setRating({
    //   referee: value.referee,
    //   refereeId: value.refereeId,
    //   avgRating: value.avgRating,
    //   fanRating: value.fanRating,
    //   expertRating: value.expertRating,
    //   reviews: value.reviews
    // });
    const newRating = {
      referee: value.referee,
      refereeId: value.refereeId,
      avgRating: value.avgRating,
      fanRating: value.fanRating,
      expertRating: value.expertRating,
      reviews: value.reviews
    };
    let temp = [...allRatings]
    temp.push(newRating);
    const data = temp;
    setAllRatings(data);
  }

  const createRatings = async(id) => {
    await axios.get("/api/referees/create-refRatings/" + id);
  }

  useEffect(() => {
    referees.forEach((ref) => {
      createRatings(ref.id);
      getRatings(ref.id);
    })
  }, [])
  //------------------------

  const handleClick = (e, ref) => {
    // const aRef = refRatings.filter((data) => {
    //   return (data.refereeId === ref.id);
    // })
    // setRefData(aRef);
    // console.log("completed")
  }
    
    return (
      <Wrapper className="full-page">
      <div className="container-ref">
        {console.log(allRatings)}
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