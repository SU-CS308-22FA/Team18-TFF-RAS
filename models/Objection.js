import mongoose from "mongoose";

const objectionSchema = new mongoose.Schema({
  clubId: {
    type: String,
    required: [true, "No club ID!"],
  },
  refereeId: {
    type: String,
    required: [true, "No referee ID!!!"],
  },
  anObjection: {
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
  },
  comment: {
    type: String,
    default: "No comment",
  }
}); 



export default mongoose.model("Objection", objectionSchema);
