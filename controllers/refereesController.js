import Referee from "../models/Referee.js";
import { StatusCodes } from "http-status-codes";

const getReferees = async (req, res) => {
  const referees = await Referee.find({});

  res.status(StatusCodes.OK).json({ referees });
};

const getReferee = async (req, res) => {
  const referee = await Referee.findOne({ refID: req.params.id });

  res.status(StatusCodes.OK).json({ referee });
};

export { getReferees, getReferee };
