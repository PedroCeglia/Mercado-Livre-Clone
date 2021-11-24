import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import React Redux
import {Provider} from 'react-redux'
// Import Store
import store from'./Redux/Store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
