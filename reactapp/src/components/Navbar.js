import React from 'react'

const Navbar = () => {
  return (
    <div style={{'color':'white'}}>
      <nav class="navbar navbar-expand-lg" style={{'backgroundColor':'#5FA29E','color':'white','height':'60px'}}>
  <div class="container-fluid" style={{'color':'white'}}>
    <a class="navbar-brand" style={{'color':'white', 'fontSize':'12.5px','width': '132px',
'height': '33px'}} href="/"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023 <br/>ADMISSIONS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div style={{'width':'38%'}}></div>
      <div class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mx-4 mb-lg-0">
        <li class="nav-item  mx-4">
          <a class="nav-link" style={{'color':'white', 'fontSize':'12.5px'}}  aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item  mx-4">
          <a class="nav-link" style={{'color':'white', 'fontSize':'12.5px'}} href="/">PROCESS</a>
        </li>
        
        <li class="nav-item  mx-4">
          <a class="nav-link " style={{'color':'white', 'fontSize':'12.5px'}}  href="/">ADMISSION FORM</a>
        </li>
        <li class="nav-item  mx-4">
          <a class="nav-link " style={{'color':'white', 'fontSize':'12.5px'}}  href="/">FORM DATA</a>
        </li>
        <li class="nav-item  mx-4">
          <a class="nav-link " style={{'color':'white', 'fontSize':'12.5px'}}  href="/">LOGIN</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
