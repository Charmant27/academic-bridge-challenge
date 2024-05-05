import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/Context';
import './i18n.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Suspense fallback='loading...'>
        <App />
      </Suspense>
    </AppProvider>
  </React.StrictMode>
);
