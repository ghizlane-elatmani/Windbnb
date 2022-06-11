import { useState, useEffect } from "react";
import "../css/SearchBar.css";
import { MdClear } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import SpinnerInput from "./SpinnerInput";

const SearchBar = ({ showSearchBar, setShowSearchBar, fnHandleForm }) => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);

  useEffect(() => {
    const totalGuest = adults + children;
    setGuests(totalGuest);
  }, [adults, children]);

  const submitHandler = (e) => {
    e.preventDefault();
    setShowSearchBar(false);
    fnHandleForm(location, guests);
  };

  return (
    <div className="search-bar">
      <div className="wrapper-search-bar">
        <nav className="nav">
          <p className="">Edit your search</p>
          <MdClear
            className="cursor-pointer"
            onClick={() => {
              setShowSearchBar(false);
            }}
          />
        </nav>

        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="inputLocation">Location</label>
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              id="inputLocation"
              type="text"
              placeholder="Location"
            />
          </div>

          <div className="form-group-guest">
            <div className="form-group ">
              <label htmlFor="inputGuests">Guest</label>
              <input
                onChange={(e) => setGuests(e.target.value)}
                value={guests}
                id="inputGuests"
                type="text"
                placeholder="Add guest"
                onFocus={onFocus}
              />
            </div>

            {focused && (
              <SpinnerInput
                adults={adults}
                setAdults={setAdults}
                children={children}
                setChildren={setChildren}
              />
            )}
          </div>

          <button className="button-form" type="submit">
            <MdSearch /> Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
