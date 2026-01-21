import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Garage from './components/Garage'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Garage />
  </StrictMode>,
)
