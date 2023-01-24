import React from 'react';
import { TiThMenu } from 'react-icons/ti';
import { RiLoginBoxLine } from 'react-icons/ri';

const LeftSideNav = () => {
    return (
        <div className='bg-[#48cbfb] w-16 h-[91vh] flex flex-col justify-between items-center'>
            
            <TiThMenu className='text-gray-300 w-12 h-12 mt-2'/>

            <RiLoginBoxLine className='text-white w-12 h-12 rounded mb-12'/>
            
        </div>
    );
};

export default LeftSideNav;