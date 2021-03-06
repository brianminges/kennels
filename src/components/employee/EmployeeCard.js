import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom";

import { getAllEmployees } from "./../../modules/EmployeeManager.js"

export const EmployeeCard = ({employee, handleDeleteEmployee}) => (
    <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={'/images/dog.svg'} alt="My Dog" />
          </picture> */}
          <h3><span className="card-petname">
            {employee.name}
          </span></h3>
          <p>Location: {employee.locationId}</p>
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>You're fired!</button>
          <Link to={`/employees/${employee.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
)

