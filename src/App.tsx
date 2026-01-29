import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Form from './components/form'
import ViewResponse from './components/form-response'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/formresponse" element={<ViewResponse />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
