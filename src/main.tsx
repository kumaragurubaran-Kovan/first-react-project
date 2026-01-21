import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Garage from './components/Garage'
import ColourChange from './components/ColorChange'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ColourChange />
  </StrictMode>,
)
