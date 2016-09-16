import React from 'react'

import { Link } from 'react-router'

const CreateEvent = props => {
  return <div>
    <h1>Let's create a potluck!</h1>
    <p>Name goes here...</p>
    <Link to='/details'>Let's go!</Link>
    {props.children}
  </div>
}

export default CreateEvent
