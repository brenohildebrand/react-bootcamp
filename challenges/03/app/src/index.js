import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotifyProvider } from './Notify';

ReactDOM.render(
  <NotifyProvider>
    <App />
  </NotifyProvider>,
  document.getElementById('root')
);