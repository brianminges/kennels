import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../../modules/EmployeeManager';
import { getAllLocations } from '../../modules/LocationManager';

// import './../animal/AnimalForm.css'
import './EmployeeForm.css'

export const EmployeeForm = () => {
	// State will contain both location data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [employee, setEmployee] = useState({
		name: "",
		locationId: 0,
	});
    const [locations, setLocations] = useState([]);
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
		const newEmployee = { ...employee }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newEmployee[event.target.id] = selectedVal
		// update state
		setEmployee(newEmployee)
	}

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }; 

    useEffect(() => {
		//load location data and setState
        getLocations()
	}, []);



	const handleClickSaveCustomer = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form
        
        if (employee.name === "" || employee.locationId === 0) {
			window.alert("Please add a name and location")
		} else {
        addEmployee(employee)
            .then(() => navigate("/employees"))
        }
	}

	return (
		<form className="animalForm">
			<h2 className="animalForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Employee name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={employee.name} />
				</div>
			</fieldset>
						
            <fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>


			<button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save Employee
          </button>
		</form>
	)
};
