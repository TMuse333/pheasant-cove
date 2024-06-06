

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Display from './pages/display'
import  Homepage from './pages/homepage'
import Booking from './pages/contact/contact'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='display' element={<Display/>}/>
      <Route path='contact' element={<Booking/>}/>
    </Routes>
    </>
  )
}

export default App
