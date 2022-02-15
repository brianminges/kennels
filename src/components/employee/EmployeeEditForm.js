import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getEmployeeById, updateEmployee} from "../../modules/EmployeeManager"
import { getAllLocations } from '../../modules/LocationManager';
import "./EmployeeForm.css"

export const EmployeeEditForm = () => {
    const [employee, setEmployee] = useState({ 
        name: "", 
        locationId: "" });
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  const {employeeId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      locationId: parseInt(employee.locationId)
    };

  updateEmployee(editedEmployee)
    .then(() => navigate("/employees")
    )
  }

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllLocations()
        .then(setLocations)
}, []);

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
                value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <select 
                value={employee.locationId} 
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
            <label htmlFor="employee">Location</label>

          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
					

          </div>
        </fieldset>
      </form>
    </>
  );
}
