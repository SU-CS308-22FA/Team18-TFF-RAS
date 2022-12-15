import { ratingLabels } from "./constants";

const getEventTimeString = (e) => {
  let result = e.time.elapsed;
  if (e.time.extra != 0 && e.time.extra != null) {
    result = result + " + " + e.time.extra;
  }

  return result;
};

/**
 * Get a match event time string in a specific format
 * @param {object} e Match event object
 * @returns {string} match event time string in a specific format
 * @example getReviewEventTimeString({time: {elapsed: 23, extra: null}, ...})
 */
const getReviewEventTimeString = (e) => {
  let result = e.time.elapsed + "’";
  if (e.time.extra != 0 && e.time.extra != null) {
    result = result + " +" + e.time.extra;
  }

  return result;
};

const getRatingLabelText = (value) => {
  return `${value} Star${value !== 1 ? "s" : ""}, ${ratingLabels[value]}`;
};

/**
 * Get color corresponding to a referee rating from 0 to 5
 * @param {string} rating Referee rating or sentiment score (either "-" or in the range [0, 5] in string format)
 * @returns {string} the corresponding color
 * @example getRatingColor("4")
 */
const getRatingColor = (rating) => {
  if (rating === "-") {
    return "lightgrey";
  }

  let floatRating = parseFloat(rating);
  return floatRating >= 3.45
    ? "rgb(30, 200, 83)"
    : floatRating >= 2.5
    ? "rgb(240, 128, 34)"
    : "rgb(229, 94, 91)";
};

export {
  getEventTimeString,
  getReviewEventTimeString,
  getRatingLabelText,
  getRatingColor,
};
