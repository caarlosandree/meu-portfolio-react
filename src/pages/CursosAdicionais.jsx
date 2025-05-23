// src/pages/CursosAdicionais.jsx
import React from 'react';
import Header from '../components/Header/Header.jsx';

const CursosAdicionais = () => {
    return (
        <>
            <Header />
            <section className="container">
                <h2>Cursos Adicionais</h2>
                <p>Participação em diversos cursos de capacitação técnica e desenvolvimento profissional, incluindo:</p>
                <ul>
                    <li>
                        <h4>Programação Básica:</h4>
                        <ul>
                            <li>Módulo 1: Primeiros Comandos</li>
                            <li>Módulo 2: Condicionais</li>
                            <li>Módulo 3: Repetições</li>
                            <li>Módulo 4: Variáveis Compostas</li>
                            <li>Módulo 5: Rotinas</li>
                        </ul>
                    </li>

                    <li>
                        <h4>Versionamento e Desenvolvimento Web:</h4>
                        <ul>
                            <li>Git e GitHub</li>
                            <li>HTML5 e CSS3 (5 Módulos de Desenvolvimento Web 2020)</li>
                            <li>JavaScript</li>
                            <li>Desenvolvimento Web com AngularJS (Unicamp)</li>
                            <li>Boas Práticas em Desenvolvimento de Software (Unicamp)</li>
                        </ul>
                    </li>

                    <li>
                        <h4>Linguagens de Programação:</h4>
                        <ul>
                            <li>Python 3 (Curso em Vídeo)</li>
                            <li>Curso de Python do Básico ao Avançado (com projetos e Django)</li>
                        </ul>
                    </li>

                    <li>
                        <h4>DevOps:</h4>
                        <ul>
                            <li>Introdução ao DevOps</li>
                            <li>Introdução a Observabilidade</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Jira Software</li>
                            <li>Confluence</li>
                            <li>Bitbucket</li>
                        </ul>
                    </li>

                    <li>
                        <h4>Cloud Computing (AWS):</h4>
                        <ul>
                            <li>AWS Cloud Practitioner Essentials</li>
                            <li>AWS re/Start Graduate (Certificação AWS Cloud Practitioner)</li>
                            <li>Fundamentos de Arquitetura de Nuvem AWS</li>
                            <li>Introdução ao Machine Learning na AWS</li>
                            <li>AWS Partner: Accreditation (Technical)</li>
                            <li>AWS Builder Learner Guide</li>
                            <li>Building Language Models on AWS</li>
                            <li>Foundations of Prompt Engineering</li>
                            <li>Introdução ao Amazon Bedrock</li>
                            <li>Aplicações modernas com bancos NoSQL na AWS</li>
                        </ul>
                    </li>

                    <li>
                        <h4>Outros Cursos e Áreas de Conhecimento:</h4>
                        <ul>
                            <li>Inglês – Nível intermediário</li>
                            <li>Manutenção de servidores e PABX</li>
                            <li>Introdução à segurança em telefonia IP</li>
                            <li>Soluções em nuvem para impulsionar negócios</li>
                            <li>Fundamentos de Voz sobre IP (VoIP)</li>
                            <li>Serviços de valor agregado – contratação e gestão</li>
                            <li>Lei Geral de Proteção de Dados (LGPD) – fundamentos</li>
                            <li>Atendimento ao cliente com excelência</li>
                            <li>Gestão da qualidade no serviço ao cliente</li>
                            <li>Elaboração de planos de comunicação eficazes</li>
                            <li>Como encantar e fidelizar clientes</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default CursosAdicionais;