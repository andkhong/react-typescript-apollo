import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponent from 'HOCs/Async';
import { RouterProps } from 'components/interface';

const Bookings = () => (
  <Switch>
    <Route exact path="/bookings" component={(props: RouterProps) => <Main {...props} /> } />
    <Route exact path='/bookings/confirm' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Confirm')} />}/>
    <Route exact path='/bookings/review' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Review/')} />}/>
    <Route exact path='/bookings/wallet' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Wallet/')} />}/>
    <Route component={() => <AsyncComponent load={import('components/NoMatch')} />} />
  </Switch>
);

class Main extends React.Component<{}, {}> {
  componentWillMount(){
    // Handle Query Params
  }

  render(){
    return (
      <div>
        Main
      </div>
    )
  }
}

export default Bookings;