import React from 'react';

const RightSideNavButton = ({showDetails, data}) => {
    return (
        <div>
            <div className='border w-[95%] h-20 mx-auto my-2 bg-gray-300 p-2 flex justify-between active:bg-gray-600 active:text-white' onClick={() => showDetails(data)}>
                                    <div className='flex flex-col justify-between'>
                                        <h2 className='text-lg font-bold'>{data.ID}: {data.Location}</h2>
                                        <p>Person Detected.</p>
                                    </div>

                                    <div className='flex gap-3'>
                                        <p>{data.Date}</p>
                                        <p>{data.Time}</p>
                                    </div>

                                </div>
        </div>
    );
};

export default RightSideNavButton;