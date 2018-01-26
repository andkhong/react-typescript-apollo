import * as React from 'react'
import { Route, Redirect } from 'react-router-dom';

interface AuthenticatedRoute {
    props: {
        credentials: boolean;
        component: any;
    }
}

// Write and test the Autheticated Route

const AuthenticatedRoute = (props: any) => (
    <Route render={(props: any) =>  {
            console.log('this is authe props', props)
            return props.credentials ? <props.component {...props} /> : <Redirect to="/" /> 
        }} 
    />
);

export default AuthenticatedRoute;