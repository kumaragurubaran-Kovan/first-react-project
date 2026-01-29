import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'
import Garage from './components/Garage'
import ColourChange from './components/ColorChange'
import CountRender from './components/CountRender'
import Form from './components/form'
import Home from './home'
import {Map, For} from './components/Map'
import Counter from "./components/CountEffect"

createRoot(document.getElementById('root')!).render(
  <>
      {/* <Garage /> */}
      {/* <ColourChange /> */}
      {/* <CountRender /> */}
      {/* <Form/> */}
      {/* <Map />
      <For /> */}
      {/* <Counter/> */}
      {/* <Home /> */}
      <App/>

  </>,
)
