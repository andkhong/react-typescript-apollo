import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import AsyncComponent from 'HOCs/Async';

import { RouterProps } from 'components/interface';

const Accounts = () => (
  <Switch>
    <Redirect exact path="/accounts" from="/accounts" to="/accounts/profile" />
    <Route exact path="/accounts/profile" component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Profile')} />}/>
    <Route exact path="/accounts/trips" component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Trips')} />}/>
  </Switch>
);

export default Accounts;

