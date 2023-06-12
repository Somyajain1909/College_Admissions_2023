import React from 'react'
// import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
// import Signup from '../components/Signup';
// import Process from '../components/Process';
const Homepage = () => {
  return (
    <div style={{'overflowY':'hidden'}}>
      <Navbar/>
      <Login/>
    </div>
  )
}

export default Homepage
