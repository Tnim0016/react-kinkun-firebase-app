import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import home from './pages/home.jsx'
import showAllkinkun from './pages/showAllkinkun.jsx'
import AddKinkun from './pages/AddKinkun.jsx'
import EditKinkun from './pages/EditKinkun.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<home />} />
        <Route path='/showAllkinkun' element={<showAllkinkun />} />
        <Route path='/AddKinkun' element={<AddKinkun />} />
        <Route path='/EditKinkun/:id' element={<EditKinkun />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
