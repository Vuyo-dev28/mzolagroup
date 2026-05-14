import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppSolar from './AppSolar.jsx'
import ComingSoon from './components/ComingSoon.jsx'

// 🔥 Toggle here
const isLive = true

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isLive ? <AppSolar /> : <ComingSoon />}
  </StrictMode>
)