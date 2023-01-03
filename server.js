import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";

import "express-async-errors";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import ratingsRouter from "./routes/ratingsRoutes.js";
import objectionsRouter from "./routes/objectionRoutes.js";
import refereesRouter from "./routes/refereeRoutes.js";
import reportRouter from "./routes/reportRoutes.js";
import verifyRouter from "./routes/verifyRoutes.js";
import sentiment from "./sentimentAnalysis.js";

//web-scrape stuff
import FixtureFunc from "./controllers/matchController.js";
import Referee from "./models/refSchema.js";
import RefereeFunc from "./controllers/refereesController.js";
import Fixture from "./models/Fixture.js";
import Rating from "./models/Rating.js";
import Video from "./controllers/videoClip.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";
import {
  getObjection,
  deleteObjection,
  getObjectionAndSet,
} from "./controllers/objectionController.js";
import { serialize } from "v8";
import mongoose from "mongoose";
import Objection from "./models/Objection.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.json());
app.use(helmet({ contentsecuritypolicy: false }));
app.use(xss());
app.use(mongoSanitize());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome!" });
// });
// app.get("/api/v1", (req, res) => {
//   res.json({ msg: "API" });
// });

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/ratings", authenticateUser, ratingsRouter);
app.use("/api/v1/objections", authenticateUser, objectionsRouter);
app.use("/api/v1/referees", authenticateUser, refereesRouter);
app.use("/api/v1/reports", reportRouter);
app.use("/api/v1/verify", verifyRouter);
app.get("/api/videoClipsOfMatch/:home&:away&:round", async (req, res) => {
  let data = await Video.getMatchWithHighlights(
    req.params.home,
    req.params.away,
    req.params.round
  );
  res.json(data);
});

app.get("/api/video/:url", async (req, res) => {
  let data = await Video.getVideoUrl(req.params.url);
  res.json(data);
});

//get referee from d with specified id
app.get("/api/referee/:id", async (req, res) => {
  let data = await Referee.findOne({ refID: req.params.id });
  res.json(data);
});

app.get("/api/v1/sentimentAnalysis/:id", async (req, res) => {
  let reviews = await Rating.find({ referee: req.params.id }).select(
    "review -_id"
  );
  let sentSTR = "";
  for (let i = 0; i < reviews.length; i++) {
    const element = reviews[i];
    sentSTR += element;
  }
  if (sentSTR != "") {
    console.log(sentSTR);
    let rate = await sentiment.getSentimentScore(sentSTR);
    rate *= 2.5;
    rate += 2.5;
    res.json({ rate });
  } else {
    res.json({ rate: "-" });
  }
});

app.get("/api/objection/:id", async (req, res) => {
  let noDecisions = await Objection.find({
    refereeId: req.params.id,
    isInProcess: false,
    isResolved: false,
  });
  let inReview = await Objection.find({
    refereeId: req.params.id,
    isInProcess: true,
    isResolved: false,
  });
  let end = await Objection.find({
    refereeId: req.params.id,
    isInProcess: false,
    isResolved: true,
  });
  // console.log(data);
  // console.log(data);
  res.json({ NoDecisions: noDecisions, InReview: inReview, End: end });
});

app.put("/api/setInReview/:id", async (req, res) => {
  const data = await Objection.updateOne(
    { _id: req.params.id },
    { $set: { isInProcess: true, isResolved: false } }
  );
  console.log(data);
  res.json(data);
});

app.put("/api/setSolved/:id", async (req, res) => {
  const data = await Objection.updateOne(
    { _id: req.params.id },
    { $set: { isResolved: true, isInProcess: false } }
  );
  console.log(data);
  res.json(data);
});

app.put("/api/setInvestigate/:id", async (req, res) => {
  console.log("here");
  const data = await Objection.updateOne(
    { _id: req.params.id },
    { $set: { isResolved: false, isInProcess: false } }
  );
  console.log(data);
  res.json(data);
});

app.put("/api/setComment/:id&:comment", async (req, res) => {
  const data = await Objection.updateOne(
    { _id: req.params.id },
    { $set: { comment: req.params.comment } }
  );
  res.json(data);
});

app.get("/api/v1/avarageScore/:id", async (req, res) => {
  let reviews = await Rating.find({ referee: req.params.id }).select(
    "rating -_id"
  );
  let sum = 0;
  for (let i = 0; i < reviews.length; i++) {
    const element = reviews[i].rating;
    sum += element;
  }
  let avrg = sum / reviews.length;
  console.log(avrg);
  res.json(avrg);
});

