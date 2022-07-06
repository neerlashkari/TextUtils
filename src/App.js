import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#131417";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled!!!","success");
      document.title = 'TextUtils - Dark Mode';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled!!!","success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode}  toggleMode={toggleMode}/>
        <div className="container my-3">
        <Alert alert={alert}/>
        {/* <Routes> */}
          {/* <Route exact path="/" element={}/>
          <Route exact path="/about" element={<About/>}/> */}
        {/* </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
