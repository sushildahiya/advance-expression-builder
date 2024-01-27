import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustomExpressionContext from './context/expressionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomExpressionContext>
    <App />
    </CustomExpressionContext>
  </React.StrictMode>
);

