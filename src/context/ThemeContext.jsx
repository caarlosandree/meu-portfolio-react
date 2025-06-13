import React, { createContext, useState, useEffect, useContext } from 'react';

// Contexto
const ThemeContext = createContext();

// Provedor do Contexto
export const ThemeProvider = ({ children }) => {
    // Lógica para inicializar o tema:
    // 1. Tenta pegar do localStorage
    // 2. Se não tiver, verifica a preferência do sistema operacional
    // 3. Se não, usa 'light' como padrão
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Efeito para aplicar o tema no body e salvar no localStorage
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook customizado para facilitar o uso do contexto
export const useTheme = () => {
    return useContext(ThemeContext);
};