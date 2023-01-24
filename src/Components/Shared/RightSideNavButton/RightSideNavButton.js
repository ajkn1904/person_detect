import React from 'react';

const RightSideNavButton = ({ data }) => {
    return (
        <div className='flex flex-col md:flex-row justify-between'>

            <div className='flex flex-col justify-between'>
                <h2 className='text-lg'>{data.ID}: {data.Location}</h2>
                <p>Person Detected.</p>
            </div>

            <div className='flex gap-3'>
                <p>{data.Date}</p>
                <p>{data.Time}</p>
            </div>

        </div>

    );
};

export default RightSideNavButton;