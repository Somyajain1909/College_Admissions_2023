import React from 'react'
import useplus from '../images/useplus.png'
import infocircle from '../images/infocircle.png'
import fileup from '../images/fileup.png'
import reply from '../images/reply.png'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
   'Sign Up',
    'Enter data',
    'Upload docs',
    'Wait for response'

  ];

const Process = () => {
  return (
    <>
    <div style={{'marginLeft':'38%','marginTop':'4.5%'}}>
     <h2 style={{'color':"#5FA29E",'fontWeight':'700','fontSize':'60'}}>Admission Process</h2> 
  
     </div>
        <div style={{'marginTop':'10%',marginLeft:"14%",'display':'flex'}}>
        <div id='circle'><br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <img src={useplus} className='my-2' style={{'height':'50px'}} alt="add user"/>
        </div>
        <div style={{'width':'12%'}}></div>
        <div id='circle'>
            <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <img src={infocircle} className='my-2' style={{'height':'50px'}} alt="info circle"/>
        </div><div style={{'width':'12%'}}></div>
        <div id='circle'>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={fileup} className='my-2 mx-2' style={{'height':'50px'}} alt="file up"/>
        </div><div style={{'width':'12%'}}></div>
        <div id='circle'>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={reply} className='my-2 mx-2' style={{'height':'50px'}} alt="reply"/>
        </div><div style={{'width':'12%'}}></div>
    </div>
    <br/>  <br/>
    <div style={{'marginLeft':'7%','color':'black'}}> 
    <Box sx={{ width: '90%' }}>
      <Stepper alternativeLabel activeStep={-1}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
 </div></>
  )
}

export default Process
