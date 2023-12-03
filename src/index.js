import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AnonAadhaarProvider } from "anon-aadhaar-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const app_id = "1309218895344287769287806253054282764963406675968";

root.render(
  <AnonAadhaarProvider _appId={app_id}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AnonAadhaarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
