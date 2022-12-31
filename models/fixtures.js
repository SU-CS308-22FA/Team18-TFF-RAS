import mongoose from "mongoose";

const FixtureSchema = new mongoose.Schema({
  MatchID: String,
  Observers: [
    {
      duty: String,
      name: String,
    },
  ],
  Refs: [
    {
      duty: String,
      name: String,
    },
  ],
  Teams: new mongoose.Schema({
    away: String,
    awayScore: String,
    home: String,
    homeScore: String,
  }),
  Time: new mongoose.Schema({
    date: String,
    hour: String,
  }),
  year: Number,
  month: Number,
  day: Number,
});

export default mongoose.model("Fixtures", FixtureSchema);
