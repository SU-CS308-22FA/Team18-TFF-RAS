import mongoose from "mongoose";

let teamsInfo = { home: "", away: "", homeScore: "", awayScore: "" };
let timeInfo = { date: "", hour: "" };
const fixtureSchema = new mongoose.Schema(
  {
    Refs: [],
    Teams: teamsInfo,
    Observers: [
      {
        duty: String,
        name: String,
      },
    ],
    Time: timeInfo,
    MatchID: "",
  },
  { collation: { locale: "en_US", strength: 1 } }
);
export default mongoose.model("Fixture", fixtureSchema);
