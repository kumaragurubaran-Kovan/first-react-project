import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App, Name} from './App.tsx'
import Body from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Body />
    <App />
    <Name />

  </StrictMode>,
)
