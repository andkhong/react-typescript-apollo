import * as React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isStorageValid } from 'utils/isStorageValid';

const AuthRoute = ({component: Component}: any) => (
  <Route render={(props: any) => 
    isStorageValid('bee-token') ? <Redirect to="/" />: <Component {...props} />
  }/>
);

export default AuthRoute;
