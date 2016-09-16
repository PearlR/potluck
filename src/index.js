import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './App'
import Login from './components/Login/Login'
import LoginSuccess from './components/Login-Success/Login-Success'
import CreateEvent from './components/Create-Event/Create-Event'
import DetailsEvent from './components/Details-Event/Details-Event'
import InviteEvent from './components/Invite-Event/Invite-Event'
import MenuEvent from './components/Menu-Event/Menu-Event'

import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
        <Route path='login' component={Login} />
        <Route path='success' component={LoginSuccess} />
        <Route path='create-event' component={CreateEvent}>
          <Route path='details' component={DetailsEvent} />
          <Route path='invites' component={InviteEvent} />
          <Route path='menu' component={MenuEvent} />
        </Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
