import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import {HelmetProvider} from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);


