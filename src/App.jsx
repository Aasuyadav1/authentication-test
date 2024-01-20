import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import SignUp from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'

function App() {

  const isLoginPage = window.location.pathname === "/login";
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLoginPage ? <Login /> : <Home />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
