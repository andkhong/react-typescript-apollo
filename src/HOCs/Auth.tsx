import * as React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { isStorageValid } from 'utils/isStorageValid';

const AuthenticatedRoute = ({component: Component}: any) => (
  <Route render={(props: any) => 
    isStorageValid('bee-token') ? <Component {...props} /> : <Redirect to={`/login?${props.location.state}`} />
  }/>
);

export default AuthenticatedRoute;
