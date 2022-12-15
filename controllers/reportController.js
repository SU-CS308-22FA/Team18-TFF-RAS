import e from "express";
import BadRequestError from "../errors/bad-request.js";
import fixtures from "../models/fixtures.js";
import Report from "../models/Report.js";
import User from "../models/User.js";

const dueReports = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const firstname = user.name;
  const lastName = user.lastName;
  const name = firstname + " " + lastName;
  const query = {
    "Observers.name": new RegExp("\\b" + name + "\\b", "i"),
  };
  const fixture = await fixtures.find(query);
  for (let element of fixture) {
    let daydetails = element.Time.date.split(".");
    let timedetails = element.Time.hour.split(":");
    let ref = element.Refs[0].name;
    let home = element.Teams.home;
    let away = element.Teams.away;
    let homeScore = element.Teams.homeScore;
    let awayScore = element.Teams.awayScore;
    const entryexists = Report.find({ matchId: element.MatchID });
    console.log(entryexists);
    if (!entryexists.length) {
      const report = await Report.create({
        matchId: element.MatchID,
        observer: name,
        referee: ref,
        hometeam: home,
        awayteam: away,
        homescore: homeScore,
        awayscore: awayScore,
        matchyear: Number(daydetails[2]),
        matchMonth: Number(daydetails[1]),
        matchDay: Number(daydetails[0]),
        matchHour: Number(timedetails[0]),
        matchMinute: Number(timedetails[1]),
      });
    }
  }
  const filter = {
    observer: new RegExp("\\b" + name + "\\b", "i"),
    isSubmitted: false,
  };
  const sort = {
    matchyear: 1,
    matchMonth: 1,
    matchDay: 1,
    matchHour: 1,
    matchMinute: 1,
  };
  const dueReports = await Report.find(filter).sort(sort);
  res.status(200).json({
    dueReports,
    numDueReports: dueReports.length,
    numofDueReportPages: 1,
  });
};

const editReport = async (req, res) => {
  const { id, final_grade, accuracy, strictness, fairness, comments } =
    req.body;
  if (!id) {
    throw new BadRequestError("Need report ID");
  }
  const filter = {
    _id: id,
  };
  const report = await Report.findOne(filter);
  report.final_grade = final_grade;
  report.accuracy = accuracy;
  report.strictness = strictness;
  report.fairness = fairness;
  report.comments = comments;

  await report.save();
  res.status(200).json(report);
};

const submitReport = async (req, res) => {
  const { id } = req.params;
  const { final_grade, accuracy, strictness, fairness, comments } = req.body;
  if (
    !id ||
    !final_grade ||
    !accuracy ||
    !strictness ||
    !fairness ||
    !comments
  ) {
    throw new BadRequestError("Please provide all values");
  }
  const filter = {
    _id: id,
  };
  const report = await Report.findOne(filter);
  report.final_grade = final_grade;
  report.accuracy = accuracy;
  report.strictness = strictness;
  report.fairness = fairness;
  report.comments = comments;
  report.isSubmitted = true;
  await report.save();
  res.status(200).json(report);
};

export { dueReports, editReport, submitReport };
