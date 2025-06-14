// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa";

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
                    <li>
                        <a href="https://linkedin.com/in/caarlosandree" className="linkedin-icon" target="_blank" rel="noopener noreferrer" aria-label="Acessar meu perfil no LinkedIn" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/caarlosandree" className="github-icon" target="_blank" rel="noopener noreferrer" aria-label="Acessar meu perfil no Github" title="Github">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/carlosasab" className="instagram-icon" target="_blank" rel="noopener noreferrer" aria-label="Acessar meu perfil no Instagram" title="Instagram">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5548999244627" className="whatsapp-icon" target="_blank" rel="noopener noreferrer" aria-label="Me chame no WhatsApp" title="WhatsApp">
                            <FaWhatsapp />
                        </a>
                    </li>
                </ul>
            </section>
            <hr />
        </footer>
    );
};

export default Footer;