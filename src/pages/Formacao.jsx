import React from 'react';
import { Helmet } from 'react-helmet-async';

const Formacao = () => {
    return (
        <>
            <Helmet>
                <title>Formação - Carlos André Sabino</title>
                <meta name="description" content="Detalhes sobre minha formação acadêmica em Redes de Computadores e Ciências da Computação." />
            </Helmet>
            <section className="container">
                <h2>Formação Acadêmica</h2>
                <ul className="education-list">
                    <li>
                        <h3>Bacharelado em Redes de Computadores</h3>
                        <span>Centro Universitário Estácio, São José | jul 2011 – dez 2013</span>
                    </li>
                    <li>
                        <h3>Bacharelado em Ciências da Computação</h3>
                        <span>Centro Universitário Estácio, São José | jan 2025 – atualmente</span>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Formacao;