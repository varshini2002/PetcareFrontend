import React from 'react';
 
const DashboardContent = () => { 
    return (
<div className="min-h-screen bg-gray-100 flex flex-col">
           
           
<main className="flex-grow">
<div className="container mx-auto px-4 py-20 mt-10">
<h2 className="text-2xl mb-4 poppins-semibold">Dashboard</h2>
                    
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        
<div className="bg-white rounded-lg poppins-regular shadow p-6">
<h3 className="text-lg font-semibold mb-2">Booking Slots</h3>
<p className="text-sm text-gray-600">Book slots for your pet's care.</p>
</div>
                        
<div className="bg-white rounded-lg poppins-regular shadow p-6">
<h3 className="text-lg font-semibold mb-2">View Bookings</h3>
<p className="text-sm text-gray-600">View your existing bookings.</p>
</div>
                        
<div className="bg-white rounded-lg poppins-regular shadow p-6">
<h3 className="text-lg font-semibold mb-2">Check Features</h3>
<p className="text-sm text-gray-600">Explore all features available.</p>
</div>
</div>
</div>
</main>

</div>
    );
};
 
export default DashboardContent;