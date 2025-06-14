import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Importa a nova biblioteca
import { describe, it, expect, beforeEach } from 'vitest';

import ThemeToggler from './ThemeToggler';
import { ThemeProvider } from '../../context/ThemeContext'; // Importa o nosso Provedor de Tema

// Suite de testes para o ThemeToggler
describe('Componente ThemeToggler', () => {

    // Função para renderizar o componente já com o Provider
    // Isso evita repetição de código em cada teste
    const setup = () => {
        render(
            <ThemeProvider>
                <ThemeToggler />
            </ThemeProvider>
        );
        // Retorna o objeto userEvent para simular ações
        return {
            user: userEvent.setup(),
        };
    };

    // Limpa o body antes de cada teste para garantir um ambiente limpo
    beforeEach(() => {
        // Limpa o atributo do body
        document.body.removeAttribute('data-theme');
        // Limpa o localStorage para evitar vazamento entre testes
        window.localStorage.clear();
    });

    it('deve começar com o tema claro e renderizar o ícone de lua', () => {
        setup();
        // O botão deve ter um label indicando que a próxima ação é mudar para o tema escuro
        const button = screen.getByLabelText(/Mudar para tema escuro/i);
        expect(button).toBeInTheDocument();
    });

    it('deve alternar para o tema escuro ao ser clicado', async () => {
        const { user } = setup();
        const button = screen.getByRole('button');

        // Simula o clique do usuário no botão
        await user.click(button);

        // Verifica o efeito colateral: o atributo no body deve ter sido alterado
        expect(document.body).toHaveAttribute('data-theme', 'dark');

        // Verifica se o ícone e o aria-label foram atualizados
        expect(screen.getByLabelText(/Mudar para tema claro/i)).toBeInTheDocument();
    });

    it('deve alternar de volta para o tema claro após dois cliques', async () => {
        const { user } = setup();
        const button = screen.getByRole('button');

        // Primeiro clique: light -> dark
        await user.click(button);
        expect(document.body).toHaveAttribute('data-theme', 'dark');

        // Segundo clique: dark -> light
        await user.click(button);
        expect(document.body).toHaveAttribute('data-theme', 'light');
    });
});