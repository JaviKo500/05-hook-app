import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <CounterWithCustomHook />
  </StrictMode>,
)
