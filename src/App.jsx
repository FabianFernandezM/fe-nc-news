import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from "./Modules/Header"
import Footer from "./Modules/Footer"
import './App.css'
import ArticlesList from './Modules/ArticlesList'
import ArticleById from './Modules/ArticleById'
import ErrorPage from './Modules/ErrorPage'
import { UserProvider } from './Contexts/User'

function App() {
  const [inLogin, setInLogin] = useState(false)

  return (
    <UserProvider>
      <div className="main-container">
        <Header/>
        <Routes>
          <Route path="/" element={<ArticlesList/>} />
          <Route path="/articles" element={<ArticlesList/>} />
          <Route path="/articles/:article_id" element={<ArticleById/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </div>
    </UserProvider>
  )
}

export default App
