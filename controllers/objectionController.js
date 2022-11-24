import Objection from "../models/Objection.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const createObjection = async (req, res) => {
  const { clubId, refereeId, anObjection, isInProcess, isResolved } = req.body;
  console.log(req.body);

  if (!clubId || !refereeId || !anObjection) {
    console.log("WHYYYYY")
    throw new BadRequestError("please provide all values");
  }

  console.log("hi")
  const objection = await Objection.create({ clubId, refereeId, anObjection, isInProcess, isResolved });
  console.log("bye")

  res.status(StatusCodes.CREATED).json({
    objection: {
      clubId: objection.clubId,
      refereeId: objection.refereeId,
      objection: objection.anObjection,
      isInProcess: objection.isInProcess,
      isResolved: objection.isResolved,
    }
  });
};

const getAllObjections = async (req, res) => {
    const objections = await Objection.find({}.toArray(function(err, result){ 
        if (err) throw err;
        res.status(StatusCodes.OK).json({ objections });
    }));
}

const getObjection = async (req, res) => {
  const objection = await Objection.findOne({ _id: req.objection.objectionId });
  res.status(StatusCodes.OK).json({ objection });
}


const deleteObjection = async (req, res) => {
  const objection = await Objection.findOne({ _id: req.objection.objectionId });

  await objection.remove();

  res.status(StatusCodes.OK).json({ msg: "Success! Objection removed" });
};

export { createObjection, getObjection, getAllObjections, deleteObjection };
