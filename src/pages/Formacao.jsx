import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { formacaoData } from '../data/formacao.js';
import '../styles/Formacao.css';

const Formacao = () => {
    return (
        <>
            <Helmet>
                <title>Formação - Carlos André Sabino</title>
                <meta name="description" content="Minha formação acadêmica, incluindo Redes de Computadores e o curso atual de Ciências da Computação." />
            </Helmet>
            <section className="container">
                <h2>Formação Acadêmica</h2>
                <motion.div
                    className="education-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {formacaoData.map((item) => (
                        <div className="education-block" key={item.id}>
                            <h3>{item.curso}</h3>
                            <p className="education-institution">{item.instituicao}</p>
                            <span className="education-period">{item.periodo}</span>
                            <p className="education-description">{item.descricao}</p> {/* DESCRIÇÃO ADICIONADA AQUI */}
                        </div>
                    ))}
                </motion.div>
            </section>
        </>
    );
};

export default Formacao;