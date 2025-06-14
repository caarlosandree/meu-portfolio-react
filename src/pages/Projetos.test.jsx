// src/pages/Projetos.test.jsx
import React from 'react';
// 1. Importe o 'render' do nosso novo arquivo de utilitários
import { render, screen } from '../utils/test-utils';
import { describe, it, expect, vi } from 'vitest';

import Projetos from './Projetos.jsx';

const mockProjetosData = [
    {
        nome: "Projeto de Teste 1",
        descricao: "Descrição do projeto de teste 1.",
        tecnologias: ["React", "Vitest"],
        linkGithub: "https://github.com/link1",
    },
    {
        nome: "Projeto de Teste 2",
        descricao: "Descrição do projeto de teste 2.",
        tecnologias: ["Node.js"],
        linkGithub: "https://github.com/link2",
    },
];

vi.mock('../data/projetos.js', () => ({
    get projetosData() {
        return mockProjetosData;
    }
}));

describe('Página de Projetos', () => {

    it('deve renderizar um card para cada projeto fornecido nos dados', async () => {
        // 2. A chamada para 'render' agora usa nossa função customizada,
        // que já inclui todos os providers necessários.
        render(<Projetos />);

        const titulosDosProjetos = await screen.findAllByRole('heading', { level: 3 });
        expect(titulosDosProjetos).toHaveLength(mockProjetosData.length);
        expect(screen.getByText("Projeto de Teste 1")).toBeInTheDocument();
        expect(screen.getByText("Projeto de Teste 2")).toBeInTheDocument();
    });

    it('deve renderizar as tecnologias para cada projeto', () => {
        render(<Projetos />);
        const tecnologiasProjeto1 = screen.getByText(/React, Vitest/i);
        const tecnologiasProjeto2 = screen.getByText(/Node.js/i);
        expect(tecnologiasProjeto1).toBeInTheDocument();
        expect(tecnologiasProjeto2).toBeInTheDocument();
    });
});