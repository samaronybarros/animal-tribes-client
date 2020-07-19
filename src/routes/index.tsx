import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'src/pages/Home'
import { About } from 'src/pages/About'
import { Login } from 'src/pages/Login'
import { Signup } from 'src/pages/Signup'
import { Tribe } from 'src/pages/Tribe'
import { Battle } from 'src/pages/Battle'
import { Profile } from 'src/pages/Profile'
import { Error404 } from 'src/pages/Error/404'

import { HOME, SIGNUP, TRIBE, BATTLE, PROFILE, LOGIN, ABOUT } from './pages'

export default function Routes() {
  return (
    <Switch>
      <Route path={HOME} exact component={Home} />
      <Route path={ABOUT} exact component={About} />
      <Route path={LOGIN} exact component={Login} />
      <Route path={SIGNUP} exact component={Signup} />
      <Route path={TRIBE} exact component={Tribe} />
      <Route path={PROFILE} exact component={Profile} />
      <Route path={`${BATTLE}/:warriorId`} exact component={Battle} />
      <Route component={Error404} />
    </Switch>
  )
}
