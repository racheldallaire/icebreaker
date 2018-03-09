import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';

// Load up the application styles
require("./stylesheets/application.scss");
import App from './App'



const render = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('root')
  )
}

render(App)
