import { useState } from 'react'
import './App.css'
import Contador from './Components/Contador.jsx'
import Reloj from './Components/Reloj.jsx'
import AgeGuesser from './Components/AgeGuesser.jsx'

function App() {
  return (
    <>
    <h1>TP-REACT </h1>
      <Contador />
      <br />
      <hr />
    <h1>Reloj </h1>
      <Reloj/>
      <br />
      <hr />
    <h1>AgeGuesser</h1>
      <AgeGuesser/>
    </>
  )
}

export default App;
