import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { getMatches } from "../../../utils/api";
import "./Matches.css";

const Matches = () => {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div>
      <h1>Matches Page</h1>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Matches;
