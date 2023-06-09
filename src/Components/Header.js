import React from 'react';
import Logo from '../assets/img/logo.svg'
import {Link} from 'react-router-dom'
export const Header = () => {
    return (
        <header className="py-6 mb-12 border-b">
            <div className="container mx-auto  flex justify-between items-center">
                <Link>
                    <img src={Logo} href=""/>
                </Link>
                <div className='flex items-center gap-6'>
                    <Link className='hover:text-violet-900' to=''>Login</Link>
                    <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/register'>Sign up</Link>
                </div>
            </div>
        </header>
    );
};

