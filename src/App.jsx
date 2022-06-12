import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Property from "./component/Property";
import stays from "./img/stays.json";
import SearchBar from "./component/SearchBar";
import Footer from "./component/Footer";
import "./css/App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    const properties = stays;
    setPropertyList(properties);
  }, []);

  function handleFormLocation(location = "", guests = 0) {
    if (location === "" && guests <= 0) {
      return;
    }

    if (location !== "" && guests > 0) {
      const properties = propertyList.filter(
        (property) => property.city === location && property.maxGuests >= guests
      );
      setPropertyList(properties);
      return;
    }

    if (location !== "") {
      const properties = propertyList.filter(
        (property) => property.city === location
      );
      setPropertyList(properties);
      return;
    }

    if (guests > 0) {
      const properties = propertyList.filter(
        (property) => property.maxGuests >= guests
      );
      setPropertyList(properties);
      return;
    }
  }

  return (
    <div className={`${showSearchBar ? "blur" : ""}`}>
      {showSearchBar && (
        <SearchBar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
          fnHandleForm={handleFormLocation}
        />
      )}

      <Navbar
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
        setPropertyList={setPropertyList}
      />

      <div className="grid">
        <div className="grid-header">
          <h2>Stay in Finland</h2>
          <p className="grid-header-length">{propertyList.length}+ stays</p>
        </div>
        {propertyList.map((property) => {
          return <Property key={uuidv4()} property={property} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
