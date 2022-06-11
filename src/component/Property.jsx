import React from "react";
import "../css/Property.css";
import { MdGrade } from "react-icons/md";

const Property = ({ property }) => {
  return (
    <div className="card">
      <img src={property.photo} alt={property.title} />
      <div className="property-desc">
        {property.superHost ? <p className="super-host">super host</p> : ""}
        <p className="type">{property.type}</p>
        <div className="rating">
          <MdGrade />
          <p>{property.rating}</p>
        </div>
      </div>
      <p>{property.title}</p>
    </div>
  );
};

export default Property;
