import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  matchId: {
    type: String,
    required: [true, "Please provide matchID"],
  },
  final_grade: {
    type: Number,
  },
  strictness: {
    type: Number,
  },
  accuracy: {
    type: Number,
  },
  observer: {
    type: String,
    required: [true, "Please provide a valid observer name"],
  },
  matchyear: {
    type: Number,
  },
  matchMonth: {
    type: Number,
  },
  matchDay: {
    type: Number,
  },
  matchHour: {
    type: Number,
  },
  matchMinute: {
    type: Number,
  },
  isSubmitted: {
    type: Boolean,
    default: false,
  },
  submittedTime: {
    type: Date,
  },
});

export default mongoose.model("Reports", ReportSchema);
