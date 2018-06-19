import * as React from 'react';
import { Route } from 'react-router-dom';
import { IPath } from '../../App.router';

const renderRoute = (route: IPath) => (props: any) => (
  <route.component { ...props } routes={ route.routes }/>
);

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route: IPath) => (
  <Route
    path={ route.path }
    exact={ route.exact }
    render={ renderRoute( route ) }
    routes={ route.routes }
  />
);

export default RouteWithSubRoutes;
