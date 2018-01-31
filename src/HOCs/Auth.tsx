import * as React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isStorageValid } from 'utils/isStorageValid';

const AuthenticatedRoute = ({component: Component, ...rest}: any) => (
  <Route {...rest} render={(props: any) => 
    isStorageValid('blarg') ? <Component {...props} /> : <Redirect to="/" />
  }/>
);

export default AuthenticatedRoute;
