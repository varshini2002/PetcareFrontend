import React, { useState } from 'react';

function BookingAppointment() {
    const [ownerName] = useState("John Doe");
    const [ownerEmail] = useState("john.doe@example.com");
    const [ownerPhoneNumber] = useState("123-456-7890");
    const [ownerAddress] = useState("123 Main St, Anytown, USA");

    const [selectedPet, setSelectedPet] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handlePetChange = (e) => {
        setSelectedPet(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleSubmit = () => {
        // Here you can implement the logic to submit the booking appointment
        console.log('Booking submitted:', { ownerName, ownerEmail, ownerPhoneNumber, ownerAddress, selectedPet, startDate, endDate });
        // Optionally, you can reset the form fields after submission
        setSelectedPet('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 w-1/2 mx-auto my-5">
            <h3 className="text-lg font-semibold mb-2 poppins-semibold">Book Appointment</h3>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 poppins-regular">Owner Name:</label>
                <input type="text" value={ownerName} readOnly className="form-input mt-1 block w-full" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 poppins-regular">Owner Email:</label>
                <input type="text" value={ownerEmail} readOnly className="form-input mt-1 block w-full" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 poppins-regular">Owner Phone Number:</label>
                <input type="text" value={ownerPhoneNumber} readOnly className="form-input mt-1 block w-full" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 poppins-regular">Owner Address:</label>
                <input type="text" value={ownerAddress} readOnly className="form-input mt-1 block w-full" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 poppins-regular">Select Pet:</label>
                <select value={selectedPet} onChange={handlePetChange} className="form-select mt-1 block w-full">
                    <option value="">Select a pet</option>
                    {/* Add options dynamically based on the user's pets */}
                    {/* Example: <option value="petId">Pet Name</option> */}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 poppins-regular">Start Date:</label>
                <input type="date" value={startDate} onChange={handleStartDateChange} className="form-input mt-1 block w-full" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 poppins-regular">End Date:</label>
                <input type="date" value={endDate} onChange={handleEndDateChange} className="form-input mt-1 block w-full " />
            </div>
            <button onClick={handleSubmit} className="Bg-color text-white py-2 px-4 rounded hover:bg-gray-900 poppins-regular">Book Appointment</button>
        </div>
    );
}

export default BookingAppointment;
