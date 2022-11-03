import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { render } from 'react-dom';
import './fonts/Digital.ttf';
import './fonts/Neuropolitical.ttf';
import styles from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
