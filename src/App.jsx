import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from "./Modules/Header"
import Footer from "./Modules/Footer"
import './App.css'
import ArticlesList from './Modules/ArticlesList'
import ArticleById from './Modules/ArticleById'

function App() {
  const [inLogin, setInLogin] = useState(false)

  return (
    <>
    <div className="main-container">
      <Header/>
      <Routes>
        <Route path="/" element={<ArticlesList/>} />
        <Route path="/articles/:article_id" element={<ArticleById/>} />
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
