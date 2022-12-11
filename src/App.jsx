import { React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio/:id" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
