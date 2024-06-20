

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Display from './pages/display'
import  Homepage from './pages/homepage'

import ApplicationForm from './components/applicationForm/applicationForm'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='display' element={<Display/>}/>
      <Route path='contact' element={<ApplicationForm/>}/>
    </Routes>
    </>
  )
}

export default App
