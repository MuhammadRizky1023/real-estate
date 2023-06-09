import React, { useContext } from 'react';
import { HouseContext } from './HouesContext';
import { Link } from 'react-router-dom';
import House from './House';
import {ImSpinner2} from 'react-icons/im';
const HouseList = () => {
    const { houses, loading } = useContext(HouseContext)
    if (loading) {
        return (
            <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4x1 mt-[240px]'/>
        )
    }
    if (houses.length < 1) {
        return <h1 className='text-center text-3x1 text-gray-600 mt-48'>Sorry not found!</h1>
    }
    return (
        <section className='mb-20'>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                    {houses.map((house, index) => {
                    return (
                        <Link to={`property/${house.id}`} key={index}>
                            <House house={house}/>
                        </Link>
                    )
                })}
                </div>
            </div>
        </section>
    );
};

export default HouseList;