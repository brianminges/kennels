import React, { useState, useEffect, useRef } from "react"
// import { useEffect } from "react/cjs/react.production.min"

// export const PropsAndState = ({ yourName }) => {
//   let [countClicks, setCountClicks] = useState(0)

//   const handleClick = () => {
//     //good practice:
//     //make a copy of state, modify it, and then setState to the copy
//     const newCountClicks = ++countClicks
//     setCountClicks(newCountClicks)
//   }

//   return (
//     <>
//       <h3>Welcome, {yourName} </h3>
//       <p>{countClicks}</p>
//       <button onClick={(handleClick)}>Click Me</button>
//     </>
//   )
// }

export const PropsAndState = () => {
  let [countClicks, setCountClicks] = useState(0)
  let [multiple, setMultiple] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  useEffect(() => {
    let newMultiple = countClicks * 4
    setMultiple(newMultiple)
  }, [countClicks]);

  return (
    <>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
      <p>Click times four: {multiple}</p>
    </>
  )
}
