import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './components/App/Layout/Layout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
