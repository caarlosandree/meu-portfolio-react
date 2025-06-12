// src/pages/Formacao.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Formacao.css';

const Formacao = () => {
    return (
        <>
            <Helmet>
                <title>Formação - Carlos André Sabino</title>
                <meta name="description" content="Minha formação acadêmica, apresentada em uma linha do tempo, incluindo Redes de Computadores e o curso atual de Ciências da Computação." />
            </Helmet>
            <section className="container">
                <h2>Formação Acadêmica</h2>
                <div className="timeline">
                    {/* Item da Timeline 1 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Bacharelado em Ciências da Computação</h3>
                            <span className="timeline-date">jan 2025 – atualmente</span>
                            <p>Centro Universitário Estácio, São José</p>
                        </div>
                    </div>
                    {/* Item da Timeline 2 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Técnologo em Redes de Computadores</h3>
                            <span className="timeline-date">jul 2011 – dez 2013</span>
                            <p>Centro Universitário Estácio, São José</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Formacao;