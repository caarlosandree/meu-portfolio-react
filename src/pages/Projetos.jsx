// src/pages/Projetos.jsx
import React from 'react';
import Header from '../components/Header/Header'; // Certifique-se que o caminho está correto

const Projetos = () => {
    const projetos = [
        {
            nome: "Meu Portfólio Pessoal",
            descricao: "Este é o meu portfólio pessoal, uma Single Page Application (SPA) desenvolvida para apresentar minhas qualificações profissionais, formação acadêmica, experiências e projetos. Construído com foco em componentização, roteamento dinâmico e responsividade para uma experiência de usuário fluida.",
            tecnologias: ["React", "Vite", "React Router DOM", "HTML5", "CSS3", "JavaScript", "GitHub Pages"],
            linkGithub: "https://github.com/caarlosandree/meu-portfolio-react", // Substitua pelo link real do seu repositório
            // imagem: '/img/portfolio-preview.png' // Se você criar uma imagem de preview, descomente e ajuste o caminho
        },
        {
            nome: "WideVoice Downloader",
            descricao: "Uma aplicação cliente-servidor para consultar o histórico de chamadas de um sistema WideVoice através de sua API, permitindo a organização por data, paginação, filtragem, download de gravações em lote (com conversão opcional para MP3 e organização por pastas) e download individual convertido para MP3.",
            tecnologias: ["Node.js", "Express.js", "JavaScript", "FFmpeg", "API REST", "Automação", "Web"],
            linkGithub: "https://github.com/caarlosandree/grav_downloader",
            // imagem: '/img/widevoice-downloader-preview.png'
        },
        {
            nome: "WideChat Agent Monitor",
            descricao: "Extensão para o navegador que monitora abas do WideChat e realiza o logout automático do agente quando a aba ou o navegador é fechado. Garante o gerenciamento seguro e eficiente das sessões de atendimento com login/logout manual e armazenamento seguro de credenciais.",
            tecnologias: ["JavaScript", "Extensão de Navegador", "Criptografia (AES-GCM)", "Automação"],
            linkGithub: "https://github.com/caarlosandree/widechat-extension-2",
            // imagem: '/img/widechat-agent-monitor-preview.png'
        },
        // Mantenha ou adicione outros projetos aqui...
    ];

    return (
        <>
            <Header />
            <section className="container">
                <h2>Meus Projetos</h2>
                <p>Aqui estão alguns dos projetos pessoais e open-source que desenvolvi, demonstrando minhas habilidades em diversas tecnologias.</p>

                <div className="projetos-grid">
                    {projetos.map((projeto, index) => (
                        <div key={index} className="projeto-card">
                            {/* {projeto.imagem && <img src={projeto.imagem} alt={`Preview do ${projeto.nome}`} className=\"projeto-img\" />} */}
                            <h3>{projeto.nome}</h3>
                            <p>{projeto.descricao}</p>
                            <p><b>Tecnologias:</b> {projeto.tecnologias.join(', ')}</p>
                            <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer">
                                Ver no GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projetos;