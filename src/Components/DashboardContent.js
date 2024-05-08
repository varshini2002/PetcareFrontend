import React from 'react';
 
const LoginPage = () => {
    // Mock data for user profile
    const userProfile = {
        username: 'john_doe',
        email: 'john@example.com'
    };
 
    return (
<div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header */}
<header className="bg-white shadow">
<div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    {/* Logo */}
<h1 className="text-lg font-semibold text-gray-800">PetCare</h1>
                    {/* User Profile */}
<div className="flex items-center">
<p className="mr-4 text-sm text-gray-600">Welcome, {userProfile.username}!</p>
<button className="text-sm text-gray-600 hover:text-gray-800">Logout</button>
</div>
</div>
</header>
            {/* Main Content */}
<main className="flex-grow">
<div className="container mx-auto px-4 py-8">
<h2 className="text-xl font-semibold mb-4">Dashboard</h2>
                    {/* User Features */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Booking Slots */}
<div className="bg-white rounded-lg shadow p-6">
<h3 className="text-lg font-semibold mb-2">Booking Slots</h3>
<p className="text-sm text-gray-600">Book slots for your pet's care.</p>
</div>
                        {/* View Bookings */}
<div className="bg-white rounded-lg shadow p-6">
<h3 className="text-lg font-semibold mb-2">View Bookings</h3>
<p className="text-sm text-gray-600">View your existing bookings.</p>
</div>
                        {/* Check Features */}
<div className="bg-white rounded-lg shadow p-6">
<h3 className="text-lg font-semibold mb-2">Check Features</h3>
<p className="text-sm text-gray-600">Explore all features available.</p>
</div>
</div>
</div>
</main>

</div>
    );
};
 
export default LoginPage;