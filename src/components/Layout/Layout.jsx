import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet /> {/* As páginas serão renderizadas aqui */}
            </main>
            <Footer />
        </>
    );
};

export default Layout;