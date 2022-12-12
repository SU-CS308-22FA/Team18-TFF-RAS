import React, {useState} from 'react'



const RefereeAssignment = () => 
{
    const [ratings, setRatings] = useState([])

    async function getRefereeRatings() {
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