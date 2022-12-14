import Objection from "../models/Objection.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const createObjection = async (req, res) => {
  const { clubId, refereeId, anObjection, isInProcess, isResolved } = req.body;
  console.log(req.body);

  if (!clubId || !refereeId || !anObjection) {
    throw new BadRequestError("please provide all values");
  }
  const objection = await Objection.create({ clubId, refereeId, anObjection, isInProcess, isResolved });
};

const getAllObjections = async (req, res) => {
    const objections = await Objection.find({}.toArray(function(err, result){ 
        if (err) throw err;
        res.status(StatusCodes.OK).json({ objections });
    }));
}

const getObjection = async (id) => {
  const objection = await Objection.find({ refereeId: id });
  return objection;
}




const deleteObjection = async (req, res) => {
  const objection = await Objection.findOne({ _id: req.objection.objectionId });

  await objection.remove();
  
};

export { createObjection, getObjection, getAllObjections, deleteObjection };
