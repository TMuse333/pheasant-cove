import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import './App.css'
import Booking from './components/contact/contact'
import { DisplayPage } from './components/displayPage/displayPage'
import { Homepage } from './components/homepage/homepage'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='display' element={<DisplayPage/>}></Route>
      <Route path='/contact' element={<Booking/>}/>
    </Routes>
  
    </>
  )
}

export default App
