// import React, { useState } from 'react'
import React from 'react'

export default function About(props) {


//     const[myStyle,setMyStyle]= useState({
//         color:'black',
//         backgroundColor:'white' 
// })

let myStyle={
  color:props.mode==='dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'#1A1A1A':'white'
}

// const[btntext,setBtnText]= useState("Enable Dark Mode ")

// const toggleStyle=()=>{
//     if(myStyle.color ==='white'){
//         setBtnText("Enable Dark mode")
//         setMyStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         // setBtnText("Enable light mode")
//     }

//     else{
//         setMyStyle({
//             color:'white',
//             backgroundColor:'black',
//             border:'1px solid white'
//         })
//         setBtnText("Enable Light  mode")
//     }
// }

  return (
    <div className="container" style={myStyle}>
     <h1 className='my-3'>About Developer</h1>
      <div className ="accordion" id="accordionExample">
        <div className ="accordion-item">
        <h2 className ="accordion-header">
             <button className ="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Rajdeep Jaiswal
      </button>
    </h2>
    <div id="collapseOne" className ="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
      <div className ="accordion-body" style={myStyle}>
       Hi! I am Rajdeep Jaiswal from Chandigarh University
      </div>
    </div>
  </div>
  <div className ="accordion-item">
    <h2 className ="accordion-header">
      <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        About TextTuner
      </button>
    </h2>
    <div id="collapseTwo" className ="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className ="accordion-body" style={myStyle}>
        <strong>TextTuner is a utility which is used to manipulate your text in the way you want,you can choose from different option provided to you,like uppercase ,lowercase etc.</strong> 
      </div>
    </div>
  </div>
  <div className ="accordion-item">
    <h2 className ="accordion-header">
      <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Social Media
      </button>
    </h2>
    <div id="collapseThree" className ="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className ="accordion-body" style={myStyle}>
        <strong>Instagram:-</strong>rajdeepjaiswal25nov
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-4">
<button onClick={toggleStyle} type="button" className="btn btn-dark">{btntext} </button> */}
{/* </div> */}
    </div>
  )
}
