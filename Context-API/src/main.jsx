import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Context from './context/Context.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
)
