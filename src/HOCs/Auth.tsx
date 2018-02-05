import * as React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { isStorageValid } from 'utils/isStorageValid';

const Authenticated = ({component: Component}: any) => (
  <Route render={(props: any) => 
    isStorageValid('bee-token') ? <Redirect to="/" />: <Component {...props} />
  }/>
);

export default Authenticated;
