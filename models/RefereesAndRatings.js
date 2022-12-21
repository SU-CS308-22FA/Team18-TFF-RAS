import mongoose from "mongoose";

const RefereesAndRatingsSchema = new mongoose.Schema(
  {
    referee: {
      type: String,
      required: [true, "Please provide referee"],
    },
    refereeId: {
        type: String,
        required: [true, "Please provide referee Id"]
    },
    avgRating: { // general rating
      type: Number,
      required: [true, "Please provide rating"],
    },
    fanRating: {
        type: Number,
        default: 0
    },
    expertRating: {
        type: Number,
        default: 0
    },
    reviews: {
      type: Array,
      default: [], 
      /* -->> An element inside this array
      [
        {
            review: "",
            reviewType: "", // fan-expert
            createdBy: {
                type: mongoose.Types.ObjectId,
                ref: "User",
                required: [true, "Please provide user"],
            },
            matchId: -1 
        }
      ]
      */ 
    },
  },
  { timestamps: true, minimize: false }
);

export default mongoose.model("RefereesAndRatings", RefereesAndRatingsSchema);
