// src/components/Footer/Footer.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

// O 'describe' agrupa testes relacionados para um mesmo componente
describe('Componente Footer', () => {

    // O 'it' (ou 'test') define um caso de teste específico
    it('deve renderizar o email de contato corretamente', () => {
        // 1. Renderiza o componente
        render(<Footer />);

        // 2. Procura por um elemento na tela
        // Neste caso, um link que contém o texto do email
        const emailLink = screen.getByText(/caarlosandree@gmail.com/i);

        // 3. Afirma o que esperamos que aconteça
        // Nós esperamos que o elemento do link esteja no documento (na tela)
        expect(emailLink).toBeInTheDocument();
    });

    it('deve renderizar o link para o perfil do GitHub', () => {
        render(<Footer />);

        // Procura por um link usando seu 'aria-label' (ótima prática de acessibilidade)
        const githubLink = screen.getByLabelText(/Acessar meu perfil no GitHub/i);

        // Esperamos que o link esteja na tela e que ele tenha o atributo 'href' correto
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/caarlosandree');
    });

});