
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/index';
import Root from './Root';

const render = (Component: any) => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
        <Component />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render(Root);
registerServiceWorker();
