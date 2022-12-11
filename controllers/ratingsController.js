import Rating from "../models/Rating.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  // NotFoundError,
  // UnAuthenticatedError,
} from "../errors/index.js";
// import checkPermissions from "../utils/checkPermissions.js";
// import mongoose from "mongoose";
// import moment from "moment";

const createRating = async (req, res) => {
  const { rating: ratingValue, matchId } = req.body;
  if (!ratingValue) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  req.body.ratingType = "fan";

  const rating = await Rating.create(req.body);

  res.status(StatusCodes.CREATED).json({ rating });
};

const getRating = async (req, res) => {
  const match = req.params.id;
  const createdBy = req.user.userId;

  const query = { match, createdBy };
  const rating = await Rating.findOne(query);

  res.status(StatusCodes.OK).json({ rating });
};

export { createRating, getRating };
