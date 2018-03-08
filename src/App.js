import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () =>
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
    </div>
  </Router>

export default App
