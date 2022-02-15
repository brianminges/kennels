import React from "react"
import "./Customer.css"
import { Link } from "react-router-dom"

export const CustomerCard = ({customer, handleDeleteCustomer}) => (
    <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={'/images/dog.svg'} alt="My Dog" />
          </picture> */}
          <h3><span className="card-petname">
            {customer.name}
          </span></h3>
          <p>Address: {customer.address}</p>
          <p>Phone: {customer.phone}</p>
          <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>He gone</button>
          <Link to={`/customers/${customer.id}/edit`}>
            <button>Edit</button>
          </Link>

        </div>
      </div>
)