import React from "react";
import "../css/SpinnerInput.css";

const SpinnerInput = ({ adults, setAdults, children, setChildren }) => {
  return (
    <div className="wrapper-input">
      {/* INPUT SPINNER: ADULTS */}
      <div className="input-spinner">
        <div className="input-spinner-label">
          <p className="label-title">Adults</p>
          <p className="label-subtitle">Ages 13 or above</p>
        </div>
        <div className="input-spinner-container">
          <button
            type="button"
            onClick={() => {
              setAdults(adults - 1);
              console.log(adults);
            }}
          >
            -
          </button>
          <input
            type="number"
            onChange={(e) => setAdults(e.target.value)}
            value={adults}
            min="0"
            max="50"
            step="1"
          />
          <button
            type="button"
            onClick={() => {
              setAdults(adults + 1);
              console.log(adults);
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* INPUT SPINNER: CHILDREN */}
      <div className="input-spinner">
        <div className="input-spinner-label">
          <p className="label-title">Children</p>
          <p className="label-subtitle">Ages 2-12</p>
        </div>
        <div className="input-spinner-container">
          <button
            type="button"
            onClick={() => {
              setChildren(children - 1);
            }}
          >
            -
          </button>
          <input
            type="number"
            onChange={(e) => setChildren(e.target.value)}
            value={children}
            min="0"
            max="50"
            step="1"
          />
          <button
            type="button"
            onClick={() => {
              setChildren(children + 1);
              console.log(adults);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpinnerInput;
