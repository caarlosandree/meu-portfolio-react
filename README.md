# Meu Portfólio Pessoal - Carlos André Sabino

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vitest](https://img.shields.io/badge/vitest-%236E9F18.svg?style=for-the-badge&logo=vitest&logoColor=white)

Este repositório contém o código-fonte do meu portfólio pessoal, uma Single Page Application (SPA) moderna construída para apresentar minhas qualificações, experiências e projetos. O projeto foi desenvolvido com foco em componentização, boas práticas de engenharia de software, performance e uma experiência de usuário rica e interativa.

**➡️ Veja a versão ao vivo:** [**https://caarlosandree.github.io/meu-portfolio-react/**](https://caarlosandree.github.io/meu-portfolio-react/)

---

## ✨ Principais Funcionalidades

O projeto vai além de uma simples página estática, implementando funcionalidades que demonstram conhecimento técnico aprofundado:

* **🎨 Tema Escuro e Claro:** Seletor de tema com persistência no `localStorage` e detecção automática da preferência do sistema, implementado com Context API e Variáveis CSS.
* **🚀 Animações Sutis:** Transições de página e animações de entrada para os elementos (cards, timeline), criando uma experiência de usuário fluida e moderna com `Framer Motion`.
* **📱 Design 100% Responsivo:** Layouts que se adaptam perfeitamente a qualquer tamanho de tela, utilizando técnicas modernas como CSS Grid, Flexbox e a função `clamp()` para tipografia fluida.
* **⚙️ Componentização e Roteamento:** Estrutura baseada em componentes reutilizáveis com roteamento do lado do cliente (`react-router-dom`) e carregamento sob demanda (`React.lazy`) para melhor performance inicial.
* **✅ Testes Automatizados:** Suíte de testes com Vitest e React Testing Library para garantir a qualidade e a robustez dos componentes, incluindo testes de interação, de renderização de dados com "mocking" e de componentes que consomem Contexto.
* **⚡ Otimização de Performance:** Técnicas de otimização de carregamento, como `font-display: swap` e pré-carregamento de fontes, para uma melhor performance percebida.
* **🔍 SEO Básico:** Uso de `react-helmet-async` para gerenciar metadados de cada página, melhorando a visibilidade em motores de busca.

---

## 🛠️ Tecnologias e Ferramentas

| Categoria | Tecnologias |
| :--- | :--- |
| **Base** | React 18, Vite, JavaScript (com planos de migração para TypeScript) |
| **Estilização** | CSS puro com Módulos, Variáveis CSS, CSS Grid, Flexbox |
| **Roteamento** | React Router DOM v6 |
| **Animação** | Framer Motion |
| **Testes** | Vitest, React Testing Library, JSDOM, User Event |
| **Ícones** | React Icons |
| **SEO** | React Helmet Async |
| **Deploy** | GitHub Pages, gh-pages |

---

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto na sua máquina.

**Pré-requisitos:**
* Node.js (versão 18 ou superior)
* npm ou yarn

**Passos:**
1.  Clone o repositório:
    ```bash
    git clone [https://github.com/caarlosandree/meu-portfolio-react.git](https://github.com/caarlosandree/meu-portfolio-react.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd meu-portfolio-react
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta que o Vite indicar).

---

## 📜 Scripts Disponíveis

* `npm run dev`: Inicia o servidor de desenvolvimento.
* `npm run build`: Gera a build de produção na pasta `dist/`.
* `npm run test`: Executa a suíte de testes com o Vitest.
* `npm run deploy`: Executa o build e publica o conteúdo da pasta `dist/` no GitHub Pages.

---

## 📞 Contato

**Carlos André Sabino**

* **LinkedIn:** [linkedin.com/in/caarlosandree](https://linkedin.com/in/caarlosandree)
* **GitHub:** [@caarlosandree](https://github.com/caarlosandree)