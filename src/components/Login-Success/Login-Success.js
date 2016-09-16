import React from 'react'

import { Link } from 'react-router'

const LoginSuccess = props => {
  return <div>
    <h1>You have no current potlucks.</h1>
    <Link to='create-event'>Create New Potluck</Link>
  </div>
}

export default LoginSuccess
