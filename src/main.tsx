import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from 'react-redux'; // Import Redux Provider
import App from './App';
import './index.css'; // Main app component
import { store } from './store/store'; // Your Redux store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
