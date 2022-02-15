import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './components/animal/AnimalList.js'
import { AnimalDetail } from './components/animal/AnimalDetail.js'
import { LocationList } from './components/location/LocationList.js'
import { LocationDetail } from './components/location/LocationDetail.js'
import { CustomerList } from './components/customer/CustomerList.js'
import { EmployeeList } from './components/employee/EmployeeList.js'
import { AnimalForm } from './components/animal/AnimalForm'
import { CustomerForm } from './components/customer/CustomerForm'
import { LocationForm } from './components/location/LocationForm'
import { EmployeeForm } from './components/employee/EmployeeForm'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { AnimalEditForm } from './components/animal/AnimalEditForm'
import { EmployeeEditForm } from './components/employee/EmployeeEditForm'
import { LocationEditForm } from './components/location/LocationEditForm'
import { CustomerEditForm } from './components/customer/CustomerEditForm'



export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />

                <Route exact path="/register" element={<Register />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<PrivateRoute><AnimalList /></PrivateRoute>} />
                <Route exact path="/animals/:animalId" element={<PrivateRoute><AnimalDetail /></PrivateRoute>} />
                <Route path="/animals/create" element={<PrivateRoute><AnimalForm /></PrivateRoute>} />
                <Route path="/animals/:animalId/edit" element={<PrivateRoute><AnimalEditForm /></PrivateRoute>} />

                {/* Render the locations list when http://localhost:3000/locations */}
                <Route exact path="/locations" element={<PrivateRoute><LocationList /></PrivateRoute>} />
                <Route exact path="/locations/:locationId" element={<PrivateRoute><LocationDetail /></PrivateRoute>} />
                <Route path="/locations/create" element={<PrivateRoute><LocationForm /></PrivateRoute>} />
                <Route path="/locations/:locationId/edit" element={<PrivateRoute><LocationEditForm /></PrivateRoute>} />

                {/* Render the animal list when http://localhost:3000/customers */}
                <Route exact path="/customers" element={<PrivateRoute><CustomerList /></PrivateRoute>} />
                <Route path="/customers/create" element={<PrivateRoute><CustomerForm /></PrivateRoute>} />
                <Route path="/customers/:customerId/edit" element={<PrivateRoute><CustomerEditForm /></PrivateRoute>} />

                {/* Render the animal list when http://localhost:3000/employees */}
                <Route exact path="/employees" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
                <Route path="/employees/create" element={<PrivateRoute><EmployeeForm /></PrivateRoute>} />
                <Route path="/employees/:employeeId/edit" element={<PrivateRoute><EmployeeEditForm /></PrivateRoute>} />

            </Routes>
        </>
    )
}