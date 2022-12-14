import Objection from "../models/Objection.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const createObjection = async (req, res) => {
  const { clubId, refereeId, anObjection, isInProcess, isResolved, comment } = req.body;
  console.log(req.body);

  if (!clubId || !refereeId || !anObjection) {
    throw new BadRequestError("please provide all values");
  }
  const objection = await Objection.create({ clubId, refereeId, anObjection, isInProcess, isResolved, comment });
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
const getObjectionAndSet = async (id) => {
  const objection = await Objection.updateOne({_id: id}, {$set: {isInProcess: true}});
  return objection;
}

const deleteObjection = async (req, res) => {
  const { id } = req.params;
  // await Objection.deleteOne({ _id: id });  
  const obj = await Objection.findOne({ _id: id });

  await obj.remove();

   res.status(StatusCodes.OK).json({ msg: "Success! Objection removed" });
};

const updateObjection = async (req, res) => {

  const {comment} = req.body;

  const obj = await Objection.findOne({ _id: req.body._id });

  obj.comment = comment;

  await obj.save();

  res.status(StatusCodes.OK).json({
    msg: "Updated"
  });
};

export { createObjection, getObjection, getAllObjections, deleteObjection, updateObjection, getObjectionAndSet };
