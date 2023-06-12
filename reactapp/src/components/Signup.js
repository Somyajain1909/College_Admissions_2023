import React from 'react'

const Signup = () => {
  return (
    <>
    <div style={{'marginLeft':'43%','marginTop':'4.5%'}}>
      <h2 style={{'color':"#5FA29E",'fontWeight':'700','fontSize':'60'}}>Sign Up</h2> 
      
    </div>
    <div style={{'marginLeft':'30%','marginTop':'2%'}} className='signupdiv'>
        <input style={{'marginLeft':'17%','marginTop':'10%'}} type='text' placeholder='   Full Name' className='signinput'/>
        <input style={{'marginLeft':'17%','marginTop':'10%'}} type='email' placeholder='   Email' className='signinput'/>
        <input style={{'marginLeft':'17%','marginTop':'10%'}} type='text' placeholder='   Password' className='signinput'/>
        <button type="button" style={{'backgroundColor':'#5FA29E','color':'white','marginLeft':'39%','marginTop':'10%'}} class="btn"> &nbsp;&nbsp;SignUp&nbsp;&nbsp;</button>
    </div>

   

    </>
  )
}

export default Signup
