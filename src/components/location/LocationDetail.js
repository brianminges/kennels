import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
// import './AnimalDetail.css';
import './LocationDetail.css';
import { useParams, useNavigate } from "react-router-dom"


export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation(location);
        setIsLoading(false);
      });
  }, [locationId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      navigate("/locations")
    );
  };

  return (
    <section className="animal">
      <h3 className="animal__name">{location.name}</h3>
      <div className="animal__breed">{location.address}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {location.location?.name}</div>
      <div className="animal__owner">Customer: {location.customer?.name}</div> */}
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close location
        </button>
    </section>
  );
}
