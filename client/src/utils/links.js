import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "home",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "matches",
    path: "matches",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "referees",
    path: "referees",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
