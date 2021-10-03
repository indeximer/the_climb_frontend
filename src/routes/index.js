import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { HomePage } from '@/pages/Home'

export default function AppRouter() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
