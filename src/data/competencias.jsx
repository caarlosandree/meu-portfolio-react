import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaPython, FaGitAlt, FaDocker, FaAws, FaLinux, FaJira } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiVite, SiWebpack, SiPostgresql, SiFlask, SiDjango, SiNumpy, SiPandas, SiTensorflow, SiPytorch, SiScikitlearn, SiGnubash, SiVercel, SiMongodb } from "react-icons/si";
import { DiNodejs, DiHeroku, DiDatabase } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { TbApi, TbBrandCSharp, TbBrandCpp } from "react-icons/tb";
import { BsKanbanFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export const competenciasData = [
    {
        categoria: "Desenvolvimento Front-end",
        itens: [
            { nome: "HTML5", icone: <FaHtml5 />, className: "html-icon" },
            { nome: "CSS3", icone: <FaCss3Alt />, className: "css-icon" },
            { nome: "JavaScript", icone: <SiJavascript />, className: "js-icon" },
            { nome: "TypeScript", icone: <SiTypescript />, className: "ts-icon" },
            { nome: "React", icone: <FaReact />, className: "react-icon" },
            { nome: "Angular", icone: <FaAngular />, className: "angular-icon" },
            { nome: "Vite", icone: <SiVite />, className: "vite-icon" },
            { nome: "Webpack", icone: <SiWebpack />, className: "webpack-icon" },
        ]
    },
    {
        categoria: "Desenvolvimento Back-end",
        itens: [
            { nome: "Node.js", icone: <DiNodejs />, className: "node-icon" },
            { nome: "Python", icone: <FaPython />, className: "python-icon" },
            { nome: "Flask", icone: <SiFlask />, className: "flask-icon" },
            { nome: "Django", icone: <SiDjango />, className: "django-icon" },
            { nome: "C#", icone: <TbBrandCSharp />, className: "csharp-icon" },
            { nome: "C++", icone: <TbBrandCpp />, className: "cpp-icon" },
        ]
    },
    {
        categoria: "Bancos de Dados e SGBDs",
        itens: [
            { nome: "PostgreSQL", icone: <SiPostgresql />, className: "postgres-icon" },
            { nome: "SQL Server", icone: <DiDatabase />, className: "sqlserver-icon" },
            { nome: "DB2", icone: <DiDatabase />, className: "db2-icon" },
            // MongoDB adicionado aqui
            { nome: "MongoDB", icone: <SiMongodb />, className: "mongodb-icon" },
        ]
    },
    {
        categoria: "Data Science & Machine Learning",
        itens: [
            { nome: "NumPy", icone: <SiNumpy />, className: "numpy-icon" },
            { nome: "Pandas", icone: <SiPandas />, className: "pandas-icon" },
            { nome: "Scikit-learn", icone: <SiScikitlearn />, className: "scikitlearn-icon" },
            { nome: "TensorFlow", icone: <SiTensorflow />, className: "tensorflow-icon" },
            { nome: "PyTorch", icone: <SiPytorch />, className: "pytorch-icon" },
        ]
    },
    {
        categoria: "DevOps, Cloud & Infraestrutura",
        itens: [
            { nome: "Git", icone: <FaGitAlt />, className: "git-icon" },
            { nome: "Docker", icone: <FaDocker />, className: "docker-icon" },
            { nome: "AWS", icone: <FaAws />, className: "aws-icon" },
            { nome: "Azure", icone: <VscAzure />, className: "azure-icon" },
            { nome: "Vercel", icone: <SiVercel />, className: "vercel-icon" },
            { nome: "Heroku", icone: <DiHeroku />, className: "heroku-icon" },
            { nome: "Linux", icone: <FaLinux />, className: "linux-icon" },
        ]
    },
    {
        categoria: "Gestão de Projetos e Metodologias",
        itens: [
            { nome: "Scrum", icone: <AiOutlineFundProjectionScreen />, className: "scrum-icon" },
            { nome: "Kanban", icone: <BsKanbanFill />, className: "kanban-icon" },
            { nome: "JIRA", icone: <FaJira />, className: "jira-icon" },
        ]
    },
];