import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getAnimalById, updateAnimal } from "../../modules/AnimalManager"
import { getAllLocations } from '../../modules/LocationManager'
import { getCustomerById, getAllCustomers } from '../../modules/CustomerManager'
import "./AnimalForm.css"

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ 
      name: "", 
      breed: "" });
  const [locations, setLocations] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {animalId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId
    };

  updateAnimal(editedAnimal)
    .then(() => navigate("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllLocations()
      .then(setLocations)
  }, []);

  useEffect(() => {
    getAllCustomers()
      .then(setCustomers)
  }, []);


  // useEffect(() => {
  //   getAnimalById(animalId)
  //     .then(animal => {
  //       setAnimal(animal);
  //       setLocations(locations);
  //       setCustomers(customers);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>

            <select 
                value={animal.locationId} 
                name="locationId" 
                id="locationId" 
                onChange={handleFieldChange} 
                className="form-control" >
                <option>Select a location</option>
                {locations.map(l => (
                    <option key={l.id} value={l.id}>
                        {l.name}
                    </option>
                ))}
            </select>
            <label htmlFor="animal">Location</label>

            <select 
                value={animal.customerId} 
                name="customerId" 
                id="customerId" 
                onChange={handleFieldChange} 
                className="form-control" >
                <option>Select a customer</option>
                {customers.map(c => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>
            <label htmlFor="animal">Customer</label>

          </div>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}