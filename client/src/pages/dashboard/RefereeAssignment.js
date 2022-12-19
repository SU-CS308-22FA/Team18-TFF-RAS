import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useAppContext } from "../../context/appContext";

const RefereeAssignment = () => 
{
    // const {getRefereeRatings} = useAppContext();
    const [refRatings, setRefRatings] = useState([]);
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

    useEffect(() => {
      getRefRating("1385054");
    },[])
    


    return (
        <div><h4>Ratings:</h4> {refRatings.map(vote => {
            return (
                <div key={vote._id}><p>{vote.review}</p></div>                
            )
        })}</div>
    )
}

export default RefereeAssignment;