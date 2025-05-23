// src/components/Header.jsx
import React, { useState } from 'react'; // Importe useState
import { Link, useLocation } from 'react-router-dom';
import carlosImg from '../../assets/img/carlos.jpg';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu hambúrguer

    const getLinkClass = (path) => {
        return location.pathname === path ? 'active-link' : '';
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Função para fechar o menu ao clicar em um link (útil em mobile)
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <hr />
            <div className="profile">
                <img src={carlosImg} alt="Foto de Carlos André Sabino" className="profile-img" />
                <h1>Carlos André Sabino</h1>
            </div>
            <nav>
                {/* Botão para o menu hambúrguer, visível apenas em telas pequenas via CSS */}
                <button className="hamburger-icon" onClick={toggleMenu} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
                    {menuOpen ? (
                        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </button>

                {/* O menu em si, com a classe 'menu-open' controlada pelo estado */}
                <ul className={`nav-menu ${menuOpen ? 'menu-open' : ''}`}>
                    <li><Link to="/" className={getLinkClass('/')} onClick={handleLinkClick}>Início</Link></li>
                    <li><Link to="/formacao" className={getLinkClass('/formacao')} onClick={handleLinkClick}>Formação</Link></li>
                    <li><Link to="/experiencia" className={getLinkClass('/experiencia')} onClick={handleLinkClick}>Experiência</Link></li>
                    <li><Link to="/competencias-tecnicas" className={getLinkClass('/competencias-tecnicas')} onClick={handleLinkClick}>Comp. Técnicas</Link></li>
                    <li><Link to="/habilidades-interpessoais" className={getLinkClass('/habilidades-interpessoais')} onClick={handleLinkClick}>Hab. Interpessoais</Link></li>
                    <li><Link to="/cursos-adicionais" className={getLinkClass('/cursos-adicionais')} onClick={handleLinkClick}>Cursos</Link></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
};

export default Header;