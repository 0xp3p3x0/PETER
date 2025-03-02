import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App.jsx'
import './index.css'

 // Import your main component

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app
root.render(
  <React.StrictMode>
    <App /> {/* Main app component */}
  </React.StrictMode>
);