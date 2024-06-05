

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Display from './pages/display'
import  Homepage from './pages/homepage'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='display' element={<Display/>}/>
    </Routes>
    </>
  )
}

export default App
