import React from "react"
import "./Location.css"
import { Link } from "react-router-dom";

export const LocationCard = ({location, handleDeleteLocation}) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={'/images/dog.svg'} alt="My Dog" />
        </picture> */}
        <h3><span className="card-petname">
          {location.name}
        </span></h3>
        <p>Address: {location.address}</p>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close location</button>
        <Link to={`/locations/${location.id}`}>
        <button>Location details</button>
        </Link>
        <Link to={`/locations/${location.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
    );      
}