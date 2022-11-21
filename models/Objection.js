import mongoose from "mongoose";

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
