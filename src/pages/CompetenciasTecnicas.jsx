import React from 'react';
import Header from '../components/Header/Header.jsx';

const CompetenciasTecnicas = () => {
    return (
        <>
            <Header />
            <section className="container">
                <h2>Competências Técnicas e Ferramentas</h2>
                <p>Domínio de diversas tecnologias e ferramentas utilizadas no mercado de tecnologia da informação:</p>
                <ul>
                    <li><strong>Bancos de Dados:</strong> SQL Server, DB2, PostgreSQL</li>
                    <li><strong>Linguagens:</strong> HTML5, CSS3, JavaScript, Python, C, C++, C#</li>
                    <li><strong>Versionamento e Contêineres:</strong> Git, Docker, APIs RESTful</li>
                    <li><strong>Computação em Nuvem:</strong> AWS, Azure (SaaS, VMs e serviços de nuvem)</li>
                    <li><strong>Gestão de Chamados:</strong> JIRA, ClickUp, Trello (com foco em controle de SLA)</li>
                    <li><strong>Testes:</strong> Testes manuais: funcionais, regressão, exploratórios, usabilidade</li>
                    <li><strong>Metodologias Ágeis:</strong> Scrum, Kanban</li>
                    <li><strong>Sistemas Operacionais:</strong> Linux</li>
                    <li><strong>Automação:</strong> Scripts e ferramentas para tarefas repetitivas e integração com APIs.</li>
                    <li><strong>Desenvolvimento:</strong> Desenvolvimento de APIs.</li>
                </ul>
            </section>
        </>
    );
};

export default CompetenciasTecnicas;