import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store.js';

import App from './App.jsx';
import ThemeConfig from './theme/ThemeConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </Provider>
  </React.StrictMode>,
);
