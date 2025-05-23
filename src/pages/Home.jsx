import React from 'react';
import { Helmet } from 'react-helmet-async'; // Importe Helmet
import Header from '../components/Header/Header.jsx';

const Home = () => {
    return (
        <>
            {/* Adiciona as meta tags para esta página */}
            <Helmet>
                <title>Carlos André Sabino - Início</title>
                <meta property="og:description" content="Meu portfólio profissional de desenvolvimento e TI." />
            </Helmet>

            <Header />
            <section className="container">
                <h2>Resumo Profissional</h2>
                <p>Profissional com mais de 10 anos de experiência nas áreas de Suporte Técnico, Operações e Análise de Sistemas, atuando em empresas de tecnologia e telecomunicações. Especialista em soluções VoIP, ambientes Cloud e plataformas SaaS, com sólida vivência em atendimento estratégico ao cliente, gestão de incidentes e pós-venda técnico. Possui forte habilidade em comunicação, liderança, resolução de problemas e desenvolvimento de equipes. Reconhecido pela capacidade de adaptação, aprendizado contínuo e proatividade em buscar inovações para otimizar processos e agregar valor.</p>
            </section>
        </>
    );
};

export default Home;