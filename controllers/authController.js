import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import passwordToken from "../models/passwordToken.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import sendEmail from "./sendEmail.js";

const register = async (req, res) => {
  const { name, lastName, city, email, password } = req.body;

  if (!name || !lastName || !city || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({
    name,
    email,
    password,
    lastName,
    location: city,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
      type: user.type,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  await user.save();

  // various setups
  // in this case only id
  // if other properties included, must re-generate

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

const deleteUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });

  await user.remove();

  res.status(StatusCodes.OK).json({ msg: "Success! Account removed" });
};

const passwordEmail = async (req, res) => {
  const { email } = req.body.email;
  console.log(email);
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new BadRequestError("No account with that email exists");
  }
  const code = crypto.randomBytes(32).toString("hex");
  const existingToken = await passwordToken.findOne({ email });
  if (existingToken) {
    await passwordToken.deleteMany({ email: email });
  }
  const emailToken = await passwordToken.create({ code, email });
  console.log(emailToken);
  const Base =
    process.env.NODE_ENV !== "production"
      ? `${process.env.BASE_URL}`
      : "https://team18-tff-ras-production.up.railway.app/";
  const url = `${Base}reset-password/${emailToken.code}`;
  try {
    await sendEmail(user.email, "Reset Password", url);
  } catch (error) {
    console.log(error);
  }

  res.status(201).json({ message: "An email has been sent to your inbox" });
};

const updatePassword = async (req, res) => {
  const emailToken = await passwordToken.findOne({
    code: req.params.emailtoken,
  });
  let newPassword = req.body.password;
  if (!newPassword) {
    throw new BadRequestError("Please provide all values");
  }
  if (!emailToken) {
    res.status(400);
    throw new BadRequestError("Invalid password reset token");
  }

  const user = await User.findOne({ email: emailToken.email }).select(
    "+password"
  );
  const isPasswordCorrect = await user.comparePassword(newPassword);
  if (!user) {
    throw new BadRequestError("Not a valid user");
  }
  if (isPasswordCorrect) {
    throw new BadRequestError("Password is same as old password");
  }
  const salt = await bcrypt.genSalt(10);
  newPassword = await bcrypt.hash(newPassword, salt);
  await User.updateOne({ _id: user._id }, { $set: { password: newPassword } });
  await emailToken.remove();
  res.status(200).json({ msg: "password reset successfully" });
};

export {
  register,
  login,
  updateUser,
  deleteUser,
  passwordEmail,
  updatePassword,
};
