import mongoose from "mongoose";

const refSchema = new mongoose.Schema({
  name: "",
  lisenceNumber: "",
  classification: "",
  region: "",
  matchesRuled: [],
  refID: "",
});
export default mongoose.model("Referee", refSchema);
