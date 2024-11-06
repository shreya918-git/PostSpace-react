// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Usercontext from './components/Usercontext1.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Usercontext>
    <App />
  </Usercontext>
);

