import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import DashboardPage from '../../pages/dashboard/page';
import ListingsPage from '../../pages/listings/page';
import ListingPage from '../../pages/listing/page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage} />
    <Route path="home" component={DashboardPage} />
    <Route path="listings" component={ListingsPage} />
    <Route path="/listings/:txId" component={ListingPage}/>
  </Route>
);
