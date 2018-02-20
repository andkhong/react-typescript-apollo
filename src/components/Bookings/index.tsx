import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponent from 'HOCs/Async';
import { addQueryStringToUrl } from 'utils/queryParams';
import { RouterProps } from 'components/interface';

class Main extends React.Component<any, {}> {
  componentWillMount(){
    const search = location.search.slice(1);
    addQueryStringToUrl(search);;
  }

  render(){
    return (
      <div>
        Main Bookings
      </div>
    )
  }
}

const Bookings = () => (
  <Switch>
    <Route path="/bookings" component={(props: RouterProps) => <Main {...props} /> } />
    <Route path='/bookings/confirm' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Confirm')} />}/>
    <Route path='/bookings/review' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Review/')} />}/>
    <Route path='/bookings/wallet' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Wallet/')} />}/>
    <Route component={() => <AsyncComponent load={import('components/NoMatch')} />} />
  </Switch>
);

export default Bookings;