import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/assets/scss/App.scss';
import {BrowserRouter} from "react-router-dom";
import Modal from 'react-modal';

// Set the App element
Modal.setAppElement('#root'); 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
)
