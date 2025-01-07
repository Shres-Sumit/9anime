
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Opening from './pages/Opening'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Opening />} />
        <Route path='/home' element={<Home />} />

      </Routes>
    </>
  )
}

export default App
