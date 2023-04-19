import React from 'react';
import BannerImg from '../assets/img/house-banner.png'
import Search from './Search';
export const Banner = () => {
    return (
            <section className="h-full max-h-[640px] mb-8 xl:mb-8">
                <div className="flex flex-col lg:flex-row">
                <div className='lg:ml-8 xl:ml-[135px]
                    flex flex-col items-center lg:items-start text-center
                     lg:text-right justify-center flex-1 px-4 lg:px-0'>
                    <h1 className='text-4x1 lg:text-[50px] font-semibold leading-none mb-6'>
                        <span className='text-violet-700'>Rent</span>You Dream House with Us.
                    </h1>
                        <p className='max-w-[480px] mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Iste fugit nam earum esse voluptatem quasi ipsam modi?
                            Atque neque nostrum, vitae repellendus excepturi, adipisci iste unde error corrupti tenetur eligendi?</p>
                    </div>
                    <div className='hidden lg:flex flex-1 justify-end items-end'>
                        <img src={BannerImg} alt=''/>
                    </div>
             </div>
            <Search />
        </section>
    );
};