app.get("/api/v1/averageScoresAndSentiment", async (req, res) => {
  let ratings = await Rating.find({});

  let referees = {};

  for (let i = 0; i < ratings.length; i++) {
    const element = ratings[i];

    // add rating
    if (!Object.keys(referees).includes(element.referee)) {
      referees[element.referee] = {
        rating: { count: 0, rating: 0 },
        fanRating: { count: 0, rating: 0 },
        expertRating: { count: 0, rating: 0 },
        sentiment: { score: "-", reviews: "" },
      };
    }
    referees[element.referee].rating.count++;
    referees[element.referee].rating.rating += element.rating;

    if (element.ratingType === "fan") {
      referees[element.referee].fanRating.count++;
      referees[element.referee].fanRating.rating += element.rating;
    } else {
      referees[element.referee].expertRating.count++;
      referees[element.referee].expertRating.rating += element.rating;
    }

    // add review
    referees[element.referee].sentiment.reviews += element.review + ". ";
  }

  for (let referee in referees) {
    referees[referee].rating.rating /= referees[referee].rating.count;
    referees[referee].rating.rating =
      referees[referee].rating.rating.toFixed(2);
    if (referees[referee].fanRating.count !== 0) {
      referees[referee].fanRating.rating /= referees[referee].fanRating.count;
      referees[referee].fanRating.rating =
        referees[referee].fanRating.rating.toFixed(2);
    }
    if (referees[referee].expertRating.count !== 0) {
      referees[referee].expertRating.rating /=
        referees[referee].expertRating.count;
      referees[referee].expertRating.rating =
        referees[referee].expertRating.rating.toFixed(2);
    }

    if (referees[referee].sentiment.reviews !== "") {
      referees[referee].sentiment.score = await sentiment.getSentimentScore(
        referees[referee].sentiment.reviews
      );
      referees[referee].sentiment.score *= 2.5;
      referees[referee].sentiment.score += 2.5;
      referees[referee].sentiment.score =
        referees[referee].sentiment.score.toFixed(2);
    }
  }

  res.json({ referees });
});

app.get("/api/v1/sentimentAnalysisForExp/:id", async (req, res) => {
  let reviews = await Rating.find({
    referee: req.params.id,
    ratingType: "expert",
  }).select("review -_id");
  let sentSTR = "";
  for (let i = 0; i < reviews.length; i++) {
    const element = reviews[i];
    sentSTR += element;
  }
  if (sentSTR != "") {
    console.log(sentSTR);
    let rate = await sentiment.getSentimentScore(sentSTR);
    rate *= 2.5;
    rate += 2.5;
    res.json({ rate });
  } else {
    res.json({ rate: "-" });
  }
});

app.get("/api/v1/sentimentAnalysisForFan/:id", async (req, res) => {
  let reviews = await Rating.find({
    referee: req.params.id,
    ratingType: "fan",
  }).select("review -_id");
  let sentSTR = "";
  for (let i = 0; i < reviews.length; i++) {
    const element = reviews[i];
    sentSTR += element;
  }
  if (sentSTR != "") {
    console.log(sentSTR);
    let rate = await sentiment.getSentimentScore(sentSTR);
    rate *= 2.5;
    rate += 2.5;
    res.json({ rate });
  } else {
    res.json({ rate: "-" });
  }
});

app.get("/api/v1/avarageScoreForExp/:id", async (req, res) => {
  let reviews = await Rating.find({
    referee: req.params.id,
    ratingType: "expert",
  }).select("rating -_id");
  let sum = 0;
  for (let i = 0; i < reviews.length; i++) {
    const element = reviews[i].rating;
    sum += element;
  }
  let avrg = sum / reviews.length;
  console.log(avrg);
  res.json(avrg);
});

app.get("/api/v1/avarageScoreForFan/:id", async (req, res) => {
  let reviews = await Rating.find({
    referee: req.params.id,
    ratingType: "fan",
  }).select("rating -_id");
  let sum = 0;
  for (let i = 0; i < reviews.length; i++) {
    const element = reviews[i].rating;
    sum += element;
  }
  let avrg = sum / reviews.length;
  console.log(avrg);
  res.json(avrg);
});

//every detail is taken from db
app.get("/api/v1/matchBySubstr/:substr", async (req, res) => {
  let data = await FixtureFunc.searchBySubstr(req.params.substr);
  res.json(data);
});
//only name and id refid is taken from db and name will de shown in client
app.get("/api/v1/refereeBySubstr/:substr", async (req, res) => {
  let data = await RefereeFunc.searchBySubstr(req.params.substr);
  res.json(data);
});

// only when ready to deploy
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is listening...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
