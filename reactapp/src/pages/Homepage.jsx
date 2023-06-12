import React from 'react'
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Process from '../components/Process';
const Homepage = () => {
  return (
    <div style={{'overflowY':'hidden'}}>
      <Navbar/>
      <Process/>
    </div>
  )
}

export default Homepage
