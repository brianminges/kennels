import React, { useState } from "react"

// export const Countdown = () => {
//   let [countClicks, setCountClicks] = useState(3)

//   const handleClick = () => {
//     //good practice:
//     //make a copy of state, modify it, and then setState to the copy
//     const newCountClicks = --countClicks
//     setCountClicks(newCountClicks)
//   }

//   return (
//     <>
//       <p>{countClicks}</p>
//       <button onClick={(handleClick)}>Click Me, too</button>
//     </>
//   )
// }

export const Countdown = () => {
  let [countClicks, setCountClicks] = useState(3)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = Math.max(0, --countClicks)
    setCountClicks(newCountClicks)
  }

  let words

  if (countClicks === 0) {words = <h2>blast off!</h2>}

  return (
    <>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me, too</button>
      {words}
    </>
  )
}
