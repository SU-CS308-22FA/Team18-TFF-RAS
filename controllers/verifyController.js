import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import officialEmail from "../models/officialEmail.js";
import User from "../models/User.js";
import crypto from "crypto";
import sendEmail from "./sendEmail.js";
import verificationToken from "../models/verificationToken.js";

const verify = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const email = user.email;
  console.log(email);
  const official = await officialEmail.findOne({ email: email });
  if (!official) {
    res.status(400);
    throw new BadRequestError("Not a registered official TFF email");
  }
  const code = await crypto.randomBytes(32).toString("hex");
  const existingToken = await verificationToken.findOne({ email });
  if (existingToken) {
    await verificationToken.deleteMany({ email: email });
  }
  const emailToken = await verificationToken.create({ code, email });
  const Base =
    process.env.NODE_ENV !== "production"
      ? `${process.env.BASE_URL}`
      : "https://tff-ras.up.railway.app/";
  const url = `${Base}/api/v1/verify/${emailToken.code}`;
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

  const official = await officialEmail.findOne({ email: email });
  if (!official) {
    res.status(400);
    throw new BadRequestError("Not a registered official TFF email");
  }

  const role = official.role;
  if (role == "referee") {
    await User.updateOne(
      { _id: req.user.userId },
      { $set: { isReferee: true } }
    );
  } else if (role == "observer") {
    await User.updateOne(
      { _id: req.user.userId },
      { $set: { isObserver: true } }
    );
  } else if (role == "club") {
    await User.updateOne({ _id: req.user.userId }, { $set: { isClub: true } });
  } else if (role == "assigner") {
    await User.updateOne(
      { _id: req.user.userId },
      { $set: { isAssigner: true } }
    );
  } else if (role == "investigator") {
    await User.updateOne(
      { _id: req.user.userId },
      { $set: { isInvestigator: true } }
    );
  }
  await emailToken.remove();
  res.status(200).json({ message: "verified successfully" });
};

export { verify, verifyUser };
