import React, {useState, useEffect} from 'react'
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios"
import { Link } from "react-router-dom";
import { referees } from "../../utils/constants";


const RefereeAssignment = () => 
{
    // const {getRefereeRatings} = useAppContext();
    const [refRatings, setRefRatings] = useState([...referees]);
    const [refRating, setRefRating] = useState([]);
    const [fanRating, setFanRating] = useState(0);
    const [expertRating, setExpertRating] = useState(0);
    const baseURL = "/api/ratings/";


    const getRefRating = async (id) => {
        try {
        const ratings = await axios.get(`${baseURL + id}`);
        const data = ratings.data;
        setRefRating(data);
      }
      catch (error) {
        console.log(error)
      }
    }

    // useEffect(() => {
    //   getRefRating("1385054");
    // },[])

    const findFanRate = (arr) => {
      let tempArr = arr;
      let tempArr2 = arr;
      tempArr.filter((vote) => {
        return (vote.ratingType === "fan")
      })
      tempArr2.filter((vote) => {
        return (vote.ratingType === "expert")
      })
      setExpertRating(tempArr2);
      setFanRating(tempArr);
    }
    
    const assignRatings = () => {
      refRatings.forEach((referee) => {
        getRefRating(referee.id);
        findFanRate(refRating);
      })
    }


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