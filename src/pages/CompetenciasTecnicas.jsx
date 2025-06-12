import React from 'react';
import { Helmet } from 'react-helmet-async';
import { competenciasData } from "../data/competencias.js";

const CompetenciasTecnicas = () => {
    return (
        <>
            <Helmet>
                <title>Competências Técnicas - Carlos André Sabino</title>
                <meta name="description" content="Lista de minhas competências técnicas, incluindo linguagens, frameworks, cloud, bancos de dados e mais." />
            </Helmet>
            <div className="container" aria-labelledby="titulo-competencias">
                <h2 id="titulo-competencias">Competências Técnicas e Ferramentas</h2>
                <p>Domínio de diversas tecnologias e ferramentas utilizadas no mercado de tecnologia da informação:</p>
                <ul>
                    {competenciasData.map(({ categoria, itens }) => (
                        <li key={categoria}>
                            <strong>{categoria}:</strong> {itens}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CompetenciasTecnicas;