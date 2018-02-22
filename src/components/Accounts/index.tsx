import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponent from 'HOCs/Async';

import { RouterProps } from 'components/interface';

const Accounts = () => (
    <Switch>
        <Route path="/" component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Trips')} />}/>  
    </Switch>
);

export default Accounts;

