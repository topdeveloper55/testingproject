import React from "react";
import ReactDOM from "react-dom/client";
import 'react-quill/dist/quill.snow.css';

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
