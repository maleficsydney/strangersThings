import './App.css'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Register from './components/Register'
import Login from './components/Login'
import { useState } from 'react'

function App() {

  const [ token, setToken ] = useState(null);

  return (
    <>
  <div id="main-page">
    <Navbar />
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/posts' element={<Posts />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} token={token} setToken={setToken} />
    </Routes>

  </div>
    </>
  )
}

export default App
