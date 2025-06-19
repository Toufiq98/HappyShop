import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const RootLayout = () => {
    return (
        <div className='mx-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;