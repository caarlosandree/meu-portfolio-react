import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Experiencia.css';

const Experiencia = () => {
    return (
        <>
            <Helmet>
                <title>Experiência Profissional - Carlos André Sabino</title>
                <meta name="description" content="Minha trajetória profissional, incluindo meu cargo atual como Analista de Operações e Suporte na Intelbras e experiências anteriores." />
            </Helmet>
            <section className="container">
                <h2>Experiência Profissional</h2>
                <div className="experience-list">

                    <div className="experience-card">
                        <h3>Analista de Operações e Suporte PL</h3>
                        <p className="experience-company">Intelbras – São José | 2020 – Atualmente</p>
                        <ul>
                            <li>Atuação na análise e resolução de bugs e problemas críticos do produto, garantindo a estabilidade e eficiência das soluções.</li>
                            <li>Condução de reuniões estratégicas e elaboração de planos de ação personalizados para clientes de grande porte.</li>
                            <li>Criação e manutenção de documentação técnica e procedimentos de troubleshooting para otimizar a resolução de problemas.</li>
                            <li>Colaboração com equipes de Customer Success e Desenvolvimento para apoiar clientes em implantações e no desenvolvimento de novas funcionalidades.</li>
                            <li>Gestão e aprimoramento do produto WideVoice (PABX Cloud), com foco no pós-venda para otimizar a experiência do cliente.</li>
                            <li>Treinamento e capacitação contínua da equipe de suporte (Nível 1 e 2), garantindo alinhamento com as melhores práticas e inovações.</li>
                            <li>Atendimento presencial a clientes críticos, assegurando a resolução de problemas e a manutenção de um relacionamento positivo.</li>
                            <li>Interface com a equipe de desenvolvimento e fornecedores para acompanhamento de novas implementações, melhorias e correções de bugs.</li>
                        </ul>
                    </div>

                    <div className="experience-card">
                        <h3>Analista de Service Desk</h3>
                        <p className="experience-company">Dígitro Tecnologia – Florianópolis | 2018 – 2020</p>
                        <ul>
                            <li>Suporte técnico e atendimento ao cliente em sistemas de telecomunicação e VoIP.</li>
                            <li>Manutenção de sistemas de telefonia PABX/VoIP e administração de bancos de dados SQL Server, com suporte a aplicações web.</li>
                        </ul>
                        <div className="sub-position">
                            <h4>Estagiário de Suporte Técnico</h4>
                            <p className="experience-company">2012 – 2014</p>
                            <ul>
                                <li>Execução de suporte técnico de primeiro nível e atendimento ao cliente.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-card">
                        <h3>Analista de Service Desk</h3>
                        <p className="experience-company">Flex Contact Center – Florianópolis | 2015 – 2018</p>
                        <ul>
                            <li>Suporte técnico em sistemas de telecomunicação e redes VoIP.</li>
                            <li>Administração de sistemas e equipamentos Avaya.</li>
                            <li>Diagnóstico e resolução de falhas em redes e propor soluções adequadas.</li>
                            <li>Gerenciamento de bancos de dados SQL Server e PostgreSQL.</li>
                        </ul>
                        <div className="sub-position">
                            <h4>Suporte Técnico (Cargo anterior)</h4>
                            <ul>
                                <li>Manter e monitorar redes corporativas e infraestrutura de TI.</li>
                                <li>Prestar suporte aos usuários e realizar instalação de serviços e softwares.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-card">
                        <h3>Suporte Técnico</h3>
                        <p className="experience-company">Tríplice Consultoria – Florianópolis | 2014 – 2015</p>
                        <ul>
                            <li>Prestar suporte técnico remoto e presencial a clientes corporativos.</li>
                        </ul>
                    </div>

                    <div className="experience-card">
                        <h3>Operador de Suporte Técnico</h3>
                        <p className="experience-company">RM Telecomunicações – São José | 2011 – 2012</p>
                        <ul>
                            <li>Atuar no atendimento ao cliente e resolução de problemas técnicos.</li>
                            <li>Auxílio na configuração para técnicos externos.</li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Experiencia;