// src/pages/HabilidadesInterpessoais.jsx
import React from 'react';
import Header from '../components/Header/Header.jsx';

const HabilidadesInterpessoais = () => {
    return (
        <>
            <Header />
            <section className="container">
                <h2>Habilidades Interpessoais e de Gestão</h2>
                <p>Ao longo da minha trajetória, desenvolvi competências interpessoais e gerenciais essenciais para um ambiente colaborativo, produtivo e orientado a resultados:</p>

                <ul>
                    <li>
                        <h4>Comunicação e Relacionamento:</h4>
                        <ul>
                            <li>Comunicação eficaz e escuta ativa</li>
                            <li>Empatia e habilidade de relacionamento</li>
                            <li>Negociação e atendimento ao cliente</li>
                            <li>Colaboração e trabalho em equipe</li>
                        </ul>
                    </li>

                    <li>
                        <h4>Gestão e Liderança:</h4>
                        <ul>
                            <li>Liderança e visão estratégica</li>
                            <li>Gestão do tempo e organização</li>
                            <li>Condução de reuniões estratégicas</li>
                            <li>Elaboração de planos de ação personalizados para clientes</li>
                            <li>Capacitação contínua da equipe</li>
                        </ul>
                    </li>

                    <li>
                        <h4>Pensamento Crítico e Solução de Problemas:</h4>
                        <ul>
                            <li>Pensamento analítico e crítico</li>
                            <li>Resolução de problemas com foco em resultados</li>
                            <li>Criatividade e inovação</li>
                            <li>Atenção aos detalhes</li>
                        </ul>
                    </li>

                    <li>
                        <h4>Adaptabilidade e Desenvolvimento Pessoal:</h4>
                        <ul>
                            <li>Proatividade e flexibilidade</li>
                            <li>Capacidade de aprendizado contínuo</li>
                            <li>Adaptabilidade e aprendizado ágil</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default HabilidadesInterpessoais;