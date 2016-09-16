import React from 'react'

import { Link } from 'react-router'

const DetailsEvent = props => {
  return <div>
    <h1>Important Details</h1>
    <p>Date</p>
    <p>Time</p>
    <p>Location</p>
    <p>Description</p>
    <p>Guests can invite friends</p>
    <Link to='/invites'>Next</Link>
  </div>
}

export default DetailsEvent
