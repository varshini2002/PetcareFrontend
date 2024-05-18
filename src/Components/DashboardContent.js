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
        <div className='w-3/4 mx-auto px-4 my-20'>
            
        <div className="grid grid-cols-3 grid-rows-3 gap-14 h-full">

            <div className='col-span-2'>
                <h2 className=" mt-4 text-5xl poppins-semibold mb-0 text-white">Welcome to PetCare: </h2>
                <p className=" mt-2  text-3xl poppins-semibold mb-4 text-white"> Where We Pamper Your Pets with Love and Care!</p>
            </div>            

            {/* bg-red-200 hover:bg-red-300 */}
            <div onClick={(e) => handleClick(e)} className="dashboard-item cursor-pointer rounded-lg shadow-lg p-4 md:p-6 transform transition duration-300 hover:scale-125 row-start-2 row-span-2 grid-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
                <h3 className="text-xl mb-2 text-white poppins-semibold">Booking Slots</h3>
                
                <p className="text-sm text-white poppins-regular">Book slots for your pet's care.</p>
            </div>

            <div onClick={(e) => handleClick(e)} className="dashboard-item cursor-pointer rounded-lg shadow-lg p-4 md:p-6 transform transition duration-300 hover:scale-125 row-start-2 grid-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
                <h3 className="text-xl text-white mb-2 poppins-semibold ">View Bookings</h3>
                <p className="text-sm text-white  poppins-reglar">View your existing bookings.</p>
            </div>

            <div onClick={(e) => handleClick(e)} className="dashboard-item cursor-pointer rounded-lg shadow-lg p-4 md:p-6 transform transition duration-300 hover:scale-125 grid-item row-start-3 grid-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
                <h3 className="text-xl text-white mb-2 poppins-semibold">My Pets</h3>
                <p className="text-sm text-white  poppins-reglar">View and manage your pets.</p>
            </div>

            <div onClick={(e) => handleClick(e)} className="dashboard-item cursor-pointer rounded-lg shadow-lg p-4 md:p-6 transform transition duration-300 hover:scale-125 col-start-3 row-span-3 grid-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1608032364895-0da67af36cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8')"}}>
                <h3 className="text-xl text-white mb-2 poppins-semibold">Add a Pet</h3>
                <p className="text-sm text-white  poppins-reglar">Add a new pet to your profile.</p>
            </div>
            </div>
        </div>
        
        
    );
};

export default DashboardContent;
