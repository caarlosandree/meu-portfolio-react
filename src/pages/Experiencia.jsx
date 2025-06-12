import React from 'react';
import { Helmet } from 'react-helmet-async';

const Experiencia = () => {
    return (
        <>
            <Helmet>
                <title>Experiência Profissional - Carlos André Sabino</title>
                <meta name="description" content="Minha trajetória profissional, incluindo meu cargo atual como Analista de Operações e Suporte na Intelbras e experiências anteriores." />
            </Helmet>
            <section className="container">
                <h2>Experiência Profissional</h2>

                <h3>Analista de Operações e Suporte PL<br /><span>Intelbras – São José | 2020 – Atualmente</span></h3>
                <ul>
                    {/* ... (conteúdo da experiência inalterado) ... */}
                </ul>

                {/* ... (resto do conteúdo inalterado) ... */}
            </section>
        </>
    );
};

export default Experiencia;