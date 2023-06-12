import React from 'react'

const Login = () => {
  return (
    <div>
        <>
    <div style={{'marginLeft':'44%','marginTop':'4.5%'}}>
      <h2 style={{'color':"#5FA29E",'fontWeight':'700','fontSize':'60'}}>Login</h2> 
      
    </div>
    <div style={{'marginLeft':'30%','marginTop':'2%'}} className='logindiv'>
      
        <input style={{'marginLeft':'17%','marginTop':'10%'}} type='email' placeholder='   Email' className='signinput'/>
        <input style={{'marginLeft':'17%','marginTop':'10%'}} type='text' placeholder='   Password' className='signinput'/>
        <button type="button" style={{'backgroundColor':'#5FA29E','color':'white','marginLeft':'41%','marginTop':'10%'}} class="btn"> &nbsp;&nbsp;Login&nbsp;&nbsp;</button>
    </div>

   

    </>
    </div>
  )
}

export default Login
