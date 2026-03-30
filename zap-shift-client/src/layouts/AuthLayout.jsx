import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto h-screen bg-white p-10 rounded-2xl'>
            <Logo></Logo>
            <div className='flex items-center justify-center mt-10'>
                <div className='flex-1 h-full'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1 bg-[#FAFDF0]'>
                    <img className='w-full' src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;