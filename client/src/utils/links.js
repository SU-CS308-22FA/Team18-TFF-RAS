import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats, MdPersonAddAlt1 } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { AiFillExclamationCircle } from "react-icons/ai";
import { AiTwotoneContainer } from "react-icons/ai";

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
  {
    id: 5,
    text: "objection",
    path: "objection",
    icon: <AiFillExclamationCircle />
  },
  {
    id: 6,
    text: "assignment",
    path: "referee-assignment",
    icon: <MdPersonAddAlt1/> 
  },
  {
    id: 7,
    text: "reports",
    path: "reports",
    icon: <AiTwotoneContainer />,
  },
];

export default links;
