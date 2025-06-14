import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const contentVariants = {
    hidden: {
        opacity: 0,
        y: 20, // Começa 20px para baixo
    },
    visible: {
        opacity: 1,
        y: 0, // Move para a posição original
        transition: {
            duration: 0.6, // Duração da animação
            ease: 'easeOut',
        },
    },
};

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Carlos André Sabino - Início</title>
                <meta name="description" content="Meu portfólio profissional de desenvolvimento e TI, com mais de 10 anos de experiência em Suporte, Operações e Análise de Sistemas." />
            </Helmet>
            <motion.section
                className="container"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
            >
                <h2>Resumo Profissional</h2>
                <p>Profissional com mais de 10 anos de experiência nas áreas de Suporte Técnico, Operações e Análise de Sistemas, atuando em empresas de tecnologia e telecomunicações. Especialista em soluções VoIP, ambientes Cloud e plataformas SaaS, com sólida vivência em atendimento estratégico ao cliente, gestão de incidentes e pós-venda técnico. Possui forte habilidade em comunicação, liderança, resolução de problemas e desenvolvimento de equipes. Reconhecido pela capacidade de adaptação, aprendizado contínuo e proatividade em buscar inovações para otimizar processos e agregar valor.</p>
            </motion.section>
        </>
    );
};

export default Home;