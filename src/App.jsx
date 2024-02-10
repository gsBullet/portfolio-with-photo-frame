import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PhotoFrame from './components/PhotoFrame'
import FrontentLayouts from './FrontentLayouts'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontentLayouts />}>
        <Route index element={<Home />} />
        <Route path="photo-frame" element={<PhotoFrame />} />
       
      </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
