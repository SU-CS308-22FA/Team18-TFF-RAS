/* eslint-disable no-undef */
import axios from "axios";

const getMatches = async () => {
  try {
    const { data } = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      {
        params: { date: "2022-11-12", league: "203", season: "2022" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_FOOTBALL_API_ACCESS_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_FOOTBALL_API_HOST,
        },
      }
    );

    console.log(data);
  } catch (error) {
    console.log("ERROR");
  }
};

export { getMatches };
