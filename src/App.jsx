// src/App.jsx
import React, { Suspense, lazy } from 'react'; // Adicionado Suspense e lazy
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Footer from './components/Footer/Footer.jsx'; // Importe o Footer

// Lazy load de componentes de página
const Home = lazy(() => import('./pages/Home'));
const Formacao = lazy(() => import('./pages/Formacao'));
const Experiencia = lazy(() => import('./pages/Experiencia'));
const CompetenciasTecnicas = lazy(() => import('./pages/CompetenciasTecnicas'));
const HabilidadesInterpessoais = lazy(() => import('./pages/HabilidadesInterpessoais'));
const CursosAdicionais = lazy(() => import('./pages/CursosAdicionais'));

function App() {
    return (
        <Router>
            {/* Fallback enquanto o componente da rota está sendo carregado */}
            <Suspense fallback={<div className="loading-fallback">Carregando conteúdo...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/formacao" element={<Formacao />} />
                    <Route path="/experiencia" element={<Experiencia />} />
                    <Route path="/competencias-tecnicas" element={<CompetenciasTecnicas />} />
                    <Route path="/habilidades-interpessoais" element={<HabilidadesInterpessoais />} />
                    <Route path="/cursos-adicionais" element={<CursosAdicionais />} />
                </Routes>
            </Suspense>
            <Footer /> {/* Adicione o Footer aqui */}
        </Router>
    );
}

export default App;