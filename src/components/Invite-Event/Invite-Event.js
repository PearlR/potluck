import React from 'react'

import { Link } from 'react-router'

const InviteEvent = props => {
  return <div>
    <h1>Who's invited?</h1>
    <p>Name</p>
    <p>Email</p>
    <Link to='menu'>Next</Link>
  </div>
}

export default InviteEvent
