import React from 'react';
import { Banner } from '../Components/Banner';
import HouseList from'../Components/HouseList';
import { Footer } from '../Components/Footer';
export const Home = () => {
    return (
        <div className="min-h-[1800px]">
            <Banner />
            <HouseList />
            <Footer/>
        </div>
    );
};

