import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bgcontextprovider from './components/Bgcontextprovider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bgcontextprovider>
      <App/>
    </Bgcontextprovider>
  </StrictMode>,
)
