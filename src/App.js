import React from 'react'

import Welcome from './components/Welcome/Welcome'

import './App.css'

const App = props => {
  return <div>
    <Welcome />
    {props.children}
  </div>
}

export default App
