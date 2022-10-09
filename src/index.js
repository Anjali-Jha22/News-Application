import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <marquee>00110010   10110101 </marquee>
    <div className='head'>
    <h1>
      AI News Application
    </h1>
    </div>
   
    <App />
    
  </React.StrictMode>
);

