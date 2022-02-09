import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)


// import React from "react"
// import { AnimalCard } from "./animal/AnimalCard"
// import { EmployeeCard } from "./employee/EmployeeCard"
// import { LocationCard } from "./location/LocationCard"
// import { CustomerCard } from "./customer/CustomerCard"
// import { PropsAndState } from "./PropsAndState.js"
// import { Countdown } from "./countdown.js"
// import "./Kennel.css"
// import { PropsAndStateChallenge } from "./challenge.js"
   

// export const Kennel = () => {
//     const addressObj1 = {
//         streetAddress: "123 NSS Way",
//         city: "Nashville",
//         state: "TN",
//         zip: "37536"
//     }
//     const addressObj2 = {
//         streetAddress: "123 NSS Way",
//         city: "Nashville",
//         state: "TN",
//         zip: "37536"
//     }
//     const addressObj3 = {
//         streetAddress: "123 NSS Way",
//         city: "Nashville",
//         state: "TN",
//         zip: "37536"
//     }

//     return (
//     <>
//         <PropsAndState yourName="Brian" address={addressObj1} />
//         <Countdown/>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>

//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>

//         <h2>Animals</h2>
//         <article className="animals">
//             <AnimalCard />
//             <AnimalCard />
//             <AnimalCard />
//         </article>

//         <h2>Employees</h2>
//         <article className="employees">
//             <EmployeeCard />
//             <EmployeeCard />
//             <EmployeeCard />
//         </article>

//         <h2>Employees</h2>
//         <article className="locations">
//             <LocationCard />
//             <LocationCard />
//         </article>

//         <h2>Customers</h2>
//         <article className="customers">
//             <CustomerCard />
//             <CustomerCard />
//             <CustomerCard />
//             <CustomerCard />
//         </article>
//         {/* <h2>Challenge</h2>
//             <PropsAndState yourName="Mary" />
//             <PropsAndStateChallenge address={addressObj1} />
//             <PropsAndState yourName="Joan" />
//             <PropsAndStateChallenge address={addressObj2} /> */}


//     </>
//     )
// }

