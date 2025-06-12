import React from 'react';
import { Helmet } from 'react-helmet-async';
import { projetosData } from "../data/projetos.js";

const Projetos = () => {
    return (
        <>
            <Helmet>
                <title>Projetos - Carlos André Sabino</title>
                <meta name="description" content="Veja alguns dos meus projetos pessoais e open-source, demonstrando minhas habilidades práticas." />
            </Helmet>
            <section className="container">
                <h2>Meus Projetos</h2>
                <p>Aqui estão alguns dos projetos pessoais e open-source que desenvolvi, demonstrando minhas habilidades em diversas tecnologias.</p>

                <div className="projetos-grid">
                    {projetosData.map((projeto, index) => (
                        <div key={index} className="projeto-card">
                            <h3>{projeto.nome}</h3>
                            <p>{projeto.descricao}</p>
                            <p><b>Tecnologias:</b> {projeto.tecnologias.join(', ')}</p>
                            <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer">
                                Ver no GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projetos;