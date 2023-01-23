import React from 'react';


const RightSideNav = ({ personData, showDetails, personImages }) => {

    /*  const [match, setMatch] = useState({})
     //let match = " ";
     for (const [key, value] of Object.entries(personImages)) {
         if (key === "Female01") {
             setMatch(key);
         }
     }
  */

/*     let image = personImages["Female01"];
    console.log(image) */

    return (
        <div className='border-2 border-gray-300 overflow-y-auto h-[90vh] scrollbar-hide w-96'>
            {
                personData.map(data =>
                    <div key={data.ID} className='flex justify-between'>


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
                )
            }

        </div>

    );
};

export default RightSideNav;