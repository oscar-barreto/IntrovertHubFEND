import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProfileBody from './ProfileBody';

export function Profile(){
    return (
        <>
            <Navbar/>
            <ProfileBody/>
            <Footer/>
        </>
    )
}