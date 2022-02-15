import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addLocation } from '../../modules/LocationManager';
import './../animal/AnimalForm.css'
import './LocationForm.css'

export const LocationForm = () => {
	// State will contain both location data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [location, setLocation] = useState({
		name: "",
		address: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the AnimalsManager and LocationsManager to complete this section
	// const [animals, setAnimals] = useState([]);
	// const [locations, setLocations] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newLocation = { ...location }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newLocation[event.target.id] = selectedVal
		// update state
		setLocation(newLocation)
	}


    useEffect(() => {
		//load location data and setState
	}, []);

	const handleClickSaveCustomer = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

        if (location.name === "" || location.address === "") {
			window.alert("Please add a name and address")
		} else {
        addLocation(location)
            .then(() => navigate("/locations"))
        }
	}

	return (
		<form className="animalForm">
			<h2 className="animalForm__title">New Location</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Location name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address} />
				</div>
			</fieldset>
			
			<button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save Location
          </button>
		</form>
	)
};
