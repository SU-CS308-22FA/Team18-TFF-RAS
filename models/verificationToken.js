import mongoose from "mongoose";

const verificationTokenSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now, expires: 3600 },
});

export default mongoose.model("verificationToken", verificationTokenSchema);
