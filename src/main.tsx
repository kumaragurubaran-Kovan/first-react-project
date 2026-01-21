import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Garage from './components/Garage'
import ColourChange from './components/ColorChange'
import CountRender from './components/CountRender'
import Form from './components/form'


createRoot(document.getElementById('root')!).render(
  <>
      {/* <Garage /> */}
      {/* <ColourChange /> */}
      {/* <CountRender /> */}
      <Form/>
  </>,
)
