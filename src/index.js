import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

// Optional performance logging
reportWebVitals();
