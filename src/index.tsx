import React from 'react';
import ReactDOM, {Root} from 'react-dom/client';
import './index.css';

import App from "./App";

let root: Root;
// @ts-ignore
root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

