import e from "express";
import fixtures from "../models/fixtures.js";
import Report from "../models/Report.js";

const updateReports = async (req, res) => {
  const { name } = req.body;
  const filter = {
    "Observers.name": name,
  };
  const fixture = await fixtures.find(filter);
  const match = [];
  for (let element of fixture) {
    let daydetails = element.Time.date.split(".");
    let timedetails = element.Time.hour.split(":");
    const entryexists = Report.findOne({ matchId: element.MatchID });
    if (!entryexists) {
      const report = await Report.create({
        matchId: element.MatchID,
        observer: name,
        matchyear: Number(daydetails[2]),
        matchMonth: Number(daydetails[1]),
        matchDay: Number(daydetails[0]),
        matchHour: Number(timedetails[0]),
        matchMinute: Number(timedetails[1]),
      });
    }
  }
};

const dueReports = async (req, res) => {
  const { name } = req.body;
  updateReports(req, res);
  console.log("I am out of ");
  const filter = {
    observer: name,
  };
  const sort = {
    matchyear: 1,
    matchMonth: 1,
    matchDay: 1,
    matchHour: 1,
    matchMinute: 1,
  };
  const reports = await Report.find({ observer: name }).sort(sort);
  res.status(200);
};
export { dueReports };
