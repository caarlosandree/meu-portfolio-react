import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Layout from './components/Layout/Layout.jsx'; // Importe o Layout

// Lazy load dos componentes de página
const Home = lazy(() => import('./pages/Home'));
const Formacao = lazy(() => import('./pages/Formacao'));
const Experiencia = lazy(() => import('./pages/Experiencia'));
const CompetenciasTecnicas = lazy(() => import('./pages/CompetenciasTecnicas'));
const HabilidadesInterpessoais = lazy(() => import('./pages/HabilidadesInterpessoais'));
const CursosAdicionais = lazy(() => import('./pages/CursosAdicionais'));
const Projetos = lazy(() => import('./pages/Projetos'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div className="loading-fallback">Carregando conteúdo...</div>}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/formacao" element={<Formacao />} />
                        <Route path="/experiencia" element={<Experiencia />} />
                        <Route path="/competencias-tecnicas" element={<CompetenciasTecnicas />} />
                        <Route path="/habilidades-interpessoais" element={<HabilidadesInterpessoais />} />
                        <Route path="/cursos-adicionais" element={<CursosAdicionais />} />
                        <Route path="/projetos" element={<Projetos />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;