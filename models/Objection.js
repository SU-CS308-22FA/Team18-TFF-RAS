import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const objectionSchema = new mongoose.Schema({
  clubId: {
    type: String,
    required: [true, "No club ID!"],
    unique: true,
  },
  refereeId: {
    type: String,
    required: [true, "No referee ID!!!"],
    unique: true,
  },
  objection: {
    type: String,
    required: [true, "Objection is not entered!!!"]
  },
  isInProcess: {
    type: Boolean,
    default: false,
  },
  isResolved: {
    type: Boolean,
    default: false,
  }
});



export default mongoose.model("Objection", objectionSchema);
