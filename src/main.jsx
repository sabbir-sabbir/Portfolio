import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProProvider } from './components/Context/Context'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProProvider>
    <App />
    </ProProvider>
  </StrictMode>,
)
