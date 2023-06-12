import React from 'react'
import students2 from '../images/students2.png'

const Home = () => {
  return (
    <div style={{'display':'flex', 'overflowY':'hidden'}}>
        <div style={{'width':"40%"}}>
            <div style={{'marginTop':'5%','marginLeft':'20%','fontSize':'40px'}}>
           &nbsp; &nbsp; <p style={{'marginLeft':'14%'}}>&nbsp;&nbsp;Admissions<br/> <b>IIIT Vadodara</b><br/></p> 
           <div style={{"fontSize":"22px"}}><br/>Unleash your potential, work on exciting projects, and enhance your skills in a real-world setting. Seize this opportunity to kick-start your career! <br/><br/> </div>
           <button type="button" style={{'marginLeft':'25%'}} class="btn btn-outline">
           
  &nbsp;Learn more&nbsp;
           </button>

            </div>

        </div>
        <div style={{'width':"60%",'marginTop':'3%'}}>
         <img src={students2} alt="students" style={{height:'440px','overflowY':'hidden'}}></img>
        </div>
      
    </div>
  )
}

export default Home
