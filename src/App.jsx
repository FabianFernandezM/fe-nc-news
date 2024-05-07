import { useState } from 'react'
import Header from "./Modules/Header"
import Footer from "./Modules/Footer"
import './App.css'
import ArticlesList from './Modules/ArticlesList'

function App() {

  return (
    <>
    <div className="main-container">
      <Header/>
      <ArticlesList/>
      <Footer/>
    </div>
    </>
  )
}

export default App
