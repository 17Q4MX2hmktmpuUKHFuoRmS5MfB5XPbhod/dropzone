import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import DashboardPage from '../../pages/dashboard/page';
import ListingsPage from '../../pages/listings/page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage} />
    <Route path="dashboard" component={DashboardPage} />
    <Route path="listings" component={ListingsPage} />
  </Route>
);
