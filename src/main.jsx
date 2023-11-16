import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter basename="/dessertShop">
      <App />
      </BrowserRouter>
  </React.StrictMode>
);


