import mongoose from "mongoose";

const passwordTokenSchema = mongoose.Schema({
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

export default mongoose.model("passwordToken", passwordTokenSchema);
