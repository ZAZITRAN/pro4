import React from 'react';
import Header from '../home/Header';
import Nav_bar from '../home/Navbar';
import Abouts from '../home/Abouts';
import Footer from '../home/Footer';

function HomePage() {
    return (
        <div className='container-homepage'>
            <Nav_bar />
            <Header />
            <Abouts />
            <Footer />
        </div>
    );
}

export default HomePage;