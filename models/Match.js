import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema(
  {
    matchId: {
      type: Number,
      required: [true, "Please provide API id"],
    },
    referee: {
      type: mongoose.Types.ObjectId,
      ref: "Referee",
      required: [true, "Please provide referee"],
    },
    ratings: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Match", MatchSchema);
