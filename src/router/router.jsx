import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from '../pages/signup/signup'
import Signin from '../pages/signin/signin'
import Dashboard from '../pages/dashboard/dashboard'

function ReactRouter() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default ReactRouter