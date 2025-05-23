import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider> {/* Envolva o App com HelmetProvider */}
            <App />
        </HelmetProvider>
    </React.StrictMode>,
);