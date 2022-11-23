/* eslint-disable no-undef */
import axios from "axios";

const getMatches = async (date) => {
  try {
    const { data } = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      {
        params: { date, league: "203", season: "2022" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_FOOTBALL_API_ACCESS_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_FOOTBALL_API_HOST,
        },
      }
    );
    const matches = data.response;

    console.log(matches);
    return matches;
  } catch (error) {
    console.log("ERROR");
    return [];
  }
};

const getMatch = async (matchId) => {
  try {
    const { data } = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      {
        params: { id: matchId },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_FOOTBALL_API_ACCESS_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_FOOTBALL_API_HOST,
        },
      }
    );

    return data.response[0];
  } catch (error) {
    return {};
  }
};

export { getMatches, getMatch };
