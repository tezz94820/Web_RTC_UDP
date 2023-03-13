import React from 'react'

function Home() {
  return (
    <div className='homepage-container'>
        <div>
            <input type="email" placeholder='Enter Your Email Here' />
            <input type="text" placeholder='Enter Room Code'/>
            <button>Enter Room</button>
        </div>
    </div>
  )
}

export default Home