import * as React from 'react';
import {NavLink} from 'react-router-dom';

import routes from './App.router';
import ReduxComponent from './redux/Redux.component';
import RouteWithSubRoutes from './shared/RoutesWithSubRoutes/RoutesWithSubRoutes.component';

interface IProps {
  router: any;
  classes: any;
  theme: any;
  getPrimaries: () => void;
  getFilters: () => void;
}

const initialState = {
  cartOpen: false,
  counter: 0,
  driftOpen: false
};
type State = typeof initialState;

class AppComponent extends ReduxComponent<IProps, State> {
  public state: State = initialState;

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        App Component <br />
        <br />
        <NavLink to="/">Home</NavLink>
        &nbsp;
        <NavLink to="/about">About</NavLink>
        <br />

        {routes.map((route, index) => (
          <RouteWithSubRoutes
            key={index}
            {...route}
          />
        ))}
      </div>
    );
  }
}

export {AppComponent};
export default AppComponent;
