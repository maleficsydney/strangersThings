import './App.css'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/Account'
import Navbar from './components/Navbar'
import Posts from './components/Posts'

function App() {


  return (
    <>
  <div id="main-page">
    <Navbar />
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/posts' element={<Posts />} />
      <Route path='/profile' element={<Profile />} />
      {/* <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} /> */}
    </Routes>

  </div>
    </>
  )
}

export default App
