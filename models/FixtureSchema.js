// const mongoose = require('mongoose');
import mongoose from 'mongoose';

let teamsInfo = {home: "", away: "", homeScore: "", awayScore:""}
let timeInfo = {date : "", hour: ""}
const fixtureSchema = new mongoose.Schema({
    Refs: [],
    Teams: teamsInfo,
    Observers: [],
    Time: timeInfo,
    MatchID:""
    },
    { collation: { locale: 'en_US', strength: 1 }}
);
// module.exports = mongoose.model("Match", matchSchema);
export default mongoose.model("Fixture", fixtureSchema);
// export default mongoose.model("Objection", objectionSchema);
