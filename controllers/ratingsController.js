import Rating from "../models/Rating.js";
import Match from "../models/Match.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  // NotFoundError,
  // UnAuthenticatedError,
} from "../errors/index.js";
// import checkPermissions from "../utils/checkPermissions.js";
// import mongoose from "mongoose";
// import moment from "moment";


/**
 *
 * @param {string} search - The substr to look for
 * @since 11.12.2022
 * @return {Object} refs - Referees that contain match details that has a field containing the substring parameter
 * @example searchbySubstr("ali")
 */
const createRating = async (req, res) => {
  const { rating: ratingValue, match, referee } = req.body;
  if (!ratingValue || !match || !referee) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  req.body.ratingType = "fan";

  const rating = await Rating.create(req.body);

  res.status(StatusCodes.CREATED).json({ rating });
};
/**
 *Created for finding the input substring in document's name field
 * @param {string} search - The substr to look for
 * @since 11.12.2022
 * @return {Object} refs - Referees that contain match details that has a field containing the substring parameter
 * @example searchbySubstr("ali")
 */
const getRating = async (req, res) => {
  const match = req.params.id;
  const createdBy = req.user.userId;

  const query = { match, createdBy };
  const rating = await Rating.findOne(query);

  res.status(StatusCodes.OK).json({ rating });
};

export { createRating, getRating };
