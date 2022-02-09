export const PropsAndStateChallenge = ({ address }) => {

  
    // const handleClick = () => {
    //   //good practice:
    //   //make a copy of state, modify it, and then setState to the copy
    //   const newCountClicks = ++countClicks
    //   setCountClicks(newCountClicks)
    // }
  
    return (
      <>
        <p>{address.streetAddress} </p>
        <p>{address.city}, {address.state} {address.zip} </p>
      </>
    )
  }
  