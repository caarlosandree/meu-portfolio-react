import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { competenciasData } from '../data/competencias.jsx';
import '../styles/CompetenciasTecnicas.css';

const listVariants = {
    visible: { transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const CompetenciasTecnicas = () => {
    const todasAsHabilidades = competenciasData.flatMap(categoria => categoria.itens);

    return (
        <>
            <Helmet>
                <title>Competências Técnicas - Carlos André Sabino</title>
                <meta name="description" content="Lista de minhas competências técnicas, incluindo linguagens, frameworks, cloud, bancos de dados e mais." />
            </Helmet>
            <section className="container" aria-labelledby="titulo-competencias">
                <h2 id="titulo-competencias">Competências Técnicas e Ferramentas</h2>
                <p>Domínio de diversas tecnologias e ferramentas utilizadas no mercado de tecnologia da informação:</p>
                <ul>
                    {competenciasData.map(({ categoria, itens }) => (
                        <li key={categoria}>
                            <strong>{categoria}:</strong> {itens.map(item => item.nome).join(', ')}
                        </li>
                    ))}
                </ul>

                <hr className="section-divider" />

                <motion.div
                    className="skills-icon-grid"
                    initial="hidden"
                    animate="visible"
                    variants={listVariants}
                >
                    {todasAsHabilidades.map((habilidade) => (
                        <motion.div key={habilidade.nome} className="skill-icon-item" variants={itemVariants}>
                            {/* Adicionada a classe específica da habilidade */}
                            <div className={`icon-container ${habilidade.className}`}>
                                {habilidade.icone}
                            </div>
                            <p>{habilidade.nome}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    );
};

export default CompetenciasTecnicas;