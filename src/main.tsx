import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook.tsx'
// import { SimpleForm } from './02-use-effect/SimpleForm';
import { SimpleFormWhitCustomHook } from './02-use-effect/SimpleFormWhitCustomHook';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm/> */}
    <SimpleFormWhitCustomHook/>
  </StrictMode>,
)
