import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store/store.js';

import App from './App.jsx';
import ThemeConfig from './theme/ThemeConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeConfig>
          <App />
        </ThemeConfig>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
