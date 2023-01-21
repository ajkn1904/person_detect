import React from 'react';
import { GoSearch } from 'react-icons/go';

const Header = () => {
    return (
        <div className='bg-[#20208f] h-16 flex justify-between items-center pl-8 pr-5'>
            <h1 className='text-[#2f8064] font-serif font-bold text-2xl'><span className='text-3xl'>S</span>ECQUR<span className='text-[#ff0303] text-3xl'>AI</span>SE</h1>

            <div className='flex justify-between items-center'>
                <GoSearch className='text-white text-lg' />

                <div className='flex gap-3 mb-4 ml-20'>
                    <div className='bg-[#8cce1a] h-10 w-16'></div>
                    <div className='bg-[#ff0303] h-10 w-16'></div>
                </div>
            </div>


        </div>
    );
};

export default Header;