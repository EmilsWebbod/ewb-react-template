import * as React from 'react';

import AppComponent from './App.component';
import Head from './Head';
import DevTools from './redux/DevTools';

class Root extends React.Component<object, object> {
  public render() {
    const Component = AppComponent.init();
    return (
      <div>
        <Head />
        <Component />
        <DevTools />
      </div>
    );
  }
}

export default Root;
