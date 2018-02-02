import * as React from 'react';
import { Link, Switch, Redirect, Route } from 'react-router-dom';

import AsyncComponent from 'HOCs/Async';

const Terms = () => (
  <div>
    <Link to="/legal/terms"> Terms </Link>
    <Link to="/legal/privacy"> Privacy </Link>
    <Switch>
      <Redirect exact from='/legal' to='/legal/terms' />
      <Route exact path='/legal/terms' component={() => <AsyncComponent load={import(/* webpackChunkName: "Terms"*/ './Terms')} />} />
      <Route exact path='/legal/privacy' component={() => <AsyncComponent load={import(/* webpackChunkName: "Privacy"*/ './Privacy')} />} />
      <Route component={() => <AsyncComponent load={import('components/NoMatch')} />} />
    </Switch>
  </div>
);

export default Terms;



