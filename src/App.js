
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');


  }


  const toggleMode = (cls) => {
      console.log(cls);
      removeBodyClasses();
      document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success!");
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
    showAlert("Light mode has been enabled", "Success  ");
  }


  return (
    <>

     <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
            <Route path="/about" element = {<About />}/>
            <Route path="/" element = {<TextForm heading="Enter your text" showAlert={showAlert} mode={mode} />}/>
              
        </Routes>
          </div>
        </Router>

    </>
  );
}

export default App;
