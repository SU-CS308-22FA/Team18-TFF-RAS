import mongoose from "mongoose";

const objectionSchema = new mongoose.Schema({
  clubId: {
    type: String,
    required: [true, "No club ID!"],
  },
  refereeId: {
    type: String,
    required: [true, "No referee ID!!!"],
  },
  anObjection: {
    type: String,
    required: [true, "Objection is not entered!!!"]
  },
  isInProcess: {
    type: Boolean,
    default: false,
  },
  isResolved: {
    type: Boolean,
    default: false,
  }
}); 

// const t = await Fixture.create({
//             clubId: match.Refs,
//             Teams: match.Teams,
//             Observers: match.Observers,
//             Time: match.Time,
//             MatchID:match.MatchID
//         });
//         await t.save().then(function(){
//             console.log("Data re-entered"); // Success
//         }).catch(function(error){
//             console.log(error); // Failure
//         });



export default mongoose.model("Objection", objectionSchema);
