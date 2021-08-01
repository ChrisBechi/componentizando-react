import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Component/Menu';
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Menu />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);