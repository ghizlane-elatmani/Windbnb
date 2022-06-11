import "../css/Navbar.css";
import Logo from "../img/logo.svg";
import { MdSearch } from "react-icons/md";
import SearchBar from "./SearchBar";
import stays from "../img/stays.json";

const Navbar = ({ showSearchBar, setShowSearchBar, setPropertyList }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Windbnb Logo" />
      </div>
      <div
        className="search-wrapper"
        onClick={() => {
          setShowSearchBar(!showSearchBar);
          setPropertyList(stays);
        }}
      >
        <p className="location">Location</p>
        <p className="guests">Add guest</p>
        <MdSearch className="red" />
      </div>
    </div>
  );
};

export default Navbar;
