import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GuruhContext from './store/Guruhlar/GuruhContext';
import { ContextProvider } from './store/Oqtuvchilar/OqtuvchiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <GuruhContext>
        <App />
      </GuruhContext>
    </ContextProvider>
  </BrowserRouter>
);


