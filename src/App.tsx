import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FormBuilder from './pages/FormBuilder'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SurveyDashboard from './pages/SurveryDashBoard'


function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/FormBuilder" element={<FormBuilder />} />
          <Route path="/FormBuilder/:surveyId" element={<FormBuilder />} />
          <Route path="/SurveyDashBoard" element={<SurveyDashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
