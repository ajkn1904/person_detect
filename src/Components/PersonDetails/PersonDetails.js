import React from 'react';

const PersonDetails = ({ personDetails, personImages }) => {
    const { ID, Name, Location, Date, Time, Gender } = personDetails;

    let image = personImages[Name];
    //console.log(image)


    return (
        <div>
            {
                ID &&
                <>

                    <h2 className='text-3xl font-bold text-center my-10'>{Gender}</h2>

                    <div className='flex justify-between items-center gap-5'>
                        <div className='w-[80%]'>
                            <h2 className='text-2xl font-bold'>{ID}</h2>
                            <p className='font-bold text-xl'>Person Detected</p>

                            <div className='my-10 flex justify-between items-center w-52 text-xl'>
                                
                                <div>
                                    <p>Name</p>
                                    <p>Location</p>
                                    <p>Date</p>
                                    <p>Time</p>
                                </div>
                                <div>
                                    <p>: {Name}</p>
                                    <p>: {Location}</p>
                                    <p>: {Date}</p>
                                    <p>: {Time}</p>
                                </div>

                            </div>
                            <p className='w-52 text-xl'>Description: {Name} detected at {Location} on {Date}.</p>
                        </div>

                        <div>
                            {
                                image &&
                                <img src={image} alt="A person" className='w-[600px] mx-auto h-[70vh]' />

                            }
                        </div>

                    </div >
                </>}

        </div>
    );
};

export default PersonDetails;