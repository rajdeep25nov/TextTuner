import { useState} from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Import BrowserRouter, Switch, and Route
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light'); //whrther dark mode is enabled or not 
  const[alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if (mode ==='light') {
      setMode ('dark');
      document.body.style.backgroundColor="#1A1A1A";
      document.body.style.color= "white";
      document.getElementById('myBox').style.backgroundColor="#1A1A1A";
      document.getElementById('myBox',).style.color="white";
      showAlert("Dark Mode has been enabled","success")
    



      // agar title pe ads ya bar bar intervals pe change krna ho tho ye aise hoga 
      // setInterval(() => {
      //   document.title="TextTuner is Amazing";
      // },2000);
      // setInterval(() => {
      //   document.title="Install TextTuner now";
      // }, 1500);

    }
    else{
      setMode ('light');
      document.body.style.backgroundColor="white";
      document.body.style.color= "black";
      document.getElementById('myBox').style.backgroundColor="white";
      document.getElementById('myBox').style.color="black";
      showAlert("Light Mode has been enabled","success")

    }
  }


  return (
    // yaha se leke div close hone tkk k code ko jsx bolte
  <>
  <BrowserRouter>

    <Navbar title="TextTuner"  about="About Us"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert} />
    <div className="container my-3">
        <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below: "  />} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
      {/* <TextForm showAlert={showAlert} heading="Enter your text below: "/> */}
    </div>

    {/* About wala component */}
    {/* <div className="container">
    <About/> */}
    {/* </div> */}
    </BrowserRouter>
  </>
  );
}

export default App;
