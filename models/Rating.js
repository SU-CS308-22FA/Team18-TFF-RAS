import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: [true, "Please provide rating"],
    },
    review: {
      type: String,
      default: "",
      //   maxlength: 100,
    },
    eventReviews: {
      type: Object,
      default: {},
    },
    ratingType: {
      type: String,
      required: [true, "Please provide type"],
      enum: ["fan", "expert"],
      default: "fan",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    match: {
      type: Number,
      // type: mongoose.Types.ObjectId,
      // ref: "Match",
      required: [true, "Please provide match"],
    },
    referee: {
      type: String,
      // type: mongoose.Types.ObjectId,
      // ref: "Referee",
      required: [true, "Please provide referee"],
    },
  },
  { timestamps: true, minimize: false }
);

export default mongoose.model("Rating", RatingSchema);
