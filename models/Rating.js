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
      type: Array,
      default: [],
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
    referee: {
      type: mongoose.Types.ObjectId,
      ref: "Referee",
      required: [true, "Please provide referee"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Rating", RatingSchema);
