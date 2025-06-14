import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projetosData } from '../data/projetos.js';

// Variante para o container do grid (controla o efeito stagger)
const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // A mágica acontece aqui: um pequeno atraso entre cada filho
        }
    }
};

// Variante para cada card individual
const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

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

                {/* 3. Transforme o grid em um motion.div e aplique as variantes */}
                <motion.div
                    className="projetos-grid"
                    variants={gridVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projetosData.map((projeto, index) => (
                        // 4. Transforme cada card em um motion.div e aplique as variantes
                        <motion.div key={index} className="projeto-card" variants={cardVariants}>
                            <h3>{projeto.nome}</h3>
                            <p>{projeto.descricao}</p>
                            <p><b>Tecnologias:</b> {projeto.tecnologias.join(', ')}</p>
                            <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer">
                                Ver no GitHub
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    );
};

export default Projetos;