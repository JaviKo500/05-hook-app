import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterApp } from './01-use-state/CounterApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <CounterApp />
  </StrictMode>,
)
