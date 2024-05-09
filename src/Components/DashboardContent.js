import React from 'react';
import LoGo from '../Assets/Logoblack.png';
import { useNavigate } from 'react-router-dom';



const DashboardContent = () => {
    const navigate = useNavigate();
    function handleClick(event) {
        console.log();
        if(event.currentTarget.querySelector('h3').innerText==="Booking Slots"){
            navigate('/slots');
        }else if(event.currentTarget.querySelector('h3').innerText==="View Bookings"){
            navigate('/bookings');
        } else if(event.currentTarget.querySelector('h3').innerText==="Check Features"){
            navigate('/features');
        } else if(event.currentTarget.querySelector('h3').innerText==="Check Availability"){
            navigate('/availability');
        } else if(event.currentTarget.querySelector('h3').innerText==="My Pets"){  
            navigate('/pets');
        } else if(event.currentTarget.querySelector('h3').innerText==="Add a Pet"){
            navigate('/addpet');
        } else if(event.currentTarget.querySelector('h3').innerText==="Contact Us"){
            navigate('/contactus');            
        }
        
    }
    return (
        <div className="height  flex flex-col mt-2">
            <div className="flex">
                <div className="container mx-auto px-4 mt-24 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className='absolute right-1/2 top-1/2 scale-1500 opacity-1 0'> <img src={LoGo} alt="Logo"/></div>

                        <div onClick={(e) => handleClick(e)} className="bg-red-200 bg-opacity-50 z-50 h-36 hover:scale-105 rounded-lg poppins-regular shadow p-6 cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">Booking Slots</h3>
                            <p className="text-sm text-gray-600 w-2/3 text-wrap">Book slots for your pet's care.</p>
                        </div>

                        <div onClick={(e) => handleClick(e)} className="bg-orange-200 bg-opacity-50 z-50 hover:scale-105 rounded-lg poppins-regular shadow p-6 cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">View Bookings</h3>
                            <p className="text-sm text-gray-600 w-2/3 ">View your existing bookings.</p>
                        </div>

                        <div onClick={(e) => handleClick(e)} className="bg-amber-200 bg-opacity-50 z-50 hover:scale-105 rounded-lg poppins-regular shadow p-6 cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">Check Availability</h3>
                            <p className="text-sm text-gray-600 w-2/3 ">Explore all features available.</p>
                        </div>

                        <div onClick={(e) => handleClick(e)} className="bg-purple-200 bg-opacity-50 z-50 h-36 hover:scale-105 rounded-lg poppins-regular shadow p-6 cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">My Pets</h3>
                            <p className="text-sm text-gray-600 w-2/3 ">Explore all features available.</p>
                        </div>

                        <div onClick={(e) => handleClick(e)} className="bg-green-200 bg-opacity-50 z-50 hover:scale-105 rounded-lg poppins-regular shadow p-6 cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">Add a Pet</h3>
                            <p className="text-sm text-gray-600 w-2/3 ">Explore all features available.</p>
                        </div>

                        <div onClick={(e) => handleClick(e)} className="bg-blue-200 bg-opacity-50 z-50 hover:scale-105 rounded-lg poppins-regular shadow p-6 cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                            <p className="text-sm text-gray-600 w-2/3 ">Explore all features available.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardContent;