import * as React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isStorageValid } from 'utils/isStorageValid';
import { RouterProps } from 'components/interface';

const AuthRoute = ({ component: Component}: any) => (
  <Route render={(props: RouterProps) => 
    isStorageValid('bee-token') ? <Redirect to="/" />: <Component {...props} />
  }/>
);

export default AuthRoute;
