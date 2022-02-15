import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../modules/CustomerManager';
// import './../animal/AnimalForm.css'
import './CustomerForm.css'

export const CustomerForm = () => {
	// State will contain both customer data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [customer, setCustomer] = useState({
		name: "",
		address: "",
        phone: 0,
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the AnimalsManager and LocationsManager to complete this section
	// const [animals, setAnimals] = useState([]);
	const [locations, setLocations] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newCustomer = { ...customer }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newCustomer[event.target.id] = selectedVal
		// update state
		setCustomer(newCustomer)
	}

    useEffect(() => {
		//load location data and setState
	}, []);

	const handleClickSaveCustomer = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		if (customer.name === "" || customer.address === "" || customer.phone === 0) {
			window.alert("Please add a name, address and phone number")
		} else {
        addCustomer(customer)
            .then(() => navigate("/customers"))
		}
	}

	return (
		<form className="animalForm">
			<h2 className="animalForm__title">New Customer</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Customer name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer address" value={customer.address} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="phone">Phone:</label>
					<input type="tel" id="phone" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer phone number" value={customer.phone} />
				</div>
			</fieldset>

			<button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save Customer
          </button>
		</form>
	)
};
