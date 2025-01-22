import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PiwikPro from "@piwikpro/react-piwik-pro";

// Initialiseer Piwik Pro
PiwikPro.initialize(
  "42c0e959-7811-4197-8f3a-5fc6e8113181", // Je unieke site-ID
  "https://xinudesi-gn.piwik.pro" // Je Piwik Pro URL
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
