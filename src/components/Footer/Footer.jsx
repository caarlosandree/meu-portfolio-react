// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <hr />
            <section className="container contact-info">
                <h2>Contato</h2>
                <p>
                    <b>Email:</b> <a href="mailto:caarlosandree@gmail.com">caarlosandree@gmail.com</a><br />
                    <b>Celular:</b> (48) 99924-4627<br />
                    <b>Endereço:</b> Rua Candido Amaro Damásio, 943 - Jardim Cidade de Florianópolis, São José - CEP: 88111-110
                </p>
                <h2>Redes Sociais</h2>
                <ul className="social-links">
                    <li><a href="https://linkedin.com/in/caarlosandree" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/caarlosandree" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://instagram.com/carlosasab" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </section>
            <hr />
        </footer>
    );
};

export default Footer;