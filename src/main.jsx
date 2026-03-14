import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ScrollTrigger } from "gsap/ScrollTrigger"

window.addEventListener("load", () => {
ScrollTrigger.refresh()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
