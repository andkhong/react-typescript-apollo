import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AsyncComponent from 'HOCs/Async';
import Breadcrumbs from './Breadcrumbs';
import { addQueryStringToUrl } from 'utils/queryParams';
import { RouterProps } from 'components/interface';

class Main extends React.Component {
  search: string = location.search.slice(1);

  componentWillMount(){
    addQueryStringToUrl(this.search);;
  }

  render(){
    return (
      <div>
        Main Payment
        <Link to={`/payment/confirm?${this.search}`}> Confirm </Link>
      </div>
    )
  }
}

const Payment = () => (
  <section>
    <Breadcrumbs />
    <Switch>
      <Route exact path="/payment" component={(props: RouterProps) => <Main {...props} /> } />
      <Route exact path='/payment/confirm' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Confirm')} />}/>
      <Route exact path='/payment/review' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Review/')} />}/>
      <Route exact path='/payment/wallet' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Wallet/')} />}/>
      <Route component={() => <AsyncComponent load={import('components/NoMatch')} />} />
    </Switch>
  </section>
);

export default Payment;

