import mongoose from "mongoose";

const officialEmailSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default mongoose.model("officialEmail", officialEmailSchema);
