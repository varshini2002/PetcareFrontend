import React, { useState } from 'react';

function BookingAppointment() {
    const [ownerName] = useState("Example Name");
    const [ownerEmail] = useState("name@example.com");
    const [ownerPhoneNumber] = useState("1234567890");
    const [ownerAddress] = useState("Address");

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
        console.log('Booking submitted:', { ownerName, ownerEmail, ownerPhoneNumber, ownerAddress, selectedPet, startDate, endDate });
        setSelectedPet('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 w-1/2 mx-auto my-5">
            <h2 className="text-2xl font-semibold mb-2 poppins-semibold">Book Appointment</h2>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Name:</label>
                <input type="text" value={ownerName} readOnly className="form-input mt-1 block w-full rounded-md border px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Email:</label>
                <input type="text" value={ownerEmail} readOnly className="form-input mt-1 block w-full rounded-md border  px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Phone Number:</label>
                <input type="text" value={ownerPhoneNumber} readOnly className="form-input mt-1 block w-full rounded-md border px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Owner Address:</label>
                <input type="text" value={ownerAddress} readOnly className="form-input mt-1 block w-full rounded-md border px-2" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Select Pet:</label>
                <select value={selectedPet} onChange={handlePetChange} className="form-select mt-1 block w-full rounded-md border">
                    <option value="">Select a pet</option>
                </select>
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">Start Date:</label>
                <input type="date" value={startDate} onChange={handleStartDateChange} className="form-input mt-1 block w-full rounded-md border" />
            </div>
            <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 poppins-regular">End Date:</label>
                <input type="date" value={endDate} onChange={handleEndDateChange} className="form-input mt-1 block w-full rounded-md border " />
            </div>
            <button onClick={handleSubmit} className="Bg-color text-white py-2 px-4 rounded hover:bg-gray-900 poppins-regular">Book Appointment</button>
        </div>
    );
}

export default BookingAppointment;
