// src/utils/test-utils.jsx
import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../context/ThemeContext';
import { HashRouter } from 'react-router-dom';

// Um wrapper que inclui todos os providers que nossa aplicação usa
const AllTheProviders = ({ children }) => {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <HashRouter> {/* Adicionado para componentes que usam <Link> */}
                    {children}
                </HashRouter>
            </ThemeProvider>
        </HelmetProvider>
    );
};

// Uma função de render customizada que usa nosso wrapper
const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options });

// Re-exporta tudo da testing-library
export * from '@testing-library/react';

// Sobrescreve a função render padrão com a nossa customizada
export { customRender as render };