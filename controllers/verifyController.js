import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import User from "../models/User.js";
import crypto from "crypto";
import sendEmail from "./sendEmail.js";
import verificationToken from "../models/verificationToken.js";

const verify = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const email = user.email;
  console.log(email);

  const code = crypto.randomBytes(32).toString("hex");
  const existingToken = await verificationToken.findOne({ email });
  if (existingToken) {
    await verificationToken.deleteMany({ email: email });
  }
  const emailToken = await verificationToken.create({ code, email });
  const Base =
    process.env.NODE_ENV !== "production"
      ? `${process.env.BASE_URL}`
      : "https://team18-tff-ras-production.up.railway.app/";
  const url = `${Base}${emailToken.code}`;
  try {
    await sendEmail(user.email, "Account verification", url);
  } catch (error) {
    console.log(error);
  }

  res.status(201).json({ message: "An email has been sent to your inbox" });
};

const verifyUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const email = user.email;
  const emailToken = await verificationToken.findOne({
    code: req.params.emailtoken,
  });
  if (!emailToken) {
    res.status(400);
    throw new BadRequestError("Invalid verification token");
  }

  if (email !== emailToken.email) {
    res.status(400);
    throw new BadRequestError("User not authorized");
  }

  const verifiedUser = await User.updateOne(
    { _id: req.user.userId },
    { $set: { isVerified: true } }
  );

  await emailToken.remove();
  res.status(200).json({ message: "verified successfully" });
};

export { verify, verifyUser };
