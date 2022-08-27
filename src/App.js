import React from 'react';
import './App.css';
import joaq from './imgs/1.jpg';

function Img(){
  return(
<div  style={{justifyContent:'center', alignContent:'center', textAlign:'center'}}>
          <img src={joaq} alt="joaq" style={{
  marginTop:'2%',   
  marginBottom:'2%',    
 width: 'clamp(250px, 1vw, 600px)',
  opacity: 1,
  borderRadius: '300px'
          }}/> 
          </div>
  )
}


function App() {
  return(
<div>
      <section id="MainSec">
        <div id='information'>
          <h1 >Joaquin Pareja-GitHub Pages Presentation</h1>
        <p>--QA Software Engineer--</p>
        <p>Im a Uruguayan software engineer with experience in manual testing, automation testing with selenium, postman & Cypress.js .</p>
          <Img></Img>
         <hr />
         </div>
      </section>
     <section id= 'menu'>
       <ul>
       <li> 
        <a >Home</a></li>
        <li ><a href='https://github.com/JoaqPareja' onMouseOver={{border: "3px solid #666", backgroundColor: "#666"}}> GitHub </a></li>
        <li> <a href='https://www.linkedin.com/in/joaquin-pareja-ab0924121/' > Linkedin</a></li>
       </ul>
     </section>
     {/* <Routes>
       <Router>
         <Route/>
       </Router> */}
     {/* </Routes> */}
     </div>
     )
}

export default App;
