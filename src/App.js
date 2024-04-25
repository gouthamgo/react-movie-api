import React from 'react'
import Movie from './components/Movie'
import Trend from './components/Trend'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route exact path="/" element={<Movie />} />
            <Route exact path='/trend' element={<Trend />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App