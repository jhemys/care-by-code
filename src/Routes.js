import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Counter from './pages/CounterPage'
import HomePage from './pages/Home'


const Routes = () => {
  return (
    <Switch>
      <Route path={['/', '/home','/home/:redirect']} exact render={({match}) => <HomePage match={match} />} />
      <Route path="/counter" exact component={Counter} />
    </Switch>
  )
}

export default Routes;