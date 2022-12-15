import { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  let [input,setInput] = useState("");
  let [options, setOoptions] = useState([
      {
        type: 'group',
        name: 'Referees',
        items: [
            {name: "", value: null},
            {name: "", value: null},
            {name: "", value: null}
        ]
    },
      {
          type: 'group',
          name: 'Matches',
          items: [
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''}
          ]
      },
  ]);
  const { user, logoutUser, toggleSidebar } = useAppContext();

  const handleChange = (e) => {
    e.preventDefault();
    
    (e.target.value);
  };


// const arr = [1, 2, 3, 5, 6];

// //returning arr val greater than 2
// const arrFiltered = arr.filter((arrValue) => arrValue > 2);
// console.log(arrFiltered);

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <SearchBar />
        {/* <SelectSearch onChange={handleChange} search options={options} value={input} name="language" placeholder="Choose your language" /> */}
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
