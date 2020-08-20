//import react
import React, { useState } from 'react';

const ContactCard = () => {
  //use hooks
  //use state
  const [showAge, setShowAge] = useState(false);

  return (
    <div className='contact-card'>
      <img src='https://via.placeholder.com/150' alt='image' />
      <div className='user-details'>
        <p>Name: </p>
        <p>Email: </p>
        <button
          onClick={
            () => setShowAge(!showAge)
          }
        >Show Age</button>
        {
          showAge && <p>Age: </p>
        }
      </div>
    </div>
  )
}

export default ContactCard;
