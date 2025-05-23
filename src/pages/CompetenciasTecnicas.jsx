import React from 'react';
import Header from '../components/Header/Header.jsx';

const competencias = [
    { categoria: "Linguagens de Programação", itens: "HTML5, CSS3, JavaScript, Python, C, C++, C#" },
    { categoria: "Frameworks/Bibliotecas Front-end", itens: "React, Angular" }, // Angular foi incluído aqui
    { categoria: "Bibliotecas Python", itens: "NumPy, Pandas, Matplotlib, Seaborn, Requests, Flask, Django, Scikit-learn, TensorFlow, PyTorch"},
    { categoria: "Ferramentas de Build", itens: "Vite e Webpack" },
    { categoria: "Gerenciamento de Rotas", itens: "React Router DOM" },
    { categoria: "Bancos de Dados", itens: "SQL Server, DB2, PostgreSQL" },
    { categoria: "Versionamento e Contêineres", itens: "Git, Docker" },
    { categoria: "Desenvolvimento de APIs", itens: "APIs RESTful" }, // Categoria própria para APIs
    { categoria: "Computação em Nuvem", itens: "AWS, Azure (SaaS, VMs e serviços de nuvem)" },
    { categoria: "Gestão de Projetos e Chamados", itens: "JIRA, ClickUp, Trello (com foco em controle de SLA)" },
    { categoria: "Testes", itens: "Manuais: funcionais, regressão, exploratórios, usabilidade" },
    { categoria: "Metodologias Ágeis", itens: "Scrum, Kanban" },
    { categoria: "Sistemas Operacionais", itens: "Linux" },
    { categoria: "Automação", itens: "Scripts e ferramentas para tarefas repetitivas e integração com APIs" },
    { categoria: "Plataformas de Hospedagem", itens: "GitHub Pages e Vercel" },
];

const CompetenciasTecnicas = () => {
    return (
        <>
            <Header />
            <main className="container" aria-labelledby="titulo-competencias">
                <h2 id="titulo-competencias">Competências Técnicas e Ferramentas</h2>
                <p>Domínio de diversas tecnologias e ferramentas utilizadas no mercado de tecnologia da informação:</p>
                <ul>
                    {competencias.map(({ categoria, itens }) => (
                        <li key={categoria}>
                            <strong>{categoria}:</strong> {itens}
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
};

export default CompetenciasTecnicas;