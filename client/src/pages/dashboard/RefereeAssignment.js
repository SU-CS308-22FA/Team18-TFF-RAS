import React, {useState, useEffect} from 'react'
import Wrapper from "../../assets/wrappers/RegisterPage";
import axios from "axios"
import { Link } from "react-router-dom";
import { referees } from "../../utils/constants";


const RefereeAssignment = () => 
{
    // const {getRefereeRatings} = useAppContext();
    const [refRatings, setRefRatings] = useState([]);
    let refs;
    const baseURL = "/api/ratings/";


    const getRefRating = async (id) => {
        try {
        const ratings = await axios.get(`${baseURL + id}`);
        const data = ratings.data;
        setRefRatings(data);
      }
      catch (error) {
        console.log(error)
      }
    }

    // useEffect(() => {
    //   getRefRating("1385054");
    // },[])
    


    return (
      <Wrapper className="full-page">
      <div className="container-ref">
        
          {referees.map((ref) => {
            return (
              <div key={ref.id} className="form-ref">
                <h5>{ref.name} </h5>
                <h5>{refRatings.map(vote => {
                  return (
                    <div key={vote._id}><p>{vote.review}</p></div>
                  )
                })} </h5>
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