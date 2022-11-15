/* eslint-disable no-undef */
import axios from "axios";

const getMatch = async (matchId) => {
  const { data } = axios.get(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    {
      params: { id: "884454" },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_FOOTBALL_API_ACCESS_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_FOOTBALL_API_HOST,
      },
    }
  );

  console.log(data);
};

export { getMatch };
