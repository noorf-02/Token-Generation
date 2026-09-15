import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './PAGES/Login'
import Signup from './PAGES/Signup'
import Landing from './PAGES/Landing'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/landing-page" element={<Landing/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
