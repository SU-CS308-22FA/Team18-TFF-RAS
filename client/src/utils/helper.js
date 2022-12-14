import { ratingLabels } from "./constants";

const getEventTimeString = (e) => {
  let result = e.time.elapsed;
  if (e.time.extra != 0 && e.time.extra != null) {
    result = result + " + " + e.time.extra;
  }

  return result;
};

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
