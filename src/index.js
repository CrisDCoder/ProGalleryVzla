import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';

//styles
import './styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
