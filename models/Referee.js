import mongoose from "mongoose";

const refSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  lisenceNumber: {
    type: String,
    default: "",
  },
  classification: {
    type: String,
    default: "",
  },
  region: {
    type: String,
    default: "",
  },
  matchesRuled: {
    type: Array,
    default: [],
  },
  refID: {
    type: String,
    // unique: true,
    default: "",
  },
  observerGrade: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("Referee", refSchema);
