import * as React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isStorageValid } from 'utils/isStorageValid';
import { RouterProps } from 'components/interface';

const PrivateRoute = ({component: Component}: any) => (
  <Route render={(props: RouterProps) => 
    isStorageValid('bee-token') ? <Component {...props} /> : <Redirect to={`/login?${props.location.state}`} />
  }/>
);

export default PrivateRoute;
