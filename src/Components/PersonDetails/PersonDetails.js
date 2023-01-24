import React from 'react';

const PersonDetails = ({ personDetails, personImages }) => {
    const { ID, Name, Location, Date, Time, Gender } = personDetails;

    let image = personImages[Name];
    //console.log(image)


    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10'>{Gender}</h2>

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
                        image &&
                        <img src={image} alt="A person" className='w-[350px] mx-auto h-[80vh]' />

                    }
                </div>


            </div >
        </div>
    );
};

export default PersonDetails;