import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './components/animal/AnimalList.js'
import { AnimalDetail } from './components/animal/AnimalDetail.js'
import { LocationList } from './components/location/LocationList.js'
import { LocationDetail } from './components/location/LocationDetail.js'
import { CustomerList } from './components/customer/CustomerList.js'
import { EmployeeList } from './components/employee/EmployeeList.js'
import { AnimalForm } from './components/animal/AnimalForm'

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />

                {/* Render the locations list when http://localhost:3000/locations */}
                <Route exact path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />

                {/* Render the animal list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeList />} />
            </Routes>
        </>
    )
}