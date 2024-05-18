import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import './App.css'
import { DisplayPage } from './components/displayPage/displayPage'
import { Homepage } from './components/homepage/homepage'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='display' element={<DisplayPage/>}></Route>
      <Route path='/contact' element={<Cont}
    </Routes>
  
    </>
  )
}

export default App
