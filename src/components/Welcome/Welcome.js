import React from 'react'

import { Link } from 'react-router'

const Welcome = props => {
  return <div>
    <h1>
      Welcome to <span className="logo">Potluck Planner</span>
    </h1>
    <button>Sign Up</button>
    <Link to='login'>Log In</Link>
  </div>
}

export default Welcome
