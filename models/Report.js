import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  matchId: {
    type: String,
    required: [true, "Please provide matchID"],
  },
  referee: {
    type: String,
    required: [true, "Please provide referee name"],
  },
  hometeam: String,
  awayteam: String,
  homescore: String,
  awayscore: String,
  final_grade: {
    type: Number,
    default: 0,
  },
  strictness: {
    type: Number,
    default: 0,
  },
  accuracy: {
    type: Number,
    default: 0,
  },
  observer: {
    type: String,
    required: [true, "Please provide a valid observer name"],
  },
  fairness: {
    type: Number,
    default: 0,
  },
  comments: {
    type: String,
    default: "",
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
