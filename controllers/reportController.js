import e from "express";
import BadRequestError from "../errors/bad-request.js";
import NotFoundError from "../errors/not-found.js";

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
    const entryexists = await Report.findOne({ matchId: element.MatchID });
    if (!entryexists) {
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

const submitReport = async (req, res) => {
  const { id } = req.params;

  const { fairness, accuracy, strictness, final_grade, comments } = req.body;

  if (!final_grade || !strictness || !accuracy || !fairness || !comments) {
    throw new BadRequestError("Please Provide All Values");
  }

  const report = await Report.findOne({ _id: id });

  if (!report) {
    throw new NotFoundError(`No report with id ${id}`);
  }

  const user = await User.findOne({ _id: req.user.userId });
  const firstname = user.name;
  const lastName = user.lastName;
  const name = firstname + " " + lastName;
  let observername = new RegExp("\\b" + name + "\\b", "i");
  if (name !== report.observer) {
    throw new BadRequestError("Unauthorized");
  }
  if (report.isSubmitted !== false) {
    throw new BadRequestError("Report already submitted");
  }
  console.log(req.body);
  const submittedReport = await Report.findOneAndUpdate(
    { _id: id },
    {
      fairness: fairness,
      final_grade: final_grade,
      strictness: strictness,
      comments: comments,
      accuracy: accuracy,
      isSubmitted: true,
    }
  );
  res.status(200).json({ submittedReport });
};

export { dueReports, submitReport };
