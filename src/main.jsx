import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MovieProvider } from './GlobalContext/FlimFetch.jsx'

createRoot(document.getElementById('root')).render(
  <MovieProvider>
    <BrowserRouter>
      <div className='bg-[#222] min-h-screen' >
        <App />
      </div>
    </BrowserRouter>
  </MovieProvider>
)
