import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalState } from './context/ModalContext';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
);

