import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import ThemeConfig from './theme/ThemeConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode>,
);
