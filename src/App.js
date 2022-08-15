import React, { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042735'

      showAlert('Dark mode Enable', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'

      showAlert('Light mode Enable', 'light')
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtile" mode={mode} toggleMode={changeMode} />
        <Alert alert={alert} />
        <Routes>

          < Route exeat path='/' element={<TextForm heading='Analyze the text hear' mode={mode} showAlert={showAlert} />} />
          < Route exeat path='/About' element={<About titles='About US' mode={mode}/>} />

        </Routes>
      </BrowserRouter>
    </>

  );

}

export default App;
