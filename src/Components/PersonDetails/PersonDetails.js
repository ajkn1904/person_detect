import React from 'react';

const PersonDetails = ({ personDetails, personImages }) => {
    const { ID, Name, Location, Date, Time } = personDetails;

    let image = personImages[Name];
    //console.log(image)


    return (
        <div className='flex justify-between items-center gap-3'>
            <div>
                <h2 className='text-2xl font-bold'>{ID}</h2>
                <p className='font-bold text-xl'>Person Detected</p>

                <div className='my-10'>
                    <table className="table-border-collapse border-0">
                        <tbody>
                            <tr>
                                <td>Name : {Name}</td>
                            </tr>
                            <tr>
                                <td>Location : {Location}</td>
                            </tr>
                            <tr>
                                <td>Date : {Date}</td>
                            </tr>
                            <tr>
                                <td>Time : {Time}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <p>Description: {Name} detected at {Location} on {Date}.</p>
            </div>

            <div>
                {
                image && <>
                <h2 className='text-xl font-bold'>{Name}</h2>
                <img src={image} alt="A person" className='w-[90%] mx-auto h-[90vh]'/>
                </>
                }
            </div>


        </div >
    );
};

export default PersonDetails;