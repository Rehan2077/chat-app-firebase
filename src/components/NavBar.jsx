import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <h3>Lama Chat</h3>
      <div className='user'>
        <img src="https://pps.whatsapp.net/v/t61.24694-24/299399928_768701757741212_724700614874858851_n.jpg?ccb=11-4&oh=01_AdTq20P2eYpSOktz0Jw4FLZ0nTft7uIqQTNXPSgd9vd0xg&oe=65139D1F&_nc_sid=000000&_nc_cat=109" alt="dp" />
        <h4>{"Rehan"}</h4>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBar