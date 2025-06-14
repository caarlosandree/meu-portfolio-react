import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/HabilidadesInterpessoais.css';
import {motion} from "framer-motion";

const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const HabilidadesInterpessoais = () => {
    return (
        <>
            <Helmet>
                <title>Habilidades Interpessoais - Carlos André Sabino</title>
                <meta name="description" content="Minhas habilidades interpessoais e de gestão, como comunicação, liderança e resolução de problemas." />
            </Helmet>
            <section className="container">
                <h2>Habilidades Interpessoais e de Gestão</h2>
                <p>Ao longo da minha trajetória, desenvolvi competências interpessoais e gerenciais essenciais para um ambiente colaborativo, produtivo e orientado a resultados:</p>

                <motion.div
                    className="skills-grid"
                    variants={gridVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="skill-card" variants={cardVariants}>
                        <h4>Comunicação e Relacionamento:</h4>
                        <ul>
                            <li>Comunicação eficaz e escuta ativa</li>
                            <li>Empatia e habilidade de relacionamento</li>
                            <li>Negociação e atendimento ao cliente</li>
                            <li>Colaboração e trabalho em equipe</li>
                        </ul>
                    </motion.div>

                    <motion.div className="skill-card" variants={cardVariants}>
                        <h4>Gestão e Liderança:</h4>
                        <ul>
                            <li>Liderança e visão estratégica</li>
                            <li>Gestão do tempo e organização</li>
                            <li>Condução de reuniões estratégicas</li>
                            <li>Elaboração de planos de ação personalizados para clientes</li>
                            <li>Capacitação contínua da equipe</li>
                        </ul>
                    </motion.div>

                    <motion.div className="skill-card" variants={cardVariants}>
                        <h4>Pensamento Crítico e Solução de Problemas:</h4>
                        <ul>
                            <li>Pensamento analítico e crítico</li>
                            <li>Resolução de problemas com foco em resultados</li>
                            <li>Criatividade e inovação</li>
                            <li>Atenção aos detalhes</li>
                        </ul>
                    </motion.div>

                    <motion.div className="skill-card" variants={cardVariants}>
                        <h4>Adaptabilidade e Desenvolvimento Pessoal:</h4>
                        <ul>
                            <li>Proatividade e flexibilidade</li>
                            <li>Capacidade de aprendizado contínuo</li>
                            <li>Adaptabilidade e aprendizado ágil</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default HabilidadesInterpessoais;