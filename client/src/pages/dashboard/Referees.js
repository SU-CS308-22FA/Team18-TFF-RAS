import {React, useState} from "react"


const Referees = () => {

  const rating = {
    totalRating: 0, // we can change the 0 value to a number we get from the database
    newUserRating: 0,
    totalRated: 0,
    averageRating: 0,
  }

  const [showRating, setShowRating] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [refereeRating, setRefereeRating] = useState(rating);
  const [isDisabled, setIsDisabled] = useState(false);
  
const handleClick = (e) => {
  e.preventDefault();
  setShowRating(true);
  setShowButton(false);
}
const handleSubmit = (e) => {
  e.preventDefault();
  setIsDisabled(true);
  setShowButton(true);
  setShowRating(false);
}

const handleChange = (e) => {
  setRefereeRating({...refereeRating, [e.target.name]: e.target.value})
}

  return (
    <>
    <article className="form">
        {showButton ? (<form>
          <button disabled={isDisabled} type="submit" className="btn" onClick={handleClick}>
            Rate this referee!
          </button>
        </form>) : null}
        {showRating ? 
        <>
        <div>
        <input className="radio-input" type="radio" id="1" name="newUserRating" value={rating.newUserRating} onChange={handleChange} /> <h1 className="referee-rating">1</h1>
        <input className="radio-input" type="radio" id="2" name="newUserRating" value={rating.newUserRating} onChange={handleChange} /> <h1 className="referee-rating">2</h1>
        <input className="radio-input" type="radio" id="3" name="newUserRating" value={rating.newUserRating} onChange={handleChange} /> <h1 className="referee-rating">3</h1>
        <input className="radio-input" type="radio" id="4" name="newUserRating" value={rating.newUserRating} onChange={handleChange} /> <h1 className="referee-rating">4</h1>
        <input className="radio-input" type="radio" id="5" name="newUserRating" value={rating.newUserRating} onChange={handleChange} /> <h1 className="referee-rating">5</h1>        
        </div>
        <button className="rate-btn" type="submit" onClick={handleSubmit}>Submit</button>
        </> : null}
      </article>
    </>
  )
};

export default Referees;
