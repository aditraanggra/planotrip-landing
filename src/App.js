import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPages'

function App() {
  return (
    <>
      <Router>
        <Route path='/' component={LandingPage}></Route>
      </Router>
    </>
  )
}

export default App
