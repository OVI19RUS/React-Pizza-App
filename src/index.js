import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
