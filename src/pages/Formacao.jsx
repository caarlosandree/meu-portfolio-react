// src/pages/Formacao.jsx
import React from 'react';
import Header from '../components/Header/Header.jsx';

const Formacao = () => {
    return (
        <>
            <Header />
            <section className="container">
                <h2>Formação Acadêmica</h2>
                <ul className="education-list"> {/* Adicione uma classe para estilização */}
                    <li>
                        <h3>Bacharelado em Redes de Computadores</h3>
                        <span>Centro Universitário Estácio, São José | jul 2011 – dez 2013</span>
                    </li>
                    <li>
                        <h3>Bacharelado em Ciências da Computação</h3>
                        <span>Centro Universitário Estácio, São José | jan 2025 – atualmente</span>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Formacao;