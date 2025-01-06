
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Opening from './pages/Opening'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Opening />} />
      </Routes>
    </>
  )
}

export default App
