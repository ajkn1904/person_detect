import React, { useState } from 'react';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import RightSideNavButton from '../Shared/RightSideNavButton/RightSideNavButton';

const RightSideNav = ({ personData, showDetails, databaseRef, db }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Select");
    const [filter, setFilter] = useState("Select");
    const [sort, setSort] = useState(false);


    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (data) => {
        console.log(data)
        setSelected(data)
    }

    const handleFilter = (data) => {
        setSort(true)
        console.log(data)
        setFilter(data)

    }

    const handleResetFilter = () => {
        //setIsOpen(!isOpen);
        setFilter("")
        setSort(false)
    }


    return (
        <div className='border-2 border-gray-300 overflow-y-auto h-[90vh] scrollbar-hide w-96'>
            <div className='flex justify-between items-center px-2'>
                <h2 className='font-bold text-2xl pt-3 pb-5'>Events</h2>


                <HiOutlineAdjustmentsHorizontal className='w-12 h-12 px-1' onClick={handleClick}>
                </HiOutlineAdjustmentsHorizontal>


            </div >



            {isOpen ?
                <div className='flex justify-between items-center px-5'>

                    <select className="select max-w-xs" onClick={e => {
                        handleSelect(e.target.value);

                    }}>
                        <option defaultValue="Select">Select</option>
                        <option value="gender">Gender</option>
                        <option value="location">Location</option>
                        <option value="date">Date</option>
                    </select>

                    <button className='btn btn-circle btn-xs border-none text-black hover:text-red-600 hover:bg-transparent font-bold bg-transparent' onClick={handleResetFilter}>Reset</button>


                </div>

                :
                <></>
            }



            {isOpen && selected === "location" ?
                <select className="select max-w-xs" onClick={e => {
                    handleFilter(e.target.value);

                }}>
                    <option defaultValue="Select">Select</option>
                    {sort && <>
                        <option value="Chennai">Chennai</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Bangalore">Bangalore</option>
                    </>
                    }
                </select>

                :
                <></>
            }



            {isOpen && selected === "gender" ?
                <select className="select max-w-xs" onClick={e => {
                    handleFilter(e.target.value);

                }}>
                    <option defaultValue="Select">Select</option>
                    {sort && <>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </>
                    }
                </select>

                :
                <></>
            }



            {isOpen && selected === "date" ?
                <select className="select max-w-xs" onClick={e => {
                    handleFilter(e.target.value);

                }}>
                    <option defaultValue="Select">Select</option>
                    {sort && <>
                    <option value="1/5/23">1/5/23</option>
                    <option value="1/6/23">1/6/23</option>
                    <option value="1/7/23">1/7/23</option>
                    <option value="1/9/23">1/9/23</option>
                    </>
                }
                </select>

                :
                <></>
            }




            {
                personData.map(data =>
                    <div key={data.ID} className='flex justify-between'>

                        {
                            sort && (filter === data.Location || filter === data.Gender || filter === data.Date) ?
                                <>
                                    <RightSideNavButton showDetails={showDetails} data={data} />
                                </>

                                :

                                <>
                                    {
                                        (!sort) &&
                                        <RightSideNavButton showDetails={showDetails} data={data} />
                                    }
                                </>
                        }
                    </div>
                )
            }

        </div >

    );
};

export default RightSideNav;