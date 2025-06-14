import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { experienciaData } from '../data/experiencia.js';
import '../styles/Experiencia.css';

const listVariants = {
    visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Experiencia = () => {
    return (
        <>
            <Helmet>
                <title>Experiência Profissional - Carlos André Sabino</title>
                <meta name="description" content="Minha trajetória profissional, destacando conquistas e habilidades aplicadas em cada cargo." />
            </Helmet>
            <section className="container">
                <h2>Experiência Profissional</h2>
                <motion.div
                    className="experience-list"
                    initial="hidden"
                    animate="visible"
                    variants={listVariants}
                >
                    {experienciaData.map((exp) => (
                        <motion.div key={exp.id} className="experience-card" variants={itemVariants}>
                            {/* O cabeçalho do card foi simplificado */}
                            <h3>{exp.cargo}</h3>
                            <p className="experience-company">{exp.empresa} – {exp.local} | {exp.periodo}</p>

                            <div className="experience-details">
                                <h5>Responsabilidades:</h5>
                                <ul>
                                    {exp.responsabilidades.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>

                                {exp.subPosition && (
                                    <div className="sub-position">
                                        <h4>{exp.subPosition.cargo}</h4>
                                        <p className="experience-company">{exp.subPosition.periodo}</p>
                                        <ul>
                                            {exp.subPosition.responsabilidades.map((item, index) => <li key={index}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}

                                {exp.conquistas && exp.conquistas.length > 0 && (
                                    <div className="achievements">
                                        <h5>⭐ Principais Conquistas:</h5>
                                        <ul>
                                            {exp.conquistas.map((item, index) => <li key={index}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="skills-tags">
                                {exp.habilidades.map((habilidade, index) => (
                                    <span key={index} className="skill-tag">{habilidade}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    );
};

export default Experiencia;