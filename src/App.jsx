import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Property from "./component/Property";
import stays from "./img/stays.json";
import SearchBar from "./component/SearchBar";
import "./css/App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    const properties = stays;
    setPropertyList(properties);
  }, []);

  function handleFormLocation(location = "none", guests) {
    if (location === "" && guests === 0) {
      return;
    }

    const properties = propertyList.filter(
      (property) => property.city === location
    );
    setPropertyList(properties);
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
        {propertyList.map((property) => {
          return <Property key={uuidv4()} property={property} />;
        })}
      </div>
    </div>
  );
}

export default App;
