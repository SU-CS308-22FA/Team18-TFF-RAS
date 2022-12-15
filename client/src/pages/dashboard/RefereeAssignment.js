import React, {useState} from 'react'
import axios from "axios"


const RefereeAssignment = () => 
{
    const [ratings, setRatings] = useState([])

    const baseURL = "api/";

    async function getRefereeRatings(id) {
	try {
		const response = await axios.get(`${baseURL + id}`);
    const data = response.data;
        // assign the data to somewhere 
    }
	catch (error) {
		console.log(error)
	}
}


    return (
        <div>Assign me</div>
    )
}

export default RefereeAssignment;