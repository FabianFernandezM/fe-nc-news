import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div class="main-container">
      <div class="header">
        <h1 class ="icon">H-1</h1>
        <h1 class ="icon">H-2</h1>
        <h1 class ="icon">H-3</h1>
      </div>
      <div class="card-small">
        <img class="card-image" src="../resources/Images/DinoTest.jpg" alt="Post image" />
        <h2 class="card-title">Wild dinos spotted</h2>
        <p class="card-body">I regret to inform all living beings that dinos are extinct no more. There have been several attacks on cities such as Pochilandia and Rubbermypants over the last few days, with a total of 4 children being killed whilst adults celebrated their deaths with alcohol and drugs. </p>
        <div class="card-icons">
          <h1 class ="icon">I-1</h1>
          <h1 class ="icon">I-2</h1>
          <h1 class ="icon">I-3</h1>
        </div>
      </div>
      <div class="footer">
        <h1 class ="icon">F-1</h1>
        <h1 class ="icon">F-2</h1>
      </div>
    </div>
    </>
  )
}

export default App
