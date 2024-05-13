import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardContent = () => {
    const navigate = useNavigate();

    function handleClick(event) {
        const title = event.currentTarget.querySelector('h3').innerText;
        switch (title) {
            case "Booking Slots":
                navigate('/bookslots');
                break;
            case "View Bookings":
                navigate('/viewbookings');
                break;
            case "My Pets":
                navigate('/viewpets');
                break;
            case "Add a Pet":
                navigate('/addpet');
                break;
            default:
                break;
        }
    }

    return (
        
        <div className='w-2/3 mx-auto px-4 my-16'>
            
        <div className="grid grid-cols-3 grid-rows-3 gap-8 h-full">

            <div className='col-span-2'>
                <h2 className=" mt-4 text-3xl poppins-semibold font-semibold mb-4">Welcome to PetCare:<br/> Where We Pamper Your Pets with Love and Care!</h2>
            </div>            

            <div onClick={(e) => handleClick(e)} className="dashboard-item bg-red-200 hover:bg-red-300 cursor-pointer rounded-lg shadow-lg p-4 md:p-6 transform transition duration-300 hover:scale-105 row-start-2 row-span-2">
                <h3 className="text-xl font-semibold mb-2">Booking Slots</h3>
                
                <p className="text-sm text-gray-600">Book slots for your pet's care.</p>
            </div>

            <div onClick={(e) => handleClick(e)} className="dashboard-item bg-orange-200 hover:bg-orange-300 cursor-pointer rounded-lg shadow-lg p-4 md:p-6 transform transition duration-300 hover:scale-105 row-start-2 h">
                <h3 className="text-xl font-semibold mb-2">View Bookings</h3>
                <p className="text-sm text-gray-600">View your existing bookings.</p>
            </div>

            <div onClick={(e) => handleClick(e)} className="dashboard-item bg-purple-200 hover:bg-purple-300 cursor-pointer rounded-lg shadow-lg p-4 md:p-6 transform transition duration-300 hover:scale-105 row-start-3">
                <h3 className="text-xl font-semibold mb-2">My Pets</h3>
                <p className="text-sm text-gray-600">View and manage your pets.</p>
            </div>

            <div onClick={(e) => handleClick(e)} className="dashboard-item bg-green-200 hover:bg-green-300 cursor-pointer rounded-lg shadow-lg p-4 md:p-6 transform transition duration-300 hover:scale-105 col-start-3 row-span-3">
                <h3 className="text-xl font-semibold mb-2">Add a Pet</h3>
                <p className="text-sm text-gray-600">Add a new pet to your profile.</p>
            </div>
            </div>
        </div>
        
        
    );
};

export default DashboardContent;
