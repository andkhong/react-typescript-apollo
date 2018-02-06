import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

class Bookings extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/bookings/wallet' />
          <Route path='/bookings/review' />
          <Route path='/bookings/confirm' />
        </Switch>
      </div>
    )
  }
}

export default Bookings;