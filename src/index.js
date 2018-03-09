import React from 'react'
import ReactDOM from 'react-dom'

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
